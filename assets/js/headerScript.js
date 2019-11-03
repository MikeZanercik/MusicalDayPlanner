//create function to init header
function initHeader(){
    
}

function getDate(){
    return moment().format("dddd, MMMM Do, YYYY");
}

function getFormattedTime(){
    return moment().format("h:mm:ss a");
}

function getGreeting(){
    var greeting, currentHr;
    currentHr = moment();
    if(currentHr.isBetween(getDate() + "4am", getDate() + "12pm", "hour", "[)")) {

    }
    return greeting;
}

function timer() {
    return "";
}
