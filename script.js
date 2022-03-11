async function getWeather(city) {
    let api = "e2f24173e8444332ac3155530212107";
    var result,
    cityname,
    region,
    tz_id,
    temperatureC,
    last_updated,
    condition_icon,
    condition_text;



    const res=await fetch (`https://api.weatherapi.com/v1/current.json?key=${api}&q=${city}&aqi=no`);
    const record=await res.json();
    console.log(record.location);
    cityname = record.location.name ;
    region = record.location.region ;
    tz_id = record.location.tz_id ;
    temperatureC = record.current.feelslike_c ;
    last_updated = record.current.last_updated ;
    condition_icon = record.current.condition.icon ;
    condition_text =  record.current.condition.text;
    temp = `<img src="http://${condition_icon}" alt="" width="60"> ${temperatureC}`;
    image_cityname = `<img src="https://source.unsplash.com/800x600/?${region}" alt="" width="160">`;

 // console.log(temp);


    document.getElementById("last_updated").innerHTML=last_updated;
    document.getElementById("cityname").innerHTML=cityname;
    document.getElementById("condition_text").innerHTML=condition_text;
    document.getElementById("temp").innerHTML=temp;
    document.getElementById("image_cityname").innerHTML= image_cityname;
    
}
// getWeather("Tunisia");


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    
    console.log('The Browser Does not Support Geolocation');
  }
}

function showPosition(position) {
    userGps = position.coords.latitude + "," + position.coords.longitude;
    console.log(userGps);
    getWeather(userGps);
    
}

function showError(error) {
  if(error.PERMISSION_DENIED){
    console.log('The User have denied the request for Geolocation.');
     
  }
}
getLocation();

