import React, { Component } from 'react'
import Logo from './logo.js'
import Finder from './finder.js'
import HeaderAdvBlock from '../adv/headerAdvBlock.js'
import NavWrapper from './navWrapper.js'
import Ticker from './ticker.js'
import Weather from './weather.js'
import Currency from './currency.js'
import { getWeatherAPI, getRatesAPI, getTopNewsAPI} from '../sys/sysAPI.js'
import { NavLink } from 'react-router-dom'
import './style/header.css'
import Background from '../preloaders/img/35.svg'
import { defaultValue, greetings } from '../preloaders/defaults.js'


let finderValue = ''
class HeaderContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            isCurrentLocation: false,
            lat: 53.89,
            lon: 27.56,
            place: '',
            icon: '',
            iconDescription: '',
            temperature: '',
            tempFeelsLike: '',
            usdRate: '',
            eurRate: '',
            rubRate: '',
            ticker: '',
        }
    }
    async componentDidMount() {
        this.setState({ isLoading: true })
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
                            const place = res.data.city.name
                            const icon = res.data.list[0].weather[0].icon
                            const iconDescription = res.data.list[0]?.weather[0].description
                            const temperature = res.data.list[0].main.temp.toFixed(0)
                            const tempFeelsLike = res.data.list[0].main.feels_like.toFixed(0)
                            this.setState({ place, icon, iconDescription, temperature, tempFeelsLike, isCurrentLocation: true })
                        })
                })
            }
            const ticker = getTopNews.data.articles.map((el) => `${(el.title)} ${'||'} `)
            const place = getWeather.data.city.name
            const icon = getWeather.data.list[0].weather[0].icon
            const iconDescription = getWeather.data.list[0]?.weather[0].description
            const temperature = getWeather.data.list[0].main.temp.toFixed(0)
            const tempFeelsLike = getWeather.data.list[0].main.feels_like.toFixed(0)
            const usdRate = getCurrencyRates.data[4].Cur_OfficialRate.toFixed(2)
            const eurRate = getCurrencyRates.data[5].Cur_OfficialRate.toFixed(2)
            const rubRate = getCurrencyRates.data[16].Cur_OfficialRate.toFixed(2)
            this.setState({ place, icon, iconDescription, temperature, tempFeelsLike, usdRate, eurRate, rubRate, ticker: ticker, isLoading: true })
        } catch (e) {
            console.log(e)
        }
        this.setState({ isLoading: false })
    }
    getOnChangeFinderValue = (event) => {
        finderValue = event.target.value
    }
    render() {
        return (
            <header>
                <div className='header__top-comtainer'>
                    <NavWrapper />
                    {this.state.isLoading ?
                        <Weather
                            icon={`url(${Background})`}
                            iconDescription={defaultValue}
                            temperature={defaultValue}
                            tempFeelsLike={defaultValue}
                        /> :
                        <Weather
                            place={this.state.place}
                            icon={`url(http://openweathermap.org/img/wn/${this.state.icon}@2x.png)`}
                            iconDescription={this.state.iconDescription}
                            temperature={this.state.temperature}
                            tempFeelsLike={this.state.tempFeelsLike}
                        />
                    }
                    {this.state.isLoading ?
                        <Currency
                            usdRate={defaultValue}
                            eurRate={defaultValue}
                            rubRate={defaultValue}
                        /> :
                        <Currency
                            usdRate={this.state.usdRate}
                            eurRate={this.state.eurRate}
                            rubRate={this.state.currencyRatesrubRate}
                        />
                    }
                </div>
                <div className='header__bottom-container'>
                    <NavLink to='/'>
                        <Logo />
                    </NavLink>
                    <Finder
                        finderOnClick={this.handlerOnClickFinder}
                        onChange={this.getOnChangeFinderValue}
                    />
                    <HeaderAdvBlock />
                </div>
                {this.state.isLoading ?
                    <Ticker
                        ticker={greetings}
                    /> :
                    <Ticker
                        ticker={this.state.ticker}
                    />
                }
            </header>
        )
    }
}
export default HeaderContainer