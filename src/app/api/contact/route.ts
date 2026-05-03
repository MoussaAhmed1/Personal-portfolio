import { Resend } from 'resend';

export const runtime = 'nodejs';

const LIMITS = {
  name: 100,
  email: 200,
  subject: 200,
  message: 5000,
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const DEFAULT_FROM = 'Portfolio <onboarding@resend.dev>';
const DEFAULT_TO = 'moussa.abdelghany@gmail.com';

type Body = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
};

const fail = (status: number, error: string) =>
  Response.json({ ok: false, error }, { status });

const escapeHtml = (input: string) =>
  input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return fail(400, 'invalid');
  }

  if (typeof body.website === 'string' && body.website.trim() !== '') {
    return Response.json({ ok: true });
  }

  const fields = {
    name: typeof body.name === 'string' ? body.name.trim() : '',
    email: typeof body.email === 'string' ? body.email.trim() : '',
    subject: typeof body.subject === 'string' ? body.subject.trim() : '',
    message: typeof body.message === 'string' ? body.message.trim() : '',
  };

  if (
    !fields.name ||
    !fields.email ||
    !fields.subject ||
    !fields.message ||
    fields.name.length > LIMITS.name ||
    fields.email.length > LIMITS.email ||
    fields.subject.length > LIMITS.subject ||
    fields.message.length > LIMITS.message ||
    !EMAIL_RE.test(fields.email)
  ) {
    return fail(400, 'invalid');
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set');
    return fail(500, 'server');
  }

  const resend = new Resend(apiKey);
  const from = process.env.CONTACT_FROM_EMAIL ?? DEFAULT_FROM;
  const to = process.env.CONTACT_TO_EMAIL ?? DEFAULT_TO;

  const text = [
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Subject: ${fields.subject}`,
    '',
    fields.message,
  ].join('\n');

  const html = `
    <div style="font-family: system-ui, -apple-system, sans-serif; line-height: 1.5;">
      <p><strong>Name:</strong> ${escapeHtml(fields.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(fields.email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(fields.subject)}</p>
      <hr />
      <p style="white-space: pre-wrap;">${escapeHtml(fields.message)}</p>
    </div>
  `;

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: fields.email,
    subject: `[Portfolio] ${fields.subject}`,
    text,
    html,
  });

  if (error) {
    console.error('[contact] Resend send failed', error);
    return fail(502, 'send');
  }

  return Response.json({ ok: true });
}
