
const clock = document.getElementById('clock'); //creating clock var and setting its value

const setTwelve = document.querySelector('.btn');

const setTwentyFour = document.querySelector('.btn');

setTwelve.addEventListener('click', makeNormal);

setTwentyFour.addEventListener('click', makeMilitary);

let militaryTime = false; //setting value for milt time

 function makeMilitary() {
    if (militaryTime === false) {
        militaryTime = true;
    }
}
//if its pushed make it true
function makeNormal() {
    if (militaryTime === true) {
        militaryTime = false;
    }

}
//if normal button is pushed make it false
function displayClock() {

    let currentTime = new Date();
    let tfHours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let amOrPm = '';
    
    if (tfHours < 12) {
        amOrPm = 'AM';
    }
    else{
        amOrPm = 'PM';
    }
    
    
    if (tfHours > 12 & militaryTime === false) {
        tfHours = (24 - tfHours) - 12;
    }

    let hourstw = Math.abs(tfHours);
    
    //just adding 0s
    if (hourstw < 10) {
        hourstw = '0' + hourstw; //this makes it so when it is, for example 9:09:09, it puts the 0 before each
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

	//this whole section is just adding 0s
  
    let timeNow = hoursin12 + ':' + minutes + ':' + seconds + amOrPm;
    
    clock.innerHTML = timeNow;
  //making the output show the work
    
}

setInterval(displayClock, 1000);

 displayClock(); 



