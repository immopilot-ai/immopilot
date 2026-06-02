// Génération d'annonce immobilière via l'API Anthropic
const Anthropic = require('@anthropic-ai/sdk');

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `Tu es expert en rédaction d'annonces immobilières françaises. \
Style clair, chaleureux, sans superlatifs. \
Structure obligatoire : \
1. Accroche (1 phrase percutante) \
2. Description du bien (2-3 phrases) \
3. 3 points forts en liste (bullet points) \
4. Phrase de contact invitant à visiter ou appeler.`;

async function generateAnnonce(bien) {
  const { type_bien, surface, pieces, localisation, prix, prestations } = bien;

  const prompt = `Rédige une annonce immobilière pour le bien suivant :
- Type : ${type_bien}
- Surface : ${surface} m²
- Pièces : ${pieces}
- Localisation : ${localisation}
- Prix : ${prix} €
- Prestations : ${prestations}`;

  const message = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: [{ role: 'user', content: prompt }],
  });

  return message.content[0].text;
}

module.exports = { generateAnnonce };
