import React from 'react'
import { NavLink } from 'react-router-dom'
import './WeatherСurrency.css'
function WeatherСurrency(props) {
    return (
        <div className='weather-currency__container'>
            <NavLink className='_text-decoration-none' to='/weather'>
                <div className='weather__container'>
                    <div className='weather__place _center-align'>{props.place}</div>
                    <div className='weather__image' style={{ backgroundImage: `url(http://openweathermap.org/img/wn/${props.icon}@2x.png)` }}></div>
                    <div className='weather__temp _center-align'>{props.temperature}C&deg;</div>
                </div>
            </NavLink>
            <NavLink className='_text-decoration-none' to='/rates'>
                <div>Курсы НБРБ: &#36; {props.usdRate}BYR; &euro; {props.eurRate}BYR; 100&#8381; {props.rubRate}BYR;</div>
            </NavLink>
        </div>
    )
}
export default WeatherСurrency

// `http://openweathermap.org/img/wn/${props.icon}@2x.png`