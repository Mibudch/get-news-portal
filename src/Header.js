import React from 'react'
import Logo from './Header/Logo.js'
import Finder from './Header/Finder.js'
import HeaderAdvBlock from './Header/HeaderAdvBlock.js'
import WeatherСurrency from './Header/WeatherСurrency.js'
import Ticker from './Header/Ticker.js'
import TagWrapper from './Header/TagWrapper.js'
import { NavLink } from 'react-router-dom'
function Header(props) {
    return (
        <header>
            <div className='header__top-comtainer'>
                <TagWrapper props={props.onclickTag} />
                <WeatherСurrency
                    place={props.place}
                    icon={props.icon}
                    iconDescription={props.iconDescription}
                    temperature={props.temperature}
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