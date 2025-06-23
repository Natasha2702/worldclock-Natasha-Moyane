function updateTime(){

//Danmark
let denmark = document.querySelector("#denmark");
let denmarkTime = denmark.querySelector(".time");
let denmarkDate = denmark.querySelector(".date");
let denmarkElement=moment().tz("America/Danmarkshavn");
denmarkDate.innerHTML = moment().format("MMMM Do YYYY");
denmarkTime.innerHTML =`${denmarkElement.format("h:mm:ss  [<small>]A[</small>]")}`;

//SWITZERLAND
let switzerland = document.querySelector("#switzerland");
let switzerlandTime = switzerland.querySelector(".time");
let switzerlandDate = switzerland.querySelector(".date");
let switzerlandElement=moment().tz("Europe/Zurich");
switzerlandDate.innerHTML = moment().format("MMMM Do YYYY");
switzerlandTime.innerHTML =`${switzerlandElement.format("h:mm:ss [<small>]A[</small>]")}`;

//Melbourne
let melbourne = document.querySelector("#melbourne");
let melbourneTime = melbourne.querySelector(".time");
let melbourneDate = melbourne.querySelector(".date");
let melbourneElement=moment().tz("Australia/Melbourne");
melbourneDate.innerHTML = moment().format("MMMM Do YYYY");
melbourneTime.innerHTML =`${melbourneElement.format("h:mm:ss  [<small>]A[</small>]")} `;
}

updateTime();
setInterval(updateTime,1000);