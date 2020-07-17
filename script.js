//Display current day and time

let date = new Date();
let day = date.getDay();
let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

console.log('Today is: ' + weekday[day]);
console.log('Current time is: ' + time);


document.querySelector('#day').textContent = weekday[day];
document.querySelector('#time').textContent = time;


//Print contents of current window
function printCurrentPage() {
    window.print()
};

// Get the current date in different formats
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd;
}
if (mm > 10) {
    mm = '0' + mm;
};

today = mm + '-' + dd + '-' + yyyy;
today1 = mm + '/' + dd + '/' + yyyy;
today2 = dd + '-' + mm + '-' + yyyy;
today3 = dd + '/' + mm + '/' + yyyy;

document.write(today)\ n;
document.write(today1);
document.write(today2);
document.write(today3);