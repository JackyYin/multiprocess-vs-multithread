const { fork } = require('child_process');
const processCounts = require('os').cpus().length;

const rounds = 2000000;

for (let i = 0; i < processCounts; i++) {
  const child = fork('./child.js');

  let range = (rounds / processCounts);

  let start = range * i;
  let end = range * (i + 1);

  child.send({ start, end });

  child.on('message', (m) => {
    console.log(m);
    child.kill();
  });
}
