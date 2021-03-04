import React, { useState } from "react";
import "./App.css";
import Day from "./components/Day";
import DayDetails from "./components/DayDetails";
import weatherdata from "./data.json";

function App() {
  const [activeDay, setActiveDay] = useState(false);
  

  return (
    <div className="bgImage" style={{ backgroundImage: "url(weather.jpg)" }}>
      {activeDay === false ? (
        <Day 
        data={weatherdata} 
        setActiveDay={setActiveDay} 
        />
      ) : (
        <DayDetails 
        data={activeDay} 
        setActiveDay={setActiveDay}
       
        />
      )}
    </div>
  );
}

export default App;
