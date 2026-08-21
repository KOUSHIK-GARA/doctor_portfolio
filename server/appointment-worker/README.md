# Appointment Worker

A tiny [Cloudflare Worker](https://developers.cloudflare.com/workers/) that receives
appointment requests from the doctor portfolio site and **emails them to the clinic**
via Gmail SMTP. It holds the email credentials as secrets, so the static GitHub Pages
frontend never exposes them.

```
Patient submits form (GitHub Pages)
        │  POST JSON  { name, phone, date, time, message }
        ▼
appointment-worker (Cloudflare)  ──►  Gmail SMTP  ──►  clinic inbox
```

> WhatsApp delivery is intentionally not included yet. When you want it later, add a
> second delivery call inside `src/index.ts` — the frontend already sends everything
> the message needs.

---

## 1. Prerequisites

- A Cloudflare account (free) — <https://dash.cloudflare.com/sign-up>
- Node.js 18+ installed locally
- A Gmail account for the clinic with an **App Password** (below)

### Create a Gmail App Password

1. Turn on **2-Step Verification** for the Gmail account:
   <https://myaccount.google.com/security>
2. Open **App passwords**: <https://myaccount.google.com/apppasswords>
3. Create one (name it e.g. "Appointment Worker"). Google shows a 16-character
   password like `abcd efgh ijkl mnop` — copy it **without spaces**.

This app password is what the worker uses to send mail. It is not your normal
Gmail password and can be revoked anytime.

---

## 2. Install & configure

```bash
cd server/appointment-worker
npm install
```

Edit `wrangler.toml` if needed:

- `CLINIC_EMAIL` — where appointment requests are delivered.
- `ALLOWED_ORIGIN` — comma-separated site origins allowed to call the worker
  (your GitHub Pages origin, plus `http://localhost:5173` for local dev).

Set the two secrets (they are encrypted and never stored in the repo):

```bash
npx wrangler secret put GMAIL_USER          # e.g. clinic.gmail@gmail.com
npx wrangler secret put GMAIL_APP_PASSWORD  # the 16-char app password
```

For **local** testing, copy `.dev.vars.example` to `.dev.vars` and fill it in.

---

## 3. Test locally

```bash
npm run dev            # starts http://127.0.0.1:8787
```

```bash
curl -X POST http://127.0.0.1:8787 \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Patient","phone":"9876543210","date":"Mon, 01 Sep 2026","time":"6:00 PM","message":"Cough for a week"}'
# → {"ok":true}
```

Check the clinic inbox for the email.

---

## 4. Deploy

```bash
npm run deploy
```

Wrangler prints the live URL, e.g.
`https://appointment-worker.<your-subdomain>.workers.dev`.

---

## 5. Wire the frontend

Put that URL into the site's booking config:

`src/data/portfolio.ts`

```ts
booking: {
  timeSlots: [ /* ... */ ],
  relayEndpoint: 'https://appointment-worker.<your-subdomain>.workers.dev',
},
```

Rebuild/redeploy the site. Now submitting the form POSTs to the worker, which emails
the clinic — no WhatsApp window, no exposed credentials.

---

## Troubleshooting

- **CORS error in the browser** — add the exact site origin to `ALLOWED_ORIGIN` in
  `wrangler.toml` and redeploy.
- **`535 Username and Password not accepted`** — you used the normal Gmail password.
  Use an **App Password** and make sure 2-Step Verification is on.
- **Email not arriving** — check spam; verify `CLINIC_EMAIL`; run `npx wrangler tail`
  to stream worker logs while submitting.
