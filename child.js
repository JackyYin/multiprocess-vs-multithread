const encrypt = require('./encrypt');

process.on('message', function (message) {
	let startTime = Date.now();
  console.log("child:" + process.pid);
	let {start, end} = message;

	for (let i = start; i < end; i++) {
		encrypt(i.toString());
	}

  process.send({time: Date.now() - startTime });
})
