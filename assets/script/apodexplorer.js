// const nasaUrl='https://api.nasa.gov/planetary/apod?api_key=xO8d0RCLIdY6C1PoXiXLhIuaUiKvgaZ0N6BrsflD';
function getApi2(requestUrl) {
    bgImage = document.getElementById('bgimage');
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        bgImage.src=data.url;
        bgImage.alt=data.title;  
        console.log ("trying to set image again "+data);
        return (data);
      });
  }

//   document.addEventListener('DOMContentLoaded', (event) => {
//     console.log (getApi(nasaUrl));
//   })

// queryDate="2020-11-11";

$( function() {
    $( "#datepicker" ).datepicker();
  } );


// queryUrl=nasaUrl+"&date="+queryDate;
// getApi2(queryUrl);
