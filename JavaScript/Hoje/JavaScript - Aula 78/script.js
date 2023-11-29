class Time{
    constructor(sec,min,hour){
        this.sec = sec < 10 ? `0${sec}`:sec
        this.min = min < 10 ? `0${min}`:min
        this.hour = hour < 10 ? `0${hour}`:hour
    }
}

const time = setInterval(() => {
  let date = new Date();
  let time = new Time(date.getSeconds(),date.getMinutes(),date.getHours());
  
  console.clear();
  console.log(time);
  
}, 1000);
