// Qualification du lead et génération de réponse via Anthropic
const Anthropic = require('@anthropic-ai/sdk');

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `Tu es un assistant pour un agent immobilier français indépendant. \
Tu reçois un email d'un potentiel acheteur ou vendeur (lead). \
Tu dois : \
1. Qualifier le lead en : Chaud (prêt à agir rapidement), Tiède (intéressé mais pas urgent), Froid (curieux sans intention claire). \
2. Résumer l'email en 1 phrase. \
3. Rédiger une réponse professionnelle, chaleureuse et personnalisée au nom de l'agent. \
La réponse doit remercier le contact, montrer de l'intérêt, et proposer un rendez-vous téléphonique ou une visite. \
Réponds en JSON strict avec les clés : qualification, resume, reponse.`;

async function qualifyLead(email) {
  const prompt = `Email reçu :\nDe : ${email.de}\nSujet : ${email.sujet}\n\n${email.corps}`;

  const message = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: [{ role: 'user', content: prompt }],
  });

  const text = message.content[0].text;

  // Extraction du JSON même si Claude ajoute du texte autour
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error('Réponse Anthropic non parseable : ' + text);

  return JSON.parse(match[0]);
}

module.exports = { qualifyLead };
