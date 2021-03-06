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


$( function() {
    $( "#datepicker" ).datepicker({dateFormat: 'yy-mm-dd'});
    } );

$("#datepicker").on("change", function(){
    console.log($(this).val());  
    queryUrl=nasaUrl+"&date="+$(this).val();
    getApi2(queryUrl);
    });
