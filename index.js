function updateTime(){

//Danmark
let denmark = document.querySelector("#denmark");
if (denmark){
let denmarkTime = denmark.querySelector(".time");
let denmarkDate = denmark.querySelector(".date");
let denmarkElement=moment().tz("America/Danmarkshavn");
denmarkDate.innerHTML = moment().format("MMMM Do YYYY");
denmarkTime.innerHTML =`${denmarkElement.format("h:mm:ss  [<small>]A[</small>]")}`;
}


//SWITZERLAND
let switzerland = document.querySelector("#switzerland");
if (switzerland){
let switzerlandTime = switzerland.querySelector(".time");
let switzerlandDate = switzerland.querySelector(".date");
let switzerlandElement=moment().tz("Europe/Zurich");
switzerlandDate.innerHTML = moment().format("MMMM Do YYYY");
switzerlandTime.innerHTML =`${switzerlandElement.format("h:mm:ss [<small>]A[</small>]")}`;
}


//Melbourne
let melbourne = document.querySelector("#melbourne");
if(melbourne){
let melbourneTime = melbourne.querySelector(".time");
let melbourneDate = melbourne.querySelector(".date");
let melbourneElement=moment().tz("Australia/Melbourne");
melbourneDate.innerHTML = moment().format("MMMM Do YYYY");
melbourneTime.innerHTML =`${melbourneElement.format("h:mm:ss  [<small>]A[</small>]")} `;
}}


//multiple cities

function updateCity(event){
let cityTimezone = event.target.value;
if (cityTimezone === "current"){
    cityTimezone=moment.tz.guess();
}
let cityName = cityTimezone.replace("_"," ").split("/")[1];
let cityTime = moment().tz(cityTimezone);
let cityElement = document.querySelector("#cities");
cityElement.innerHTML=
`<div class="city">  
<div>
<h2>${cityName}</h2>
<div class="date">${cityTime.format("MMMM Do YYYY")}</div>
</div>
<div class="time">${cityTime.format("h:mm:ss  [<small>]A[</small>]")}</div>
</div>`;
}

updateTime  ();
setInterval(updateTime,1000);


let cityselect = document.querySelector("#city");
cityselect.addEventListener("change",updateCity);