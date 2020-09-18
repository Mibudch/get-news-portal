import React from 'react'
import Logo from './Header/Logo.js'
import Finder from './Header/Finder.js'
import WeatherСurrency from './Header/WeatherСurrency.js'
import Ticker from './Header/Ticker.js'
import TagWrapper from './Header/TagWrapper.js'
import { tagArray } from './Header/TagArray.js'
function Header(props) {
    return (
        <header>
            <div className='header__container header_flex'>
                <Logo />
                <Finder />
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
            <Ticker
                ticker={props.ticker}
            />
            <nav className='tagWrapper'>
                {tagArray.map((el, i) => {
                    return (
                        <TagWrapper
                            key={i}
                            tagName={el.tagName}
                            category={el.category}
                            handlerOnclickTag={props.handlerOnclickTag}
                        />
                    )
                })}
            </nav>
        </header>
    )
}
export default Header