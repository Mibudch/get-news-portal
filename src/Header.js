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
            temperature: [],
            icon: ''
        }
    }
    componentDidMount() {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Mogilev&units=metric&lang=ru&appid=8deb1290960a6df846daf0a26e878871`)
            .then(res => {
                const temperature = res.data
                const icon = res.data.weather[0].icon
                this.setState({ temperature, icon })
                console.log(res.data);
            })
    }
    render() {
        return (
            <header>
                <div className='header header_flex'>
                    <Logo />
                    <Finder />
                    <WeatherСurrency
                        icon={this.state.icon}
                    />
                </div>
                <Ticker />
                <TagWrapper />
            </header>
        )
    }
}
export default Header