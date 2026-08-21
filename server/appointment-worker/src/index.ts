import { WorkerMailer } from 'worker-mailer';

/**
 * Environment bindings.
 *
 * `CLINIC_EMAIL` and `ALLOWED_ORIGIN` are plain vars (see wrangler.toml).
 * `GMAIL_USER` and `GMAIL_APP_PASSWORD` are SECRETS set via
 * `wrangler secret put ...` — they must never be committed.
 */
export interface Env {
  /** Gmail address used to authenticate + send (also the From address). */
  GMAIL_USER: string;
  /** 16-character Google App Password (NOT the normal account password). */
  GMAIL_APP_PASSWORD: string;
  /** Inbox that receives appointment requests. */
  CLINIC_EMAIL: string;
  /** Comma-separated list of allowed site origins for CORS. */
  ALLOWED_ORIGIN: string;
  /** Doctor's name, used to address the email, e.g. "Dr. G. Chaitanya Kiran". */
  DOCTOR_NAME?: string;
  /** Practice / clinic name shown as the email sender and header. */
  CLINIC_NAME?: string;
}

interface AppointmentPayload {
  name?: string;
  phone?: string;
  date?: string;
  time?: string;
  message?: string;
}

/** Builds CORS headers, echoing the request origin only if it's allow-listed. */
function corsHeaders(origin: string | null, env: Env): Record<string, string> {
  const allowList = (env.ALLOWED_ORIGIN || '')
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean);
  const allowAll = allowList.includes('*');
  const isAllowed = Boolean(origin) && (allowAll || allowList.includes(origin as string));
  return {
    'Access-Control-Allow-Origin': isAllowed ? (origin as string) : (allowList[0] ?? '*'),
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}

function json(body: unknown, status: number, headers: Record<string, string>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...headers },
  });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get('Origin');
    const cors = corsHeaders(origin, env);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors });
    }
    if (request.method !== 'POST') {
      return json({ ok: false, error: 'Method not allowed' }, 405, cors);
    }

    let payload: AppointmentPayload;
    try {
      payload = (await request.json()) as AppointmentPayload;
    } catch {
      return json({ ok: false, error: 'Invalid JSON body' }, 400, cors);
    }

    const name = (payload.name ?? '').trim();
    const phone = (payload.phone ?? '').trim();
    const date = (payload.date ?? '').trim();
    const time = (payload.time ?? '').trim();
    const note = (payload.message ?? '').trim();

    // Server-side validation mirrors the form so bad/empty requests never send.
    if (name.length < 2 || phone.replace(/\D/g, '').length < 10) {
      return json({ ok: false, error: 'Missing or invalid name/phone' }, 422, cors);
    }

    const doctorName = (env.DOCTOR_NAME || 'Doctor').trim();
    const clinicName = (env.CLINIC_NAME || 'Appointments').trim();
    const phoneDigits = phone.replace(/\D/g, '');
    const receivedAt = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    const rows: Array<[string, string]> = [
      ['Patient name', name],
      ['Contact number', phone],
      ['Preferred date', date || 'Not specified'],
      ['Preferred time', time || 'Not specified'],
    ];
    if (note) rows.push(['Patient note', note]);

    // Plain-text fallback for email clients that don't render HTML.
    const text = [
      `Dear ${doctorName},`,
      '',
      'A new appointment request has been submitted through your website.',
      'The patient details are below — please reach out to confirm the slot.',
      '',
      ...rows.map(([label, value]) => `${label}: ${value}`),
      '',
      `Received: ${receivedAt} IST`,
      '',
      'This is an automated notification from your website booking form.',
      clinicName,
    ].join('\n');

    const html = `
      <div style="margin:0;padding:24px 12px;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#0f172a">
        <table role="presentation" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 6px 24px rgba(15,23,42,0.08)">
          <tr>
            <td style="background:#0d9488;padding:22px 28px">
              <div style="color:#ffffff;font-size:18px;font-weight:700;letter-spacing:0.2px">${escapeHtml(clinicName)}</div>
              <div style="color:#c7f0ea;font-size:13px;margin-top:2px">New appointment request</div>
            </td>
          </tr>
          <tr>
            <td style="padding:28px">
              <p style="margin:0 0 14px;font-size:15px;line-height:1.6">Dear ${escapeHtml(doctorName)},</p>
              <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#334155">
                A new appointment request has been submitted through your website. The patient's
                details are summarised below. Please contact the patient at your convenience to
                confirm or reschedule the requested slot.
              </p>
              <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:separate;border-spacing:0;font-size:14.5px;border:1px solid #e2e8f0;border-radius:10px;overflow:hidden">
                ${rows
                  .map(
                    ([label, value], index) => `
                <tr>
                  <td style="padding:11px 14px;background:#f8fafc;font-weight:600;color:#475569;width:150px;vertical-align:top;${index > 0 ? 'border-top:1px solid #e2e8f0;' : ''}">${escapeHtml(label)}</td>
                  <td style="padding:11px 14px;color:#0f172a;vertical-align:top;${index > 0 ? 'border-top:1px solid #e2e8f0;' : ''}">${escapeHtml(value)}</td>
                </tr>`,
                  )
                  .join('')}
              </table>
              <div style="margin:22px 0 6px">
                <a href="tel:${escapeHtml(phone)}" style="display:inline-block;padding:11px 20px;margin:0 8px 8px 0;background:#0d9488;color:#ffffff;text-decoration:none;border-radius:8px;font-size:14px;font-weight:600">Call patient</a>
                ${
                  phoneDigits.length >= 10
                    ? `<a href="https://wa.me/${phoneDigits}" style="display:inline-block;padding:11px 20px;margin:0 0 8px 0;background:#ffffff;color:#0d9488;text-decoration:none;border:1px solid #0d9488;border-radius:8px;font-size:14px;font-weight:600">Message on WhatsApp</a>`
                    : ''
                }
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 28px;background:#f8fafc;border-top:1px solid #e2e8f0">
              <p style="margin:0;font-size:12px;color:#94a3b8;line-height:1.5">
                Received ${escapeHtml(receivedAt)} IST · Automated notification from your website booking form.
              </p>
            </td>
          </tr>
        </table>
      </div>`;

    try {
      await WorkerMailer.send(
        {
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          startTls: true,
          authType: ['login', 'plain'],
          credentials: {
            username: env.GMAIL_USER,
            password: env.GMAIL_APP_PASSWORD,
          },
        },
        {
          // Gmail requires the From address to be the authenticated account.
          from: { name: clinicName, email: env.GMAIL_USER },
          to: { email: env.CLINIC_EMAIL },
          subject: `New appointment request — ${name}${date ? ` (${date})` : ''}`,
          text,
          html,
        },
      );
    } catch (error) {
      console.error('Appointment email failed to send:', error);
      return json({ ok: false, error: 'Failed to send email' }, 502, cors);
    }

    return json({ ok: true }, 200, cors);
  },
} satisfies ExportedHandler<Env>;
