import React from 'react'
import { NavLink } from 'react-router-dom'
import './Style/WeatherСurrency.css'
function WeatherСurrency(props) {
    return (
        <div className='weather-currency__container _flex'>
            <NavLink className='_text-decoration-none' to='/weather'>
                <div className='weather__container _flex'>
                    <div className='weather__place _center-align'>{props.place}</div>
                    <div className='weather__image' title={props.iconDescription} style={{ backgroundImage: `url(http://openweathermap.org/img/wn/${props.icon}@2x.png)` }}></div>
                    <div className='weather__temp _center-align _flex'>
                        <div><strong>{props.temperature}C&deg;</strong></div>
                        <div className='_padding-left'>чувствуется как: <strong>{props.tempFeelsLike}C&deg;</strong></div>
                    </div>
                </div>
            </NavLink>
            <NavLink className='_text-decoration-none _center-align' to='/rates'>
                <div className='currency__container _flex'>
                    <span className='_padding-left'>Курсы НБРБ:</span>
                    <div className='_padding-left'><strong>&#36; {props.usdRate}BYR;</strong></div>
                    <div className='_padding-left'><strong>&euro; {props.eurRate}BYR;</strong></div>
                    <div className='_padding-left'><strong> 100&#8381; {props.rubRate}BYR;</strong></div>
                </div>
            </NavLink>
        </div>
    )
}
export default WeatherСurrency

// `http://openweathermap.org/img/wn/${props.icon}@2x.png`