import nodemailer from 'nodemailer';

export async function sendEmail(email: string, name: string) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'lucasviniciusaalves@gmail.com', // generated ethereal user
        pass: '!Luv120mlj#', // generated ethereal password
      },
    });
    return await transporter.sendMail({
      from: 'lucasviniciusaalves@gmail.com', // sender address
      to: email, // list of receivers"
      subject: 'Confirmação Email', // Subject line
      text: `Olá, ${name} seu código de verificação é:`, // plain text body
      html: `<b>Olá, ${name} seu código de verificação é:</b>`, // html body
    });
  } catch (e: any) {
    return e.message;
  }
}
