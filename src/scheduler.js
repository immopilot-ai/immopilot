// Boucle de polling — vérifie les nouveaux emails toutes les X minutes
require('dotenv').config();
const { processLeads } = require('./processLeads');

const INTERVAL_MS = parseInt(process.env.POLL_INTERVAL_MS, 10) || 5 * 60 * 1000; // 5 min par défaut

async function demarrer() {
  console.log(`ImmoPilot — Surveillance des leads démarrée (intervalle : ${INTERVAL_MS / 1000}s)`);

  // Premier passage immédiat
  await processLeads();

  // Puis polling régulier
  setInterval(async () => {
    await processLeads();
  }, INTERVAL_MS);
}

demarrer().catch((err) => {
  console.error('Erreur fatale scheduler :', err.message);
  process.exit(1);
});
