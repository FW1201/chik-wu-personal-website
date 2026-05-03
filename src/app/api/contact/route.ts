import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "必填欄位不完整" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "聯繫表單 <contact@jdn2023.com>",
    to: "kevinwu@gtrainerdemo.jdn2023.com",
    replyTo: email,
    subject: `[${subject}] 來自 ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;border:1px solid #e0e0e0;border-radius:8px;">
        <h2 style="font-size:20px;color:#111111;margin-bottom:24px;border-bottom:2px solid #C9A84C;padding-bottom:12px;">
          新聯繫表單訊息
        </h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;color:#555;font-size:14px;width:80px;">姓名</td>
              <td style="padding:8px 0;color:#111;font-size:14px;">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#555;font-size:14px;">電子郵件</td>
              <td style="padding:8px 0;font-size:14px;"><a href="mailto:${email}" style="color:#111;">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#555;font-size:14px;">主題</td>
              <td style="padding:8px 0;color:#111;font-size:14px;">${subject}</td></tr>
        </table>
        <div style="margin-top:24px;padding:16px;background:#f5f5f5;border-radius:6px;">
          <p style="font-size:14px;color:#555;margin-bottom:8px;">訊息內容：</p>
          <p style="font-size:14px;color:#111;white-space:pre-wrap;margin:0;">${message}</p>
        </div>
        <p style="margin-top:24px;font-size:12px;color:#888;border-top:1px solid #e0e0e0;padding-top:16px;">
          此信件由 jdn2023.com 聯繫表單自動發送
        </p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "郵件發送失敗，請稍後再試" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
