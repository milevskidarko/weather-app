import React, { useState } from "react";
import "./App.css";
import constants from "./constants";
import Day from "./components/Day";
import DayDetails from "./components/DayDetails";
import weatherdata from "./data.json";

function App() {
  const [weatherData, setWeatherData] = useState(weatherdata);
  const [activeDay, setActiveDay] = useState(false);
  const [temp] = useState(null);

  const convertUnit = (temp, unit) => {
    const clonedWD = { ...weatherData };
    const clonedDay = { ...activeDay };
    if (unit === constants.celsius) {
      clonedWD.tempUnit = constants.farenheit;
      const farenheit = (temp * 9) / 5 + 32;
      clonedDay.temp = Math.round(farenheit);
    } else {
      clonedWD.tempUnit = constants.celsius;
      const celsius = ((temp - 32) * 5) / 9;
      clonedDay.temp = Math.round(celsius);
    }
    setActiveDay(clonedDay);
    setWeatherData(clonedWD);
  };

  const setToDefault = () => {
    setWeatherData(weatherdata);
  };

  return (
    <div className="bgImage" style={{ backgroundImage: "url(weather.jpg)" }}>
      {!activeDay ? (
        <Day data={weatherData} setActiveDay={setActiveDay} />
      ) : (
        <DayDetails
          tempUnit={weatherData.tempUnit}
          data={activeDay}
          setActiveDay={setActiveDay}
          temp={temp}
          convertUnit={convertUnit}
          setDefaults={setToDefault}
        />
      )}
    </div>
  );
}

export default App;
