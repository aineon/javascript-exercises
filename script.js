//Display current day and time

let date = new Date();
let day = date.getDay();
let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

console.log('Today is: ' + weekday[day]);
console.log('Current time is: ' + time);


document.querySelector('#day').textContent = weekday[day];
document.querySelector('#time').textContent = time;