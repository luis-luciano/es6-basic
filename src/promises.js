const promise = new Promise((resolve, reject) => {
	// TO-DO
	setTimeout(() => {
		let success = false;
		if (success) {
			resolve('Éxito');
		} else {
			reject('Sin éxito');
		}
	}, 2000);
});

promise.then((message) => {
	alert(message);
});

promise.catch((message) => {
	alert(message);
});
