const nasaUrl = 'https://api.nasa.gov/planetary/apod?api_key=xO8d0RCLIdY6C1PoXiXLhIuaUiKvgaZ0N6BrsflD';

var descriptionBtn = document.getElementById("descrtipionBtn");
var description = document.getElementById('description');

descriptionBtn.addEventListener("click", function () {
    fetch(nasaUrl)
});
// default image

function getApi(requestUrl) {

    fetch(requestUrl)
        .then(function (response) {
        return response.json();
    })    
    .then(function (data) {
        description.src=nasaUrl;
        data.explantion = "description";

    });
  

//     .then(response => response.json())
//   .then(data => console.log(data));

       
    // fetch(requestUrl) {
    //     .then(function (response) {

    //     return response.json();
    // })
    // }
        // .then(function (data) {

        //     data.title = nasaUrl;
        //     data.title = "description";
    
        // .then(function (data) {
        //     data.explanation = nasaURL;
        //     data.explantion = "description";
        //     });
        // }
    }

getApi(nasaUrl);

























