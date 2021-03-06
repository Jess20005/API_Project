const nasaUrl='https://api.nasa.gov/planetary/apod?api_key=xO8d0RCLIdY6C1PoXiXLhIuaUiKvgaZ0N6BrsflD';

var bgImage = document.getElementById('bgimage');
var nasaTitle = document.getElementById("nasaTitle");
var nasaExplanation = document.getElementById("nasaExplanation");
// default image
bgImage.src="https://www.fillmurray.com/1920/1080";


function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.media_type == "image") {    
        bgImage.src=data.url;
        console.log("bgImage is "+bgImage.src);
        bgImage.alt=data.title;  
        nasaTitle.textContent=data.title;
        nasaExplanation.textContent=data.explanation;
      } else {
        bgImage.src="./assets/img/spaceyimage.jpg";
        bgImage.atl="On the selected date, the APOD is a video.  But we don't use videos for backgrounds."
      }
    });

}
getApi(nasaUrl);