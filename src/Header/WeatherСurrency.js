import React from 'react'
function WeatherСurrency(props) {
    return(
        <h3>
            <div>Погода: <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt=''></img></div>
            <div>Курсы НБРБ:</div>
        </h3>
    )
}
export default WeatherСurrency