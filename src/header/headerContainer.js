import React, { Component } from 'react'
import Logo from './logo.js'
import Finder from './finder.js'
import HeaderAdvBlock from '../adv/headerAdvBlock.js'
import NavWrapper from './navWrapper.js'
import Ticker from './ticker.js'
import Weather from './weather.js'
import Currency from './currency.js'
import { getWeatherAPI, getRatesAPI, getTopNewsAPI } from '../sys/sysAPI.js'
import { NavLink } from 'react-router-dom'
import './style/header.css'
class HeaderContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            defaultState: '--',
            isLoading: false,
            isCurrentLocation: false,
            lat: 53.89,
            lon: 27.56,
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
                    const lat = position.coords.latitude.toFixed(3);
                    const lon = position.coords.longitude.toFixed(3);
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
            console.log(e)
        }
    }
    render() {
        return this.state.isLoading && (
            <header>
                <div className='header__top-comtainer'>
                    <NavWrapper />
                    <Weather
                        place={this.state.weather.city.name}
                        icon={`url(http://openweathermap.org/img/wn/${this.state.weather.list[0].weather[0].icon}@2x.png)`}
                        iconDescription={this.state.weather.list[0].weather[0].description}
                        temperature={this.state.weather.list[0].main.temp.toFixed(0)}
                        tempFeelsLike={this.state.weather.list[0].main.feels_like.toFixed(0)}
                    />
                    <Currency
                        usdRate={this.state.currencyRates[4].Cur_OfficialRate.toFixed(2)}
                        eurRate={this.state.currencyRates[5].Cur_OfficialRate.toFixed(2)}
                        rubRate={this.state.currencyRates[16].Cur_OfficialRate.toFixed(2)}
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