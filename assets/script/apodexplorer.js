// const nasaUrl='https://api.nasa.gov/planetary/apod?api_key=xO8d0RCLIdY6C1PoXiXLhIuaUiKvgaZ0N6BrsflD';
function getApi2(requestUrl) {
    bgImage = document.getElementById('bgimage');
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        if (data.media_type == "image") {    
          bgImage.src=data.url;
          console.log("bgImage is "+bgImage.src);
          bgImage.alt=data.title;  
        } else {
          bgImage.src="https://cdn.pixabay.com/photo/2019/02/17/22/01/color-4003283_960_720.jpg";
          bgImage.atl="On the selected date, the APOD is a video.  But we don't use videos for backgrounds."
        }
      });
  }

$( function() {
  //
  // maxDate: "+0D" so you can't pick a date in the future
  // minDate: "June 16 1995" is the first image in the APOD
  //

    $( "#datepicker" ).datepicker({
      dateFormat: 'yy-mm-dd', 
      maxDate: "+0D",
      changeYear: true,
      minDate: new Date('1995/6/16')
    });
    } );

  //
  // This click listener just waits for a new date from the date picker
  // which - controversially enough, could just just be a direct click of the calendar
  //
$("#datepicker").on("change", function(){
    queryUrl=nasaUrl+"&date="+$(this).val();
    getApi2(queryUrl);
    });
