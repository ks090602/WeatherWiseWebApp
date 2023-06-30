import { useEffect, useState } from 'react';
import './style.css'
import WeatherCard from './weathercard';


function FrontPage() {
    const [searchValue, setSearchValue] = useState("delhi");

    const [weatherInfo, setweatherInfo] = useState({});

    const changeSearchValue = (event) => {
        const newValue = event.target.value;
        setSearchValue(newValue);
    };

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=cadae6ffaf8993c3d20c3f3781dd0eea`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            const { temp, humidity, pressure, feels_like } = data.main;
            // console.log(temp); 
            // console.log(humidity); 
            // console.log(pressure);
            // console.log(feels_like); 

            const { main: weatherMood } = data.weather[0];
            // console.log(weatherMood); 

            const { name } = data;
            // console.log(name);

            const { speed: windSpeed } = data.wind;
            // console.log(windSpeed);

            const { country, sunset, sunrise } = data.sys;
            // console.log(country);
            // console.log(sunset);
            // console.log(sunrise);

            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                feels_like,
                weatherMood,
                name,
                windSpeed,
                country,
                sunset,
                sunrise
            };

            setweatherInfo(myNewWeatherInfo);

        } catch (error) {
            console.log(error);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            getWeatherInfo();
        }
    }

    useEffect(() => {
        getWeatherInfo();
    }, []);

    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" placeholder="Enter City Name.." id="search" className="searchTerm" onChange={changeSearchValue}
                        onKeyDown={handleKeyDown} />
                    <button className="searchButton" type="button" onClick={getWeatherInfo} >Search</button>
                </div>
            </div>
            <WeatherCard {...weatherInfo}></WeatherCard>
        </>
    )
}

export default FrontPage;