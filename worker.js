const {
    parentPort, workerData
} = require('worker_threads');
const encrypt = require('./encrypt');

console.log("worker: " + process.pid);
let startTime = Date.now();

for (let i = workerData.start; i < workerData.end; i++) {
  encrypt(i.toString());
}

parentPort.postMessage({time: Date.now() - startTime });
