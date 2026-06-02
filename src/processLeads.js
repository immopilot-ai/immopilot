// Orchestrateur : lit les emails → qualifie → répond → logue
const { readUnseenEmails } = require('./readEmails');
const { qualifyLead } = require('./qualifyLead');
const { sendEmailLead } = require('./sendEmail');
const { logLead } = require('./logToSheets');

async function processLeads() {
  console.log(`[${new Date().toLocaleTimeString('fr-FR')}] Vérification des nouveaux emails...`);

  let emails;
  try {
    emails = await readUnseenEmails();
  } catch (err) {
    console.error('Erreur lecture IMAP :', err.message);
    return;
  }

  if (emails.length === 0) {
    console.log('Aucun nouvel email.');
    return;
  }

  console.log(`${emails.length} email(s) à traiter.`);

  for (const email of emails) {
    console.log(`\nTraitement : "${email.sujet}" — ${email.de}`);

    let qualification, resume, reponse;

    try {
      ({ qualification, resume, reponse } = await qualifyLead(email));
      console.log(`Qualification : ${qualification} — ${resume}`);
    } catch (err) {
      console.error('Erreur qualification :', err.message);
      await logLead(email, 'N/A', 'Erreur qualification', `Erreur : ${err.message}`).catch(console.error);
      continue;
    }

    // Extraction de l'adresse email brute depuis le champ "De"
    const match = email.de.match(/<(.+?)>/);
    const adresseDest = match ? match[1] : email.de.trim();

    try {
      const sujet = email.sujet.startsWith('Re:') ? email.sujet : `Re: ${email.sujet}`;
      await sendEmailLead(adresseDest, sujet, reponse);
      console.log(`Réponse envoyée à ${adresseDest}`);
      await logLead(email, qualification, resume, 'Réponse envoyée').catch(console.error);
    } catch (err) {
      console.error('Erreur envoi email :', err.message);
      await logLead(email, qualification, resume, `Erreur envoi : ${err.message}`).catch(console.error);
    }
  }
}

module.exports = { processLeads };
