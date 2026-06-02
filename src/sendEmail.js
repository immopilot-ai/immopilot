// Envoi de l'annonce générée par email SMTP Gmail
const nodemailer = require('nodemailer');

function createTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
}

async function sendEmail(emailAgent, bien, annonce) {
  const { type_bien, localisation } = bien;
  const transporter = createTransporter();

  await transporter.sendMail({
    from: `ImmoPilot <${process.env.GMAIL_USER}>`,
    to: emailAgent,
    subject: `Votre annonce ImmoPilot — ${type_bien} ${localisation}`,
    text: annonce,
    html: `<pre style="font-family: Georgia, serif; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${annonce}</pre>`,
  });
}

module.exports = { sendEmail };
