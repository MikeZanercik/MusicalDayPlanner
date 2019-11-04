var weather = {}

$("document").ready(function() {

    var weatherAPIKey = "166a433c57516f51dfab1f7edaed8413";
    var weatherqueryURL = "https://api.openweathermap.org/data/2.5/weather?q=Charlotte&appid=" + weatherAPIKey;
    
    $.ajax({
        url: weatherqueryURL,
        method: "GET"
    }).then(function (response) {
        weather = {};
        weather.icon = response.weather[0].icon           
        if (weather.icon === "01d" || weather.icon === "01n"){
            //Dance Playlist
            youtubeAPI("UX1cdPqW5M8")
        }
        if(weather.icon === "02d" || weather.icon === "02n"){
            //Jazzy playlist
            youtubeAPI("cBJHd4p9Ct8")
        }
        if(weather.icon === "03d" || weather.icon === "03n"){
            //Indie playlist
            youtubeAPI("txCvcmp8PVU")
        }
        if(weather.icon === "04d" || weather.icon === "04n"){
            //Slow playlist
            youtubeAPI("bM0Iw7PPoU4")
        }
        if(weather.icon === "09d" || weather.icon === "09n"){
            //lofi hiphop playlist
            youtubeAPI("hHW1oY26kxQ")
        }
        if(weather.icon === "10d" || weather.icon === "10n"){
            //top 100 playlist
            youtubeAPI("jJW7Som1uY")
        }
        if(weather.icon === "11d" || weather.icon === "11n"){
            //Rap playlist
            youtubeAPI("57w9CvHdomY")
        }
        if(weather.icon === "13d" || weather.icon === "13n"){
            //upbeat playlist
            youtubeAPI("eosLoIMzW7E")
        }
        if(weather.icon === "50d" || weather.icon === "50n"){
            //gospel playlist
            youtubeAPI("qSxNxnBGGKg")
        }
    })

    //does not run unless you call youtubeAPI();
    function youtubeAPI(keyWord){
        var youTubeAPIKey = "AIzaSyDmFlD6zsHY-21J4zaP8YC9M5pLgMkrXxU";
        var youTubequeryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" + keyWord + "&type=video&videoEmbeddable=true&key=" + youTubeAPIKey;          
    
        $.ajax({
            url: youTubequeryURL,
            method: "GET"
        }).then(function (response) {                
            videoId = response.items[0].id.videoId                       
            displayVideo = "https://www.youtube.com/embed/"+ videoId   
    
            var video = $("#videoHere")
            video.attr("src", displayVideo)                
            return displayVideo
        })
    }


    $(".btn-primary").on("click", function () {
        event.preventDefault();
        selector = ($(":input.form-control").val());
        var keyWord = ""
    
        if (selector === "Lofi HipHop"){
            keyWord = "hHW1oY26kxQ"
        }
        if (selector === "Jazz"){
            keyWord = "cBJHd4p9Ct8"
        }
        if (selector === "Techno"){
            keyWord = "d8Oc90QevaI"
        }
        if (selector === "Upbeat"){
            keyWord = "eosLoIMzW7E"
        }
        if (selector === "Slow"){
            keyWord = "bM0Iw7PPoU4"
        }
        if (selector === "Top 100"){
            keyWord = "jJW7Som1uY"
        }
        if (selector === "Gangster"){
            keyWord = "57w9CvHdomY"
        }
        if (selector === "Gospel"){
            keyWord = "qSxNxnBGGKg"
        }
        if (selector === "Dance"){
            keyWord = "UX1cdPqW5M8"
        }
        if (selector === "Indie"){
            keyWord = "txCvcmp8PVU"
        }
        if (selector === "Pop"){
            keyWord = "OlP_FYgSEtM"
        }
        if (selector === "Lullaby"){
            keyWord = "dzyhiM6-4MM"
        }
        
       youtubeAPI(keyWord);
    }) 
})

  $('.button').on("click", function(){
        var holder = $(this).val();
        console.log(holder)
       localStorage.setItem(holder, $(holder).val());
    })
    for (var j = 0; j < 24; j++) {
        $('#' + j).val(localStorage.getItem('#' + j))
    }