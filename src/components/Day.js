import React from "react";
import { getTempUnitSign, setIconBasedOnType } from "../utils";

const Day = ({ data, setActiveDay }) => (
  <div className="box">
    {data.days &&
      data.days.map((el, index) => (
        <div key={index} onClick={() => setActiveDay(el)} className="innerBox">
          {el.day}
          <p>
            {el.temp}
            {getTempUnitSign(data.tempUnit)}
          </p>
          {setIconBasedOnType(el.type)}
        </div>
      ))}
  </div>
);

export default Day;
