const nasaUrl='https://api.nasa.gov/planetary/apod?api_key=xO8d0RCLIdY6C1PoXiXLhIuaUiKvgaZ0N6BrsflD';

var bgImage = document.getElementById('bgimage');
// default image
bgImage.src="https://www.fillmurray.com/1920/1080";


function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      //  Conditional for the the response.status.
      return response.json();
    })
    .then(function (data) {
      // Make sure to look at the response in the console and read how 404 response is structured.
      bgImage.src=data.url;
      bgImage.alt="NASA Image of the Day";
      
    
    });

}
getApi(nasaUrl);