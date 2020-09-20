import React from 'react'
import { NavLink } from 'react-router-dom'
function WeatherСurrency(props) {
    return (
        <h3>
            <NavLink to='/weather'>
                <div>Погода: {props.place}<img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt={props.iconDescription} title={props.iconDescription}></img> {props.temperature}C&deg;</div>
            </NavLink>
            <NavLink to='/rates'>
                <div>Курсы НБРБ: &#36; {props.usdRate}BYR; &euro; {props.eurRate}BYR; 100&#8381; {props.rubRate}BYR;</div>
            </NavLink>
        </h3>
    )
}
export default WeatherСurrency