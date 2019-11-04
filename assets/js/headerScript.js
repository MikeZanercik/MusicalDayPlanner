function getDate(){
    return moment().format("dddd, MMMM Do, YYYY");
}

function getFormattedTime(){
    return moment().format("h:mm:ss a");
}

function getGreeting(){
    var greeting, currentHr;
    currentHr = moment();
    if(currentHr.isBetween(moment("4am", "ha"), moment("12pm", "ha"), "hour", "[)")) {
        greeting = "Good Morning!";
    }else if (currentHr.isBetween(moment("12pm", "ha"), moment("6pm", "ha"), "hour", "[)")) {
        greeting = "Good Afternoon!";
    } else if (currentHr.isBetween(moment("6pm", "ha"), moment("4am", "ha"), "hour", "[)")) {
        greeting = "Good Evening!";
    }
    return greeting;
}

//should call setInterval with a function that calls getFormattedTime, and getGreeting every second
function timer(greetingEl, timeEl) {
    setInterval(() => {
        greetingEl.html(getGreeting());
    }, 1000 * 60 * 60);
    setInterval(() => {
        timeEl.html(getFormattedTime());
    }, 1000);
}

//create function to init header
function initHeader(){
    //vars for headings where values will go
    var greetingHead = $("#headerGreeting");
    var dateHead = $("#headerDate");
    var timeHead = $("#headerTime");
    
    greetingHead.html(getGreeting());

    dateHead.html(getDate());
    timeHead.html(getFormattedTime());
    //call timer, passing vars above
    timer(greetingHead, timeHead);
}