import React, { Component } from 'react'
import Logo from './logo.js'
import Finder from './finder.js'
import HeaderAdvBlock from './headerAdvBlock.js'
import NavWrapper from './navWrapper.js'
import Ticker from './ticker.js'
import WeatherСurrency from './weatherСurrency.js'
import { getWeatherAPI, getRatesAPI, getTopNewsAPI } from '../sys/sysAPI.js'
import { NavLink } from 'react-router-dom'
import './style/header.css'
class HeaderContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            isCurrentLocation: false,
            lat: 53.893009,
            lon: 27.567444,
            weather: {},
            currencyRates: [],
            ticker: '',
        }
    }
    async componentDidMount() {
        try {
            const { lat, lon } = this.state
            const [getWeather, getCurrencyRates, getTopNews] = await Promise.all([
                getWeatherAPI(lat, lon),
                getRatesAPI(),
                getTopNewsAPI()
            ])
            if ("geolocation" in navigator && !this.state.isCurrentLocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    getWeatherAPI(lat, lon)
                        .then(res => {
                            const weather = res.data
                            this.setState({ weather, isCurrentLocation: true })
                        })
                })
            }
            const ticker = getTopNews.data.articles.map((el) => `${(el.title)} ${'||'} `)
            const weather = getWeather.data
            const currencyRates = getCurrencyRates.data
            this.setState({ weather, currencyRates, ticker: ticker, isLoading: true })
        } catch (e) {
            console.error(e)
        }
    }
    render() {
        return this.state.isLoading && (
            <header>
                <div className='header__top-comtainer'>
                    <NavWrapper />
                    <WeatherСurrency
                        place={this.state.weather.name}
                        icon={this.state.weather.weather[0].icon}
                        iconDescription={this.state.weather.weather[0].description}
                        temperature={this.state.weather.main.temp}
                        tempFeelsLike={this.state.weather.main.feels_like}
                        usdRate={this.state.currencyRates[4].Cur_OfficialRate}
                        eurRate={this.state.currencyRates[5].Cur_OfficialRate}
                        rubRate={this.state.currencyRates[16].Cur_OfficialRate}
                    />
                </div>
                <div className='header__bottom-container'>
                    <NavLink to='/'>
                        <Logo />
                    </NavLink>
                    <Finder />
                    <HeaderAdvBlock />
                </div>
                <Ticker
                    ticker={this.state.ticker}
                />
            </header>
        )
    }
}
export default HeaderContainer