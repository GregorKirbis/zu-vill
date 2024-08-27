import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { input } = await request.json();

    if (!input) {
      return NextResponse.json({ message: 'Invalid input data' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'gregor.kirbis@smallinvasion.com',
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: 'gregor.kirbis@smallinvasion.com',
      to: 'marko@zu-vil.si, info@zu-vil.si, gregor.kirbis@gmail.com',
      subject: 'Povpraševanje preko spletne strani',
      text: `
        Podatki:

        Ime: ${input.firstName}
        Priimek: ${input.lastName}
        Telefon: ${input.phone}
        Email: ${input.email}
        Sporočilo: ${input.message}

        Lep pozdrav,
        Zu-vil spletna stran.
      `,
      html: `
        <p>Podatki:</p>
        <ul>
          <li><strong>Ime:</strong> ${input.firstName}</li>
          <li><strong>Priimek:</strong> ${input.lastName}</li>
          <li><strong>Telefon:</strong> ${input.phone}</li>
          <li><strong>Email:</strong> ${input.email}</li>
          <li><strong>Sporočilo:</strong> ${input.message}</li>
          <li><strong>Viličar:</strong> <a href="${input.productLink}">${input.productLink}</a></li>
        </ul>
        <p>Lep pozdrav,<br>Zu-vil spletna stran.</p>
      `,
    };



    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email', error: error.message }, { status: 500 });
  }
}
