const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('min')

const secondsEl = document.getElementById('seconds')

const newYears='1 Jan 2023';
function countdown(){
    const newYearsDate= new Date(newYears);
    const currentDate= new Date();
    const totalseconds=(newYearsDate-currentDate)/1000;
    const days = Math.floor(totalseconds/3600/24);
    const hours= Math.floor(totalseconds/3600)%24;
    const mins= (Math.floor(totalseconds/60)%24 )% 60;
    const seconds=Math.floor(totalseconds%60);
    //console.log(days,hours, minutes,seconds)
    daysEl.innerHTML=days;
    hoursEl.innerHTML=hours;
    minsEl.innerHTML=  mins;
    secondsEl.innerHTML=seconds;
}
function formatTime(time){
    return time<10?(`0${time}`): time;
}
countdown();
setInterval(countdown,1000) 