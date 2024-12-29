import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Michael <mpduggan97@gmail.com>',
      to: ['mpduggan97@gmail.com'],
      subject: 'Hello world',
      react: await EmailTemplate({ firstName: 'Michael' }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
