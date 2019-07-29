const encrypt = require('./encrypt');

const rounds = 2000000;

let startTime = Date.now();

for (let i = 0; i < rounds; i++) {
  encrypt(i.toString());
}

console.log({time: Date.now() - startTime });
