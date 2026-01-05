
function step(name, cb) {

	setTimeout(() => {
		console.log('start', name);
		// small chance to error to show error handling
		if (Math.random() < 0.05) return cb(new Error('Failed at ' + name));
		console.log('finish', name);
		cb(null, name + ' result');
	}, 300);
}

step('step1', (err, res1) => {
	if (err) return console.error('Error:', err.message);
	step('step2', (err, res2) => {
		if (err) return console.error('Error:', err.message);
		step('step3', (err, res3) => {
			if (err) return console.error('Error:', err.message);
			step('step4', (err, res4) => {
				if (err) return console.error('Error:', err.message);
				step('step5', (err, res5) => {
					if (err) return console.error('Error:', err.message);
					console.log('All done:', res1, res2, res3, res4, res5);
				});
			});
		});
	});
});

// Tip: refactor to Promises/async-await to avoid this nesting.

