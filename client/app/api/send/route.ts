import { EmailTemplate } from '@/components/email-template';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const req = await request.json()
    const data = await resend.emails.send({
      from: 'Tamil Native <contact@tamilnative.com>',
      to: [process.env.TO_EMAIL],
      subject: 'Message received from Tamil Native website',
      react: EmailTemplate({ name: req.name, email: req.email, phone: req.phone, message: req.message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
