const DayDetails = (props) => {
  console.log(props.updateF)
  return (
    <div className='chosenBox'>
      <button onClick={() => props.setActiveDay(false)}>Back</button>
      <p>{props.data.windDirection}</p>
      <p>{props.data.day}</p>
      <p>{props.data.temp}°C</p>
      <p>{props.data.windSpeed}</p>
      <p>{props.data.type} </p>
    
    </div>
  );
};

export default DayDetails;
