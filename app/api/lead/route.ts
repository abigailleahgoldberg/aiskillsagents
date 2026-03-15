import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, business, pain, size } = await req.json();
    if (!name || !email || !business || !pain) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const brevoKey = process.env.BREVO_API_KEY;
    if (!brevoKey) {
      console.error('BREVO_API_KEY not set');
      return NextResponse.json({ ok: true });
    }

    // Add contact to Brevo CRM
    await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': brevoKey,
      },
      body: JSON.stringify({
        email,
        attributes: { FIRSTNAME: name, COMPANY: business, SOURCE: 'AI Skills Agents' },
        listIds: [3],
        updateEnabled: true,
      }),
    });

    // Send notification email via Brevo SMTP API
    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': brevoKey,
      },
      body: JSON.stringify({
        sender: { name: 'AI Skills Agents', email: 'abigailleahgoldberg@gmail.com' },
        to: [{ email: 'thevoiceofcash@gmail.com', name: 'The Voice of Cash' }],
        subject: `[AI Skills Agents] New Lead: ${business} (${name})`,
        htmlContent: `
          <div style="font-family:sans-serif;max-width:540px;padding:32px;">
            <h2 style="color:#2563EB;margin-bottom:24px;">New Lead from AI Skills Agents</h2>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;color:#888;font-size:13px;width:140px;">Name</td><td style="font-size:14px;font-weight:700;">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#888;font-size:13px;">Email</td><td style="color:#2563EB;font-size:14px;">${email}</td></tr>
              <tr><td style="padding:8px 0;color:#888;font-size:13px;">Business</td><td style="font-size:14px;">${business}</td></tr>
              <tr><td style="padding:8px 0;color:#888;font-size:13px;">Company Size</td><td style="font-size:14px;">${size || 'Not specified'}</td></tr>
            </table>
            <div style="margin-top:20px;padding:16px;background:#F0F9FF;border-left:3px solid #2563EB;">
              <div style="font-size:11px;color:#888;margin-bottom:8px;letter-spacing:1px;">BIGGEST TIME-WASTER</div>
              <div style="font-size:14px;line-height:1.6;">${pain}</div>
            </div>
            <p style="margin-top:24px;font-size:12px;color:#999;">Source: aiskillsagents.com</p>
          </div>
        `,
      }),
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('Lead form error:', e);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
