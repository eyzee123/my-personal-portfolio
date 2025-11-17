import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

// POST /api/send-email (using SendGrid)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    }

    const apiKey =  process.env.SENDGRID_API_KEY;
    const to = process.env.EMAIL_TO || process.env.SENDGRID_TO;
    const from = process.env.SENDGRID_FROM || process.env.EMAIL_FROM || process.env.SENDGRID_TO || process.env.EMAIL_TO;

    if (!apiKey || !to || !from) {
      return NextResponse.json({ ok: false, error: 'SendGrid not configured. Please set SENDGRID_API_KEY and SENDGRID_FROM / EMAIL_TO.' }, { status: 500 });
    }

    sgMail.setApiKey(apiKey);
    console.log("sendgrid api key:", apiKey);
    const msg = {
      to,
      from,
      subject: `Portfolio contact form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br/>')}</p>`,
    } as any;

    try {
      const response = await sgMail.send(msg);
      return NextResponse.json({ ok: true });
    } catch (sendErr: any) {
      // SendGrid errors sometimes include a response body with details. Log it server-side for debugging.
      console.error('SendGrid send error:', sendErr?.message || sendErr);
      if (sendErr?.response?.body) {
        console.error('SendGrid response body:', sendErr.response.body);
      }
      // Return a generic error to the client to avoid leaking internal details or secrets.
      return NextResponse.json({ ok: false, error: 'Failed to send email' }, { status: 502 });
    }
  } catch (err: any) {
    console.error('send-email (sendgrid) error:', err);
    return NextResponse.json({ ok: false, error: err?.message || String(err) }, { status: 500 });
  }
}
