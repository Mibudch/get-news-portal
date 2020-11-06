import React from 'react'
import { withRouter } from 'react-router-dom'
import Background from '../preloaders/img/35.svg'
import './style/weatherSection.css'
function WeatherSection(props) {
    const { isLoading } = props.history.location.state
    const { city } = props.history.location.state.weather
    let { list } = props.history.location.state.weather
    const { weather } = props.history.location.state
    return props.history.location.state.weather && (
        <section>
            <div className='head__block'>
                <div className='head__top-container'>
                    <div className='head__place'>{city.name}</div>
                    <div className='head__temp'>{list[0].main.temp.toFixed()} C&deg;</div>
                    <div className='head__date'>{list[0].dt_txt.slice(0, 10)}</div>
                </div>
                <div className='head__bottom-container'>
                    <div className='head__sunrise'>Восход:</div>
                    <div className='head__sunset'>Закат:</div>
                </div>
            </div>
            <div className='weather-card__block'>
                {list.map((el, i) => {
                    return (
                        <React.Fragment key={i}>
                            <div className='weather-card__container'>
                                <div className='weather-card__time'>{el.dt_txt}</div>
                                <img className='weather-card__icon' src={isLoading ? `${Background}` : `url(http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png)`} alt=''></img>
                                <div className='temp__container'>
                                    <div className='weather-card__temp'>{el.main.temp.toFixed()}C&deg;</div>
                                    <div className='weather-card__feels-like'> чувствуется как {el.main.feels_like.toFixed()}C&deg;</div>
                                </div>
                                <div className='weather-card__cloudy'>{el.weather[0].description}</div>
                                <div className='weather-card__wind'>{el.wind.speed.toFixed(1)} М/сек</div>
                                <div className='weather-card__pressure'>{el.main.pressure} мм/рт.ст.</div>
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
        </section>
    )
}
export default withRouter(WeatherSection)