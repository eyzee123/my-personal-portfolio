import { NextResponse } from 'next/server';

// Simple debug route: GET /api/sendgrid-status
// Calls SendGrid /v3/user/account to validate API key and returns a small status.
// NOTE: Keep this route temporary and do NOT deploy it to production with a public key.
export async function GET() {
  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: 'SENDGRID_API_KEY not set' }, { status: 400 });
  }
  console.log("apiKey", apiKey);
  try {
    const res = await fetch('https://api.sendgrid.com/v3/user/account', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      // Return limited info to help debug (status + text). Do not return headers or secrets.
      const bodyText = await res.text();
      return NextResponse.json({ ok: false, status: res.status, body: bodyText }, { status: 502 });
    }

    // We don't need to return the full account object — just a success marker.
    return NextResponse.json({ ok: true, status: 200 });
  } catch (err: any) {
    console.error('sendgrid-status error:', err);
    return NextResponse.json({ ok: false, error: err?.message || String(err) }, { status: 500 });
  }
}
