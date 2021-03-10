const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=xO8d0RCLIdY6C1PoXiXLhIuaUiKvgaZ0N6BrsflD';

// var description = document.getElementById("descrtipionBtn");
var description = document.getElementById('explanation');

window.addEventListener("scroll", function () {
    document.getElementById("showScroll").innerHTML = window.pageYOffset + "px";
    document.getElementById("title").textContent = title;
    document.getElementById("explanation").textContent = explanation;            
    // fetch(nasaUrl)
});
// Description of Image of the Day.

function getApi(requestUrl) {

    fetch(requestUrl)
        .then(function (response) {
        return response.json();
    })    
    .then(function (data) {
        description.src=nasaUrl;
        data.content = "explanation";
    });
  


}

getApi(nasaUrl);

























