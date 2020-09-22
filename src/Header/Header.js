import React from 'react'
import Logo from './Logo.js'
import Finder from './Finder.js'
import HeaderAdvBlock from './HeaderAdvBlock.js'
import WeatherСurrency from './WeatherСurrency.js'
import Ticker from './Ticker.js'
import NavWrapper from './NavWrapper.js'
import { NavLink } from 'react-router-dom'
import './Style/Header.css'
function Header(props) {
    return (
        <header>
            <div className='header__top-comtainer'>
                <NavWrapper props={props.onclickTag} />
                <WeatherСurrency
                    place={props.place}
                    icon={props.icon}
                    iconDescription={props.iconDescription}
                    temperature={props.temperature}
                    tempFeelsLike={props.tempFeelsLike}
                    usdRate={props.usdRate}
                    eurRate={props.eurRate}
                    rubRate={props.rubRate}
                />
            </div>
            <div className='header__bottom-container'>
                <NavLink to='/'>
                    <Logo />
                </NavLink>
                <Finder
                    getSearcValue={props.getSearcValue}
                    onclickSearch={props.onclickSearch}
                />
                <HeaderAdvBlock />
            </div>
            <Ticker ticker={props.ticker} />
        </header>
    )
}
export default Header