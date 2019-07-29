const {
    Worker, isMainThread, parentPort, workerData
} = require('worker_threads');
const threadCounts = require('os').cpus().length;

const rounds = 2000000;

if (isMainThread) {
  for (let i = 0; i < threadCounts; i++) {
    let range = (rounds / threadCounts);
    let start = range * i;
    let end = range * (i + 1);

    const worker = new Worker('./worker.js', { workerData: { start, end }});

    worker.on('message', (m) => {
      console.log(m);
    });
  }
}
