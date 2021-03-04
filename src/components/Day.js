import React from "react";
import { setIconBasedOnType } from "../utils";

const Day = (props) => {
  return (
    <div className="box">
      {props.data.days &&
        props.data.days.map((el, index) => (
          <div
            key={index}
            onClick={() => props.setActiveDay(el)}
            className="innerBox"
          >
            {el.day}
            <p>{el.temp}°C</p>
            {setIconBasedOnType(el.type)}
          </div>
        ))}
    </div>
  );
};

export default Day;
