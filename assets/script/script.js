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
    //
    jokeText.innerHTML = data.joke;  // <---- instead of putting this in jokeText -what if you just stuck it right on the banner hero page?
    
    //
    // code to post jokes to slack
    // Weird - the OLD API link was https://hooks.slack.com/services/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
    // 3-4-21 jason.e.jones@gmail.com went back to slack, there were no webhook APIs, so I created a NEW one
    // and tested the joke posting and it worked?  Not sure why or how the webhook was deleted at slack that's really weird
    //
    
    var url = "https://hooks.slack.com/services/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";
    var payload = { text: data.joke };
    $.post(url, JSON.stringify(payload), function (data) {
      console.log("I just slacked this joke " + JSON.stringify(payload));
    });
    })
    .catch((err) => {
      console.error(err);       
    });
})