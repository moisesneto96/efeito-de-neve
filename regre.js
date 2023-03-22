function createSnow(){
    let container = document.querySelector('.container');
    let span = document.createElement('span');
    span.style.left =Math.random()*innerWidth + 'px';

    container.appendChild(span);

    setTimeout(() => {
        span.remove();
    }, 5000)
    
   
}
setInterval(createSnow, 100)

let counterDate = new Date('jun 30, 2022 00:00:00').getTime();

function countDown(){
    let now = new Date().getTime();
    gap =counterDate -now;

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes* 60;
    let days = hours * 24;

    let day = Math.floor(gap / (days));
    let hour = Math.floor((gap % (days)) / (hours));
    let minute = Math.floor((gap % (hours)) / (minutes));
    let second = Math.floor((gap % (minutes)) / (seconds));

    document.getElementById('days').innerHTML = day;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minute;
    document.getElementById('seconds').innerHTML = second;
}
setInterval(function(){
    countDown();
},1000)