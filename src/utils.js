import constants from "./constants";

export const setIconBasedOnType = (type) => {
  let icon;
  if (type === constants.cloudy) {
    icon = (
      <span>
        <i className="fas fa-cloud"></i>
      </span>
    );
  } else if (type === constants.sunny) {
    icon = (
      <span>
        <i className="fas fa-sun"></i>
      </span>
    );
  } else {
    icon = (
      <span>
        <i className="fas fa-cloud-rain"></i>
      </span>
    );
  }

  return icon;
};
