import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, business, pain, size } = await req.json();
    if (!name || !email || !business || !pain) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || 'thevoiceofcash@gmail.com',
      subject: `🔥 New AI Skills Agents Lead: ${business} (${name})`,
      html: `
        <div style="font-family:sans-serif;background:#080808;color:#F0EEE8;padding:32px;max-width:540px;">
          <div style="color:#00C896;font-weight:900;font-size:20px;margin-bottom:24px;">New Lead — AI Skills Agents</div>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#888;font-size:13px;width:140px;">Name</td><td style="color:#F0EEE8;font-size:14px;font-weight:700;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:13px;">Email</td><td style="color:#00C896;font-size:14px;">${email}</td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:13px;">Business</td><td style="color:#F0EEE8;font-size:14px;">${business}</td></tr>
            <tr><td style="padding:8px 0;color:#888;font-size:13px;">Company Size</td><td style="color:#F0EEE8;font-size:14px;">${size || 'Not specified'}</td></tr>
          </table>
          <div style="margin-top:20px;padding:16px;background:#001a12;border-left:3px solid #00C896;">
            <div style="font-size:11px;color:#888;margin-bottom:8px;letter-spacing:1px;">BIGGEST TIME-WASTER</div>
            <div style="color:#F0EEE8;font-size:14px;line-height:1.6;">${pain}</div>
          </div>
          <div style="margin-top:24px;font-size:12px;color:#333;">Source: aiskillsagents.com</div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
