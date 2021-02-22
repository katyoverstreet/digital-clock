

function displayTime() {
    let date = new Date()
    let hour = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let amORpm = "AM";

    if (hour < 12) {
        amORpm = "AM";
    }
    if (hour > 12) {
        hour -= 12;
        amORpm = "PM";
    }
	//simpler than if statements  asically if less than ten, add 0 to beginning, else just put value
    hour = hour < 10 ? "0" + hour : hour; 
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;


    let currentTime = hour + ":" + mins + ":" + secs + amORpm


    document.getElementById("digitalClockTime")
        .innerHTML = currentTime
}


setInterval(displayTime, 1000);
