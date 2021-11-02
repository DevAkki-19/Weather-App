const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('submitBtn');

const getInfo =async(event) => {
    event.preventDefault();
    let cityVal =cityName.ariaValueMax;


   //let url='https://api.openweathermap.org/data/2.5/weather?q=${}&appid=adf0cf22618186fc11e9f89c090cb356'
   if(cityName === ""){
         city_name.innerText =`please write name before search`;
   }
       else{
           try{
        let url='https://api.openweathermap.org/data/2.5/weather?q=${}&appid=adf0cf22618186fc11e9f89c090cb356'
        const response = await fetch(url);
       }catch{
           city_name.innerText ='Please eneter your city name proporrerly'
       }
   }

submitBtn.addEventListener('click',getInfo);
}