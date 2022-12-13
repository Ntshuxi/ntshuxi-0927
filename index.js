var button =document.querySelector('.button');

let input = document.getElementById("search-bar");
var icon =document.querySelector('.icon');
var temp =document.querySelector('.temp') ; 
var desc =document.querySelector('.description') ; 
var humi =document.querySelector('.humidity');
var wind =document.querySelector('.wind');
var city =document.querySelector('.city');

input.addEventListener('keyup',e =>{
   e.preventDefault();
   if(e.keycode ===13){
      console.log("enter is pre");
   }

   });


button.addEventListener('click',function(){
   fetch("https://api.openweathermap.org/data/2.5/weather?q="+input.value+"&appid=b6ff00611894e45c4160598d413ec4f0&units=metric")
   .then((response) => response.json())
   .then((data) => {
      var iconvalue =data['weather'][0]['icon']
      var tempvalue=data['main']['temp']
      var descriptionvalue=data['weather'][0]['description']
      var humivalue=data['main']['humidity']
      var windvalue=data["wind"]["speed"]
      var namevalue=data['name']

     icon.src="https://openweathermap.org/img/wn/"+iconvalue+"@2x.png";
      temp.innerHTML=tempvalue+'°C';
      desc.innerHTML=descriptionvalue;
      humi.innerHTML='Humidity: '+humivalue+' %';
      wind.innerHTML='Wind speed: '+windvalue+' KM';
      city.innerHTML="Weather in "+ namevalue;
document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+namevalue+"')"
      

     
   })


})




input.addEventListener("keyup", e => {
  if (e.key === "Enter") {
    e.preventDefault();
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+input.value+"&appid=b6ff00611894e45c4160598d413ec4f0&units=metric")
   .then((response) => response.json())
   .then((data) => {
      var iconvalue =data['weather'][0]['icon']
      var tempvalue=data['main']['temp']
      var descriptionvalue=data['weather'][0]['description']
      var humivalue=data['main']['humidity']
      var windvalue=data["wind"]["speed"]
      var namevalue=data['name']

     icon.src="https://openweathermap.org/img/wn/"+iconvalue+"@2x.png";
      temp.innerHTML=tempvalue+'°C';
      desc.innerHTML=descriptionvalue;
      humi.innerHTML='Humidity: '+humivalue+' %';
      wind.innerHTML='Wind speed: '+windvalue+' KM';
      city.innerHTML="Weather in "+ namevalue;
      document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+namevalue+"')"
      

     
   })

    
    

    
  }
});