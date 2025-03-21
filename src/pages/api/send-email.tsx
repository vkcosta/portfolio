import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: "Método não permitido" })
  } else {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Todos os campos (name, email, message) são obrigatórios." });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Novo contato de ${name}`,
      text: `Você recebeu uma nova mensagem de ${name} (${email}):\n\n${message}`
    }

    try {
      await transporter.sendMail(mailOptions);;
      res.status(200).json({ message: 'E-mail enviado com sucesso!' })
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao enviar o e-mail.' })
    }
  }


};

export default sendEmail;