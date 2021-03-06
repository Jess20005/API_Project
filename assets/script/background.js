const nasaUrl='https://api.nasa.gov/planetary/apod?api_key=xO8d0RCLIdY6C1PoXiXLhIuaUiKvgaZ0N6BrsflD';

var bgImage = document.getElementById('bgimage');
// default image
bgImage.src="https://www.fillmurray.com/1920/1080";

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      bgImage.src=data.url;
      bgImage.alt=data.title;
      return (data);   
    });
}
getApi(nasaUrl);