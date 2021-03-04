const nasaUrl='https://api.nasa.gov/planetary/apod?api_key=xO8d0RCLIdY6C1PoXiXLhIuaUiKvgaZ0N6BrsflD';

var bgImage = document.getElementById('bgimage');
console.log (bgImage);
console.log (bgImage.src);
bgImage.src="https://www.fillmurray.com/1920/1080";

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      console.log(response.status);
      //  Conditional for the the response.status.
      if (response.status !== 200) {
        // Place the response.status on the page.
        responseText.textContent = response.status;
      }
      return response.json();
    })
    .then(function (data) {
      // Make sure to look at the response in the console and read how 404 response is structured.
      console.log(data);
      bgImage.src=data.url;
      console.log("bgImage is "+bgImage);
    });
}
getApi(nasaUrl);