// Log des traitements dans Google Sheets via l'API Google
const { google } = require('googleapis');

function getAuth() {
  return new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_SERVICE_ACCOUNT_KEY_PATH,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
}

async function appendLigne(onglet, ligne) {
  const sheets = google.sheets({ version: 'v4', auth: getAuth() });
  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: `${onglet}!A1`,
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: [ligne] },
  });
}

// Onglet "Annonces" — colonnes : Date | Type de bien | Localisation | Surface | Prix | Email agent | Statut
async function logAnnonce(bien, statut) {
  const { type_bien, localisation, surface, prix, email_agent } = bien;
  const date = new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' });
  await appendLigne('Annonces', [date, type_bien, localisation, surface, prix, email_agent, statut]);
}

// Onglet "Leads" — colonnes : Date | De | Sujet | Qualification | Résumé | Statut
async function logLead(email, qualification, resume, statut) {
  const date = new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' });
  await appendLigne('Leads', [date, email.de, email.sujet, qualification, resume, statut]);
}

// Conservé pour compatibilité avec server.js existant
async function logToSheets(bien, statut) {
  return logAnnonce(bien, statut);
}

module.exports = { logToSheets, logAnnonce, logLead };
