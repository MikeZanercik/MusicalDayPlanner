$(".btn-primary").on("click", function () {
    event.preventDefault();
    keyWord = ($(":input.form-control").val());


    var APIKey = "AIzaSyDmFlD6zsHY-21J4zaP8YC9M5pLgMkrXxU";
    //i've been messing around with the URL to make it more dynamic but should probably make it much simpler
    var queryURL = "https://www.googleapis.com/youtube/v3/playlists?part=snippet&maxResults=1&q=" + keyWord + "&type=video&videoEmbeddable=true&key=" + APIKey;



    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response.items[0].id.videoId)
        videoId = response.items[0].id.videoId

        
        displayVideo = "https://www.youtube.com/embed/" + videoId;
        console.log(displayVideo)

        var video = $("#videoHere")
        video.attr("src", displayVideo)
               
        
        
    })
})


