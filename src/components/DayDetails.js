import constants from "../constants";
import { setIconBasedOnType } from "../utils";

const getTempUnitSign = (tempUnit) => {
  return tempUnit === "C" ? "°C" : "°F";
};

const DayDetails = (props) => {
  return (
    <div>
      <button onClick={() => props.setActiveDay(false)}>Back</button>
      <div className="chosenBox">
        <p>{props.data.windDirection}</p>
        <p>{props.data.day}</p>
        <p>
          {props.data.temp}
          {getTempUnitSign(props.tempUnit)}
          {setIconBasedOnType(props.data.type)}
        </p>
        <p>
          {props.data.windSpeed} km/h <i className="fas fa-location-arrow"></i>
        </p>
        <p>{props.data.type}</p>
        <div className="buttonInner">
          <button
            onClick={() => props.convertUnit(props.data.temp, props.tempUnit)}
            disabled={props.tempUnit === constants.farenheit}
          >
            Convert to Farenheit
          </button>
          <button
            onClick={() => props.convertUnit(props.data.temp, props.tempUnit)}
            disabled={props.tempUnit === constants.celsius}
          >
            Convert to Celsius
          </button>
        </div>
      </div>
    </div>
  );
};

export default DayDetails;
