import React, { useState, useEffect } from "react";
import weatherdata from "../data.json";

const Day = () => {
  const [days, setDays] = useState([]);
  console.log(days);

  useEffect(() => {
    setDays(weatherdata.days);
  }, []);

  return (
    <div className="box">
      {days &&
        days.map((el, index) => (
          <div key={index}>
            {el.day}
            <p>{el.temp} °C</p>
          </div>
        ))}
    </div>
  );
};

export default Day;
