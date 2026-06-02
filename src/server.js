// Point d'entrée — webhook POST /webhook/annonce
require('dotenv').config();
const express = require('express');
const { generateAnnonce } = require('./generateAnnonce');
const { sendEmail } = require('./sendEmail');
const { logToSheets } = require('./logToSheets');

const app = express();
app.use(express.json());

const CHAMPS_OBLIGATOIRES = ['type_bien', 'surface', 'pieces', 'localisation', 'prix', 'prestations', 'email_agent'];

app.post('/webhook/annonce', async (req, res) => {
  const bien = req.body;

  // Validation des champs obligatoires
  const manquants = CHAMPS_OBLIGATOIRES.filter((champ) => !bien[champ]);
  if (manquants.length > 0) {
    return res.status(400).json({
      erreur: `Champs obligatoires manquants : ${manquants.join(', ')}`,
    });
  }

  try {
    // 1. Génération de l'annonce
    const annonce = await generateAnnonce(bien);

    // 2. Envoi par email à l'agent
    await sendEmail(bien.email_agent, bien, annonce);

    // 3. Log succès dans Google Sheets
    await logToSheets(bien, 'Succès').catch((err) => {
      console.error('Erreur log Sheets (succès) :', err.message);
    });

    return res.status(200).json({ message: 'Annonce générée et envoyée.', annonce });
  } catch (err) {
    console.error('Erreur traitement webhook :', err.message);

    // Log échec dans Google Sheets (sans bloquer la réponse d'erreur)
    await logToSheets(bien, `Erreur : ${err.message}`).catch((sheetsErr) => {
      console.error('Erreur log Sheets (échec) :', sheetsErr.message);
    });

    return res.status(500).json({ erreur: 'Erreur interne lors du traitement.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`ImmoPilot webhook en écoute sur le port ${PORT}`);
});
