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
            test: 'test',
            isLoading: false,
            lat: 53.893009,
            lon: 27.567444,
            temperMin: '',
            temperMax: '',
            icon: ''
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
                const temperMin = res.data.main.temp_min
                const temperMax = res.data.main.temp_max
                const icon = res.data.weather[0].icon
                this.setState({ temperMin, icon, temperMax, isLoading: true })
                console.log(res.data);
            })

    }
    // componentDidUpdate(prevProps, prevState) {

    //         if (this.state.lon !== prevState.lon && this.state.lat !== prevState.lat) {
    //             this.setState({ lat: lat, lon: lon })

    //         }
        
    // }
    render() {
            // console.log(this.state.lat, this.state.lon)
            return !this.state.isLoading ? null : (
                <header>
                    <div className='header header_flex'>
                        <Logo />
                        <Finder />
                        <WeatherСurrency
                            icon={this.state.icon}
                            temperMin={this.state.temperMin}
                            temperMax={this.state.temperMax}
                        />
                    </div>
                    <Ticker />
                    <TagWrapper />
                </header>
            )
        }
}
    export default Header