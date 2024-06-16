let clock=document.querySelector('.clock');
let start=document.getElementById('start');
let stop=document.getElementById('stop');
let reset=document.getElementById('reset');
let min=document.getElementById('min');
let sec=document.getElementById('sec');
let msec=document.getElementById('msec');

let msecs = 0;
let secs = 0;
let mins = 0;

let timerId=null;
start.addEventListener('click',function(){
    if(timerId!=null){
        clearInterval(timerId);
    }
    timerId =setInterval(startTimer,10);
});
stop.addEventListener('click',function(){
    clearInterval(timerId);
});
reset.addEventListener('click',function(){
    clearInterval(timerId);
    min.innerHTML=`00`;
    sec.innerHTML=`00`;
    msec.innerHTML=`00`;
    msecs=secs=mins=0;

});
function startTimer(){
    msecs++;
    if(msecs == 100){
        msecs=0;
        secs++;
        if(secs == 60){
            secs=0;
            mins++;
        }
    }
    let msecString;
    if(msecs<10){
        msecString=`0${msecs}`;
    }
    else{
        msecString=msecs;
    }
    let secString;
    if(secs<10){
        secString=`0${secs}`;
    }
    else{
        secString=secs;
    }
    let minsString;
    if(mins<10){
        minsString=`0${mins}`;
    }
    else{
        minsString=mins;
    }
    msec.innerHTML=`${msecString}`;
    sec.innerHTML=`${secString}`;
    min.innerHTML=`${minsString}`;

}