# Appointment Email — Setup Action Items

One-time steps to make the "Book an appointment" form deliver email to the clinic.
No code changes are needed from you — this is account setup + deploy.
Run all commands inside `server/appointment-worker/`.

Legend: **[you]** = only you can do it (needs your accounts/credentials) ·
**[done]** = already handled · **[me]** = I can do it for you when you're ready.

---

## 1. Gmail App Password  **[you]**

The worker sends mail through a Gmail account using an App Password (not the
normal password; revocable anytime).

- [ ] Use the Gmail account that should SEND the notifications (can be the same
      as the receiving inbox).
- [ ] Turn on 2-Step Verification: https://myaccount.google.com/security
- [ ] Create an App Password: https://myaccount.google.com/apppasswords
      → name it "Appointment Worker".
- [ ] Copy the 16-character code (e.g. `abcd efgh ijkl mnop`) **without spaces**.

## 2. Cloudflare account  **[you]**

- [ ] Sign up (free): https://dash.cloudflare.com/sign-up

## 3. Install & log in  **[you]**

- [x] `npm install`  ← already done
- [ ] `npx wrangler login`  (opens browser to authorize Wrangler)

## 4. Store the two secrets  **[you]**

Encrypted, never committed to the repo.

- [ ] `npx wrangler secret put GMAIL_USER`
      → paste the sending Gmail address (e.g. `clinic.gmail@gmail.com`)
- [ ] `npx wrangler secret put GMAIL_APP_PASSWORD`
      → paste the 16-char app password from step 1

## 5. (Optional) Review config in `wrangler.toml`  **[you/me]**

- [ ] `CLINIC_EMAIL` — inbox that receives requests (currently the doctor's Gmail)
- [ ] `DOCTOR_NAME` / `CLINIC_NAME` — wording used inside the email
- [ ] `ALLOWED_ORIGIN` — already has GitHub Pages + localhost; add a custom
      domain here later if you get one

## 6. (Optional) Test locally  **[you]**

- [ ] Copy `.dev.vars.example` → `.dev.vars` and fill in the two values
- [ ] `npm run dev`  (starts http://127.0.0.1:8787)
- [ ] Send a test request:

```bash
curl -X POST http://127.0.0.1:8787 \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Patient","phone":"9876543210","date":"Mon, 01 Sep 2026","time":"6:00 PM","message":"Cough for a week"}'
# → {"ok":true}  and an email should arrive in the clinic inbox
```

## 7. Deploy the worker  **[you]**

- [ ] `npm run deploy`
- [ ] Copy the printed URL, e.g.
      `https://appointment-worker.<your-subdomain>.workers.dev`

## 8. Connect the site to the worker  **[me]**

- [ ] Put the worker URL into `src/data/portfolio.ts`:

```ts
booking: {
  timeSlots: [ /* ... */ ],
  relayEndpoint: 'https://appointment-worker.<your-subdomain>.workers.dev',
},
```

- [ ] Rebuild / redeploy the site (normal GitHub Pages deploy)

> Once you have the deployed URL from step 7, hand it to me and I'll do step 8.

---

## Summary of what only YOU can do

Steps that require your accounts/credentials and can't be automated:
1. Gmail App Password (step 1)
2. Cloudflare login (step 3)
3. Setting the secrets (step 4)
4. Deploying (step 7)

Everything else (config wording, wiring the URL into the site) I can handle.

## Troubleshooting

- **CORS error in browser** → add the exact site origin to `ALLOWED_ORIGIN` in
  `wrangler.toml`, then redeploy.
- **`535 Username and Password not accepted`** → you used the normal Gmail
  password; use an App Password and ensure 2-Step Verification is on.
- **Email not arriving** → check spam; verify `CLINIC_EMAIL`; stream logs with
  `npx wrangler tail` while submitting.

(Full walkthrough also lives in `README.md` in this folder.)
