import React, { Component } from 'react'
import axios from 'axios'
import './Header.css'
import Logo from './Header/Logo.js'
import Finder from './Header/Finder.js'
import WeatherСurrency from './Header/WeatherСurrency.js'
import Ticker from './Header/Ticker.js'
import TagWrapper from './Header/TagWrapper.js'
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            place: '',
            isLoading: false,
            lat: 53.893009,
            lon: 27.567444,
            temperature: '',
            icon: '',
            description: '',
            usdRate: '',
            eurRate: '',
            rubRate: '',
            ticker: ''
        }
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude
            const lon = position.coords.longitude
            this.setState({ lat: lat, lon: lon })
        })
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&units=metric&lang=ru&appid=8deb1290960a6df846daf0a26e878871`)
            .then(res => {
                const temperature = res.data.main.temp
                const icon = res.data.weather[0].icon
                const description = res.data.weather[0].description
                const place = res.data.name
                this.setState({ place, temperature, icon, description, isLoading: true })
            })
        axios.get(`https://www.nbrb.by/api/exrates/rates?periodicity=0`)
            .then(res => {
                const usdRate = res.data[4].Cur_OfficialRate
                const rubRate = res.data[16].Cur_OfficialRate
                const eurRate = res.data[5].Cur_OfficialRate
                this.setState({ usdRate, eurRate, rubRate })
            })
            axios.get(`http://newsapi.org/v2/top-headlines?country=ru&apiKey=7a824e553994401584147a79cbf9129f`)
            .then(res => {
               const ticker = res.data.articles.map((el)=>`${(el.title)} ${'||'} `)
               this.setState({ ticker: ticker })
               console.log(res.data);
            })
    }
    componentDidUpdate(prevProps, prevState) {
        navigator.geolocation.getCurrentPosition(position => {
            const updLat = position.coords.latitude
            const updLon = position.coords.longitude
            if (prevState.lon !== updLon && prevState.lat !== updLat) {
                axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${updLat}&lon=${updLon}&units=metric&lang=ru&appid=8deb1290960a6df846daf0a26e878871`)
                    .then(res => {
                        const temperature = res.data.main.temp
                        const icon = res.data.weather[0].icon
                        const description = res.data.weather[0].description
                        const place = res.data.name
                        this.setState({ place, temperature, icon, description })
                    })
            }
        })
    }
    render() {
        return !this.state.isLoading ? null : (
            <header>
                <div className='header'>
                    <div className='header__container header_flex'>
                        <Logo />
                        <Finder />
                        <WeatherСurrency
                            place={this.state.place}
                            icon={this.state.icon}
                            description={this.state.description}
                            temperature={this.state.temperature}
                            usdRate={this.state.usdRate}
                            eurRate={this.state.eurRate}
                            rubRate={this.state.rubRate}
                        />
                    </div>
                    <Ticker
                    ticker={this.state.ticker}
                />
                <TagWrapper />
                </div>
               
            </header>
        )
    }
}
export default Header