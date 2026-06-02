// Script de test local — simule un appel webhook avec un bien exemple
const http = require('http');

const bien = {
  type_bien: 'Appartement',
  surface: 68,
  pieces: 3,
  localisation: 'Lyon 6ème',
  prix: 320000,
  prestations: 'Parquet chêne, cuisine équipée, balcon 8m², cave, gardien',
  email_agent: 'ton-email@example.com', // ← remplace par ton email
};

const body = JSON.stringify(bien);

const options = {
  hostname: 'localhost',
  port: process.env.PORT || 3000,
  path: '/webhook/annonce',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(body),
  },
};

console.log('Envoi de la requête au webhook...\n');
console.log('Bien :', bien);
console.log('\n---\n');

const req = http.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => (data += chunk));
  res.on('end', () => {
    console.log(`Status : ${res.statusCode}`);
    try {
      const json = JSON.parse(data);
      if (json.annonce) {
        console.log('\nAnnonce générée :\n');
        console.log(json.annonce);
      } else {
        console.log('\nRéponse :', json);
      }
    } catch {
      console.log('Réponse brute :', data);
    }
  });
});

req.on('error', (err) => {
  console.error('Erreur de connexion :', err.message);
  console.error('→ Vérifie que le serveur tourne avec : npm start');
});

req.write(body);
req.end();
