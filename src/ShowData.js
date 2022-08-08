import Homepage from "./Homepage";
import { useNavigate } from "react-router-dom";
import CapitalWeather from "./CapitalWeather";

function ShowData(props) {
  const navigate = useNavigate();

  const toCapWeather = () => {
    navigate("/capitalweather", { state: props.item.capital });
  };

  return (
    <div data-testid="MainDiv">
      <h2>Capital = {props.item.capital}</h2>
      <h2>Population = {props.item.population}</h2>
      <h2>Latitude = {props.item.latitude}</h2>
      <h2>Longitude = {props.item.longitude}</h2>
      <div>
        <img
          src={props.item.flag}
          alt=""
          style={{ height: "12rem", width: "30rem" }}
        ></img>
      </div>
      <div>
        <button
          onClick={() => {
            toCapWeather();
          }}
          style={{ height: "3rem", width: "6rem" }}
        >
          Capital Weather
        </button>
      </div>
    </div>
  );
}
export default ShowData;
