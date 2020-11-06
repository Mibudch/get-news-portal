import React from 'react'
import './style/weather.css'

function Weather(props) {
    return (
        <div onClick={props.weatherOnClick} className='weather__container _flex'>
            <div className='weather__place _center-align'>{props.place}</div>
            <div className='weather__image' title={props.iconDescription} style={{ backgroundImage: props.icon }}></div>
            <div className='weather__temp _center-align _flex'>
                <div><strong>{props.temperature}C&deg; &nbsp;</strong></div>
                <div className='_padding-left'>чувствуется как: <strong>{props.tempFeelsLike}C&deg;</strong></div>
            </div>
        </div>
    )
}
export default Weather