$('#slackBtn').click(function(){
    console.log ("button pressed");
    var url="https://hooks.slack.com/services/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";
    var payload={"text": "This is a line of test"};
    $.post(url,JSON.stringify(payload),function(data){
        $('#result').text(data);

    })
})