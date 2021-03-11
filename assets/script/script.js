var jokeBtn =  document.querySelector(".jokeBtn");
var jokeText = document.querySelector(".jokeText");
document.addEventListener('DOMContentLoaded', getJoke);

jokeBtn.addEventListener("click", getJoke);
function getJoke(){
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("RESPONSE", data.joke);
      localStorage.setItem('dailyJoke', data.joke)
      jokeText.innerHTML = localStorage.getItem('dailyJoke');  // <---- instead of putting this in jokeText -what if you just stuck it right on the banner hero page?
      var initialCount = localStorage.getItem('counter')
      if (initialCount == null) {
        initialCount = 0
      }
      initialCount++
      localStorage.setItem('counter', initialCount)
      //
      // code to post jokes to slack
      // slack wont let you post their webhook "in the clear" and they consider a public github repo "in the clear"
      // if you DO post their webhook link in the clear they automatically delete the webhook api and send
      // you an email.
      // to work around this slack suggested we run it through an API forwarder - so we are using pipedream.
      //

      var url = "https://2873d01ff1ff8b41df332e5c91cc4bf4.m.pipedream.net" // this is an API forwarder which is configured to forward to slack
      var payload = { text: data.joke };
      if (initialCount <= 2) {
        $.post(url, JSON.stringify(payload), function (data) {
             console.log("I just slacked this joke " + JSON.stringify(payload));
          });
      }
      })
    .catch((err) => {
      console.error(err);       
    });
};
