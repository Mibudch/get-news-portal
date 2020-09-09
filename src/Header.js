import React, { Component } from 'react'
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
            test: 'test'
        }
    }
    render() {
        return (
            <header>
                <div className='header header_flex'>
                    <Logo />
                    <Finder />
                    <WeatherСurrency />
                </div>
                <Ticker/>
                <TagWrapper/>
            </header>
        )
    }
}
export default Header