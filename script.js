//часы
let hoursItem = document.querySelector('.hours');
let minutesItem = document.querySelector('.minutes');
let secondsItem = document.querySelector('.seconds');
let milisecondsItem = document.querySelector('.miliseconds');

//кнопки
const srartButton = document.querySelector('.start');
const pauseButton = document.querySelector('.pause');
const stopButton = document.querySelector('.stop');
const newButton = document.querySelector('.new');

//значения
let hour = 00,
minute = 00,
second = 00,
millisecond = 00,
interval;

//обработчики кнопок
srartButton.onclick = () => {
    clearInterval(interval)
    interval = setInterval(startTimer,10)
};

pauseButton.onclick = () => {
    clearInterval(interval)
}
stopButton.onclick = () => {
    clearInterval(interval) 
    clearFields()
 
}
 
//функция для кнопки старт
function startTimer(){
    //секунды
    millisecond++
    if(millisecond < 9){
        milisecondsItem.innerText = "0" + millisecond
    }
    if(millisecond > 9){
        milisecondsItem.innerText = millisecond 
    }
    if(millisecond > 99){
        second++
        secondsItem.innerText = "0" + second
        millisecond = 0
        milisecondsItem.innerText = "0" + millisecond
    }
    //минуты
    if(second < 9){
        secondsItem.innerText = "0" + second 
    }
    if(second > 9){
        secondsItem.innerText = second
    }
    if(second > 59){
        minute++
        minutesItem.innerText = "0" + minute
        second = 0
        secondsItem.innerText = "0" + second
    }
    //часы
    if(minute < 9){
        minutesItem.innerText = "0" + minute 
    }
    if(minute > 9){
        minutesItem.innerText = minute
    }
    if(minute > 59){
        hour++
        hoursItem.innerText = "0" + hour
        minute = 0
        hoursItem.innerText = "0" + hour
    }
};

function clearFields() {
    hour = 00,
    minute = 00,
    second = 00,
    millisecond = 00;
    hoursItem.textContent = "00"
    minutesItem.textContent = "00"
    secondsItem.textContent = "00"
    milisecondsItem.textContent = "00"
};