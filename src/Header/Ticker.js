import React from 'react'
import Marquee from 'react-double-marquee'
import './Style/Ticker.css'

function Ticker(props) {
    return (
        <h3 className='ticker ticker_flex'>
            <div className='ticker_static-container'>Последние новости:</div>
            <div className='ticker_running-container'>
                <div className='ticker__element_marquee'><Marquee direction ='left'>{props.ticker}</Marquee></div>
            </div>
        </h3>
    )
}
export default Ticker