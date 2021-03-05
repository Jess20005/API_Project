var jokeBtn = document.getElementById("jokeBtn");
var jokeText = document.getElementById("jokeText");

jokeBtn.addEventListener("click", function () {
  
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
    //   console.log("RESPONSE", data.joke);
      jokeText.innerHTML = data.joke;
      
    });
    
})


//
//     var url =
//       "https://hooks.slack.com/services/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";
//     var payload = { text: data.joke };
//     $.post(url, JSON.stringify(payload), function (data) {
//       console.log("I just slacked this joke " + JSON.stringify(payload));
//     });
//   })
//   .catch((err) => {
//     console.error(err);
//   
