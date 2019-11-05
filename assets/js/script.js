var weather = {}

$("document").ready(function () {

    var weatherAPIKey = "166a433c57516f51dfab1f7edaed8413";
    var weatherqueryURL = "https://api.openweathermap.org/data/2.5/weather?q=Charlotte&appid=" + weatherAPIKey + "&units=imperial";
    $.ajax({
        url: weatherqueryURL,
        method: "GET"
    }).then(function (response) {
        weather = {};
        var cityName = response.name;
        var iconId = response.weather[0].icon;
        var icon = "http://openweathermap.org/img/wn/" + iconId + ".png";
        var temp = response.main.temp;
        var humidity = response.main.humidity;
        var windSpeed = response.wind.speed;

        $("#city-name").html(cityName + "<img src=" + icon + " alt=weather icon>");
        $("#temp").html("Currently: " + temp + " °F");
        $("#humidity").html("Humidity: " + humidity + "%");
        $("#wind-speed").html("Wind Speed: " + windSpeed + " MPH");

        weather.icon = response.weather[0].icon
        if (weather.icon === "01d" || weather.icon === "01n") {
            //Dance Playlist
            youtubeAPI("UX1cdPqW5M8")
            $("body").addClass("clear")
        }
        if (weather.icon === "02d" || weather.icon === "02n") {
            //Jazzy playlist
            youtubeAPI("cBJHd4p9Ct8")
            $("body").addClass("fewClouds")
        }
        if (weather.icon === "03d" || weather.icon === "03n") {
            //Indie playlist
            youtubeAPI("txCvcmp8PVU")
            $("body").addClass("scatteredClouds")
        }
        if (weather.icon === "04d" || weather.icon === "04n") {
            //Slow playlist
            youtubeAPI("bM0Iw7PPoU4")
            $("body").addClass("brokenClouds")
        }
        if (weather.icon === "09d" || weather.icon === "09n") {
            //lofi hiphop playlist
            youtubeAPI("hHW1oY26kxQ")
            $("body").addClass("showerRain")
        }
        if (weather.icon === "10d" || weather.icon === "10n") {
            //top 100 playlist
            youtubeAPI("jJW7Som1uY")
            $("body").addClass("rain")
        }
        if (weather.icon === "11d" || weather.icon === "11n") {
            //Rap playlist
            youtubeAPI("57w9CvHdomY")
            $("body").addClass("thunderStorm")
        }
        if (weather.icon === "13d" || weather.icon === "13n") {
            //upbeat playlist
            youtubeAPI("eosLoIMzW7E")
            $("body").addClass("snow")
        }
        if (weather.icon === "50d" || weather.icon === "50n") {
            //gospel playlist
            youtubeAPI("qSxNxnBGGKg")
            $("body").addClass("mist")
        }
    })

    //does not run unless you call youtubeAPI();
    function youtubeAPI(keyWord) {
        //var youTubeAPIKey = "AIzaSyB6SUoweB2Y51wzqgxaK8UWY5C1JRYzt6o";
        var youTubeAPIKey = "AIzaSyDLNmooHHjWBCsBru1OHjteB5bX8zmuVxQ"
        var youTubequeryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" + keyWord + "&type=video&videoEmbeddable=true&key=" + youTubeAPIKey;

        $.ajax({
            url: youTubequeryURL,
            method: "GET"
        }).then(function (response) {
            videoId = response.items[0].id.videoId
            displayVideo = "https://www.youtube.com/embed/" + videoId

            var video = $("#videoHere")
            video.attr("src", displayVideo)
            return displayVideo
        })
    }


    $(".btn-primary").on("click", function () {
        event.preventDefault();
        selector = ($(":input.form-control").val());
        var keyWord = ""

        if (selector === "Lofi HipHop") {
            keyWord = "hHW1oY26kxQ"
        }
        if (selector === "Jazz") {
            keyWord = "cBJHd4p9Ct8"
        }
        if (selector === "Techno") {
            keyWord = "d8Oc90QevaI"
        }
        if (selector === "Upbeat") {
            keyWord = "eosLoIMzW7E"
        }
        if (selector === "Slow") {
            keyWord = "bM0Iw7PPoU4"
        }
        if (selector === "Top 100") {
            keyWord = "jJW7Som1uY"
        }
        if (selector === "Gangster") {
            keyWord = "57w9CvHdomY"
        }
        if (selector === "Gospel") {
            keyWord = "qSxNxnBGGKg"
        }
        if (selector === "Dance") {
            keyWord = "UX1cdPqW5M8"
        }
        if (selector === "Indie") {
            keyWord = "txCvcmp8PVU"
        }
        if (selector === "Pop") {
            keyWord = "OlP_FYgSEtM"
        }
        if (selector === "Lullaby") {
            keyWord = "dzyhiM6-4MM"
        }

        youtubeAPI(keyWord);
    })
})
//planner: delegation to children of class planner-item
$('.planner').on("click", ".buttonSave", function () {
    var holder = $(this).parent().siblings('.planner-item');

    console.log("Item");
    console.log(holder.attr("id"), holder.val())
    localStorage.setItem(holder.attr("id"), holder.val());
});

function renderCalendar() {

    var template = (index, time) => (`<div class="cell">
        <div class="input-group">
            <span class="input-group-label">${index > 0 && index < 10 ? "&nbsp;&nbsp;" + time : time}</span>
            <textarea class="planner-item input-group-field" id="item-${index}" placeholder="Notes"></textarea>
            <div class="input-group-button">
                <button type="button" class="button secondary buttonSave" > <i class="far fa-save"> </i></button>
            </div>
        </div>
    </div>`);

    var templateString = '';
    for (var hour = 0; hour < 24; hour++) {
        templateString += template(hour, moment(`${hour ===  0 ? 24 : hour}`, 'k').format('h:mm a'));
    }
    $('.planner').html(templateString);
}

renderCalendar();

for (var j = 0; j < 24; j++) {
    $('#item-' + j).val(localStorage.getItem('item-' + j))
}

