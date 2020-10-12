import React from 'react'
import { NavLink } from 'react-router-dom'
import './style/weatherСurrency.css'
function WeatherСurrency(props) {
    return (
        <div className='weather-currency__container _flex'>
            <NavLink className='_text-decoration-none' to='/weather'>
                <div className='weather__container _flex'>
                    <div className='weather__place _center-align'>{props.place}</div>
                    <div className='weather__image' title={props.iconDescription} style={{ backgroundImage: `url(http://openweathermap.org/img/wn/${props.icon}@2x.png)` }}></div>
                    <div className='weather__temp _center-align _flex'>
                        <div><strong>{props.temperature}C&deg; &nbsp;</strong></div>
                        <div className='_padding-left'>чувствуется как: <strong>{props.tempFeelsLike}C&deg;</strong></div>
                    </div>
                </div>
            </NavLink>
            <NavLink className='_text-decoration-none _center-align' to='/rates'>
                <div className='currency__container _flex'>
                    <div className='rates_padding-left'><strong><span className='rates_green'>&#36;</span> {(Math.round((props.usdRate) * 100) / 100)}BYR;</strong></div>
                    <div className='rates_padding-left'><strong><span className='rates_red'>&euro;</span> {(Math.round((props.eurRate) * 100) / 100)}BYR;</strong></div>
                    <div className='rates_padding-left'><strong><span className='rates_blue'>100&#8381;</span> {(Math.round((props.rubRate) * 100) / 100)}BYR;</strong></div>
                </div>
            </NavLink>
        </div>
    )
}
export default WeatherСurrency

