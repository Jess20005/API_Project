fetch("https://icanhazdadjoke.com/", {
	headers: {
		'Accept': 'application/json'
	}
})
.then(response => {
	return response.json();
}).then((data) => {
<<<<<<< HEAD
	console.log('RESPONSE', data)
=======
	console.log('RESPONSE ', data)
	//
	// lets post this joke to slack shall we...
	//
	var url="https://hooks.slack.com/services/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";
    var payload={"text": data.joke};
    $.post(url,JSON.stringify(payload),function(data){
        console.log("I just slacked this joke "+JSON.stringify(payload));
    })
>>>>>>> 2c79bf0e742ef3eafa20431fe5f295de37c3739d
})
.catch(err => {
	console.error(err);
});
      