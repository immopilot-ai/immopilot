// Log des traitements dans Google Sheets via l'API Google
const { google } = require('googleapis');

// Colonnes : Date | Type de bien | Localisation | Surface | Prix | Email agent | Statut
const COLONNES = ['Date', 'Type de bien', 'Localisation', 'Surface', 'Prix', 'Email agent', 'Statut'];

function getAuth() {
  const keyPath = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_PATH;
  const auth = new google.auth.GoogleAuth({
    keyFile: keyPath,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  return auth;
}

async function logToSheets(bien, statut) {
  const { type_bien, localisation, surface, prix, email_agent } = bien;
  const date = new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' });

  const ligne = [date, type_bien, localisation, surface, prix, email_agent, statut];

  const auth = getAuth();
  const sheets = google.sheets({ version: 'v4', auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: 'Sheet1!A:G',
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: [ligne] },
  });
}

module.exports = { logToSheets, COLONNES };
