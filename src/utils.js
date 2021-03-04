import constants from "./constants";

export const setIconBasedOnType = (type) => {
  let icon;
  if (type === constants.cloudy) {
    icon = "cloud";
  } else if (type === constants.sunny) {
    icon = "sun";
  } else {
    icon = "cloud-rain";
  }

  return (
    <span>
      <i className={`fas fa-${icon}`}></i>
    </span>
  );
};

export const getTempUnitSign = (tempUnit) => (tempUnit === "C" ? "°C" : "°F");
