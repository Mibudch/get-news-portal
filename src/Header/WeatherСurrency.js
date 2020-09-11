import React from 'react'
function WeatherСurrency(props) {
    return(
        <h3>
            <div>Погода: {props.place}<img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt=''></img> {props.temperature}C&deg;</div>
            <div>Курсы НБРБ:</div>
        </h3>
    )
    
}
export default WeatherСurrency