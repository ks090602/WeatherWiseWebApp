import { useState, useEffect } from "react";
import "./style.css";

function WeatherCard({
  temp,
  humidity,
  pressure,
  feels_like,
  weatherMood,
  name,
  windSpeed,
  country,
  sunset,
  sunrise,
}) {
  const [weatherState, setWeatherState] = useState("");

  useEffect(() => {
    if (weatherMood) {
      switch (weatherMood) {
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Rain":
          setWeatherState("wi-rain");
          break;
        case "Smoke":
          setWeatherState("wi-smoke");
          break;
        case "Mist":
          setWeatherState("wi-fog");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weatherMood]);

  // converting seconds to time
  let sec1 = sunset;
  let date1 = new Date(sec1 * 1000); // converted into miliseconds
  let timeStringSunSet = `${date1.getHours()}: ${date1.getMinutes()}`;

  let sec2 = sunrise;
  let date2 = new Date(sec2 * 1000); // converted into miliseconds
  let timeStringSunRise = `${date2.getHours()}: ${date2.getMinutes()}`;

  return (
    <div className="wrapperDiv">
      <div className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <text>{temp}&deg;</text>
          </div>
          <div className="description">
            <div className="weatherCondition">
              <text>{weatherMood}</text>
            </div>
            <div className="place">
              <text>
                {name}, {country}
              </text>
            </div>
          </div>
          <div className="sunInfo">
            <div>
              <p>
                <i className={"wi wi-sunrise"}></i>
              </p>
              <p>
                {timeStringSunRise} <br />
                Sunrise
              </p>
            </div>

            <div>
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p>
                {timeStringSunSet} <br />
                Sunset
              </p>
            </div>
          </div>
        </div>
        {/*  4 column section  */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                <text>
                  {feels_like}&deg; <br />
                  Feels Like
                </text>
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                <text>
                  {humidity}% <br />
                  Humidity
                </text>
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                <text>
                  {pressure} millibar
                  <br />
                  Pressure
                </text>
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                <text>
                  {Math.floor(windSpeed * 3.6)} km/hr <br />
                  Speed
                </text>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
