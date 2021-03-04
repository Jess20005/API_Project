fetch("https://icanhazdadjoke.com/", {
	headers: {
		'Accept': 'application/json'
	}
})
.then(response => {
	return response.json();
}).then((data) => {
	console.log('RESPONSE ', data)
})
.catch(err => {
	console.error(err);
});
      