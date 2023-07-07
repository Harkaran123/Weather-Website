const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search a i");
const weatherIcon = document.querySelector(".weatherIcon")

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?appid=9bf220b034f99dcba2f9bdf4b3583a4f&units=metric&q='

async function showData(city){

    var response = await fetch(apiUrl + city);
    var data = await response.json()

    if (response.status == 404){
        alert("City doesn't Exist");
        return;
    }

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/hr";


    var weatherCond = data.weather[0].main;
    
    if(weatherCond == "Rain"){
        weatherIcon.src = 'images/rain.png';
    }
    else if(weatherCond == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(weatherCond == "Drizzle"){
        weatherIcon.src = "images/drizzle.pmg";
    }
    else if(weatherCond == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    else if(weatherCond == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }

    document.querySelector(".weather").style.display = "block";
    
}

searchBtn.addEventListener('click' , ()=>{
    showData(searchBox.value);
})

searchBox.addEventListener('keypress', function (event){
    if (event.key == "Enter"){
        showData(searchBox.value);
    }
})
