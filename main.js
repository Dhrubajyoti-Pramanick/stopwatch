let hour=0;
let minute=0;
let second=0;
let count=0;
let timer=false;
function stopwatch() {
    if(timer){
        count++;
         if (count==100){
            second++;
            count=0;
         }
         if(second==60){
            minute++;
            second=0;
         }
         if(minute==60){
            hour++;
            minute=0;
            second=0;
         }
         let sec=second;
         let min=minute;
         let hr=hour;
         if(second<10){
            sec="0"+sec;
         }
         if(minute<10){
            min="0"+min;
         }
         if(hour<10){
            hr="0"+hr;
         }
         document.getElementById("count").innerHTML=count;
         document.getElementById("second").innerHTML=sec;
         document.getElementById("minute").innerHTML=min;
         document.getElementById("hour").innerHTML=hr;
         setTimeout(stopwatch,10);
    }


}

function start(){
    timer=true;
    stopwatch();
}
function stop(){
    timer=false;
}
function reset() {
    timer=false;
    hour=0;
    count=0;
    minute=0;
    second=0;
    document.getElementById("second").innerHTML="00";
    document.getElementById("minute").innerHTML="00";
    document.getElementById("hour").innerHTML="00";
    document.getElementById("count").innerHTML="00";
}
