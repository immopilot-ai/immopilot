// Envoi d'emails via SMTP Gmail
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

// Envoi d'une annonce générée à l'agent
async function sendEmail(emailAgent, bien, annonce) {
  const { type_bien, localisation } = bien;
  await sendRaw(emailAgent, `Votre annonce ImmoPilot — ${type_bien} ${localisation}`, annonce);
}

// Envoi d'une réponse à un lead
async function sendEmailLead(dest, sujet, corps) {
  await sendRaw(dest, sujet, corps);
}

async function sendRaw(to, subject, text) {
  const transporter = createTransporter();
  await transporter.sendMail({
    from: `ImmoPilot <${process.env.GMAIL_USER}>`,
    to,
    subject,
    text,
    html: `<pre style="font-family: Georgia, serif; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${text}</pre>`,
  });
}

module.exports = { sendEmail, sendEmailLead };
