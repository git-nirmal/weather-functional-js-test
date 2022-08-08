import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Homepage.css";

const CapitalWeather = () => {
  const [citydata, setCityData] = useState({});
  const [apiRan, setApiRan] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const cityname = location.state;

  useEffect(async () => {

      setIsLoading(true);
      const response = await fetch(
        `http://api.weatherstack.com/current?access_key=1f778812c74c151ad04fb570b89c7807&query=${cityname}`
      );
      const data = await response.json();
      console.log(data);
      // setApiRan(true);
      // setButtonTapped(true);

      setCityData({
        Weather: data.current.weather_descriptions[0],
        temperature: data.current.temperature,
        timeoftheday: data.current.is_day == "yes" ? "Day" : "Night",
        humidity: data.current.humidity,
      });
      console.log(data.current);

      // const isDay = (citydata.timeoftheday=='Day' ? true : false);
      setIsLoading(false);
      setApiRan(true);

  }, []);
  return (
    <div className="body">
      <button onClick={() => navigate("/")}> Go Back </button>
      {isLoading && <p>Hold on...</p>}

      {/* <button onClick={apiHandler}>See Current Weather</button> */}

      {apiRan && (
        <div className="body">
          <h2>Weather : {citydata.Weather} </h2>
          <h2>Temperature : {citydata.temperature} </h2>
          <h2>Day/Night : {citydata.timeoftheday} </h2>
          <h2>Humidity : {citydata.humidity} </h2>
        </div>
      )}
    </div>
  );
};
export default CapitalWeather;
