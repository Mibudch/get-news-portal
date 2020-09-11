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
            ticker: 'здесь будет длинная бегущаа строка, которая не помещается на весь экран...'
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
                const place = res.data.name
                this.setState({ place, temperature, icon, isLoading: true })
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
                        const place = res.data.name
                        this.setState({ place, temperature, icon })
                    })
            }
        })
    }
    render() {
        console.log(this.state.place);
        return !this.state.isLoading ? null : (
            <header>
                <div className='header header_flex'>
                    <Logo />
                    <Finder />
                    <WeatherСurrency
                        place={this.state.place}
                        icon={this.state.icon}
                        temperature={this.state.temperature}
                    />
                </div>
                <Ticker 
                    ticker={this.state.ticker}
                />
                <TagWrapper />
            </header>
        )
    }
}
export default Header