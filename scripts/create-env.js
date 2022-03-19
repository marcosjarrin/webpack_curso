const fs= require('');

fs.writeFileSync('./.env','API={process.env.API}\n');
