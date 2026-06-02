// Lecture des emails non lus via IMAP Gmail
const imapSimple = require('imap-simple');
const { simpleParser } = require('mailparser');

function getImapConfig() {
  return {
    imap: {
      user: process.env.IMAP_USER,
      password: process.env.IMAP_PASSWORD,
      host: 'imap.gmail.com',
      port: 993,
      tls: true,
      tlsOptions: { rejectUnauthorized: false },
      authTimeout: 10000,
    },
  };
}

async function readUnseenEmails() {
  const connection = await imapSimple.connect(getImapConfig());
  await connection.openBox('INBOX');

  const messages = await connection.search(['UNSEEN'], {
    bodies: [''],
    markSeen: true,
  });

  const emails = [];

  for (const message of messages) {
    const raw = message.parts.find((p) => p.which === '').body;
    const parsed = await simpleParser(raw);

    emails.push({
      uid: message.attributes.uid,
      de: parsed.from?.text || '',
      sujet: parsed.subject || '(sans objet)',
      corps: parsed.text || parsed.html || '',
      date: parsed.date || new Date(),
    });
  }

  connection.end();
  return emails;
}

module.exports = { readUnseenEmails };
