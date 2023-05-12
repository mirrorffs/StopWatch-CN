window.onload=function(){
    var milliSeconds=00;
    var seconds=00;
    var minutes=00;
    var hours=00;
    var appendMilliSeconds=document.getElementById('milli-seconds');
    var appendSeconds = document.getElementById("seconds");
    var appendMinutes = document.getElementById("minutes");
    var appendHours = document.getElementById("hours");
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    var reset = document.getElementById("reset");
    var interval;

    // start button 
    start.onclick=function(){
        clearInterval(interval);
        interval=setInterval(setTimer,10);
    }

    // stop button 
    stop.onclick=function(){
        clearInterval(interval);
        start.innerHTML='Resume'
    }

    // reset button 
    reset.onclick=function(){
        clearInterval(interval);
        milliSeconds=setZero(appendMilliSeconds)
        seconds=setZero(appendSeconds)
        minutes=setZero(appendMinutes)
        hours=setZero(appendHours)
        start.innerHTML='Start'
    }
    // start the timer
    function setTimer(){
        milliSeconds++;
        (milliSeconds<=9)? appendMilliSeconds.innerHTML='0'+milliSeconds : appendMilliSeconds.innerHTML=milliSeconds;
        if(milliSeconds>99){
            seconds++;
            milliSeconds=setZero(appendMilliSeconds);
            (seconds<=9)? appendSeconds.innerHTML='0'+seconds : appendSeconds.innerHTML=seconds;
        }
        if(seconds>59){
            minutes++;
            milliSeconds=setZero(appendMilliSeconds);
            seconds=setZero(appendSeconds);
            (minutes<=9)? appendMinutes.innerHTML='0'+minutes : appendMinutes.innerHTML=minutes;
        }
        if(minutes>59){
            hours++;
            milliSeconds=setZero(appendMilliSeconds);
            seconds=setZero(appendSeconds);
            minutes=setTimer(appendMinutes)
            (hours<=9)? appendHours.innerHTML='0'+hours : appendHours.innerHTML=hours;
        }
    }

    // change value to 0 for passed input
    function setZero(appendElement){
        var element=0;
        appendElement.innerHTML="0"+element;
        return element
    }
}