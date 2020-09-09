import React from 'react'
import './Ticker.css'

function Ticker() {
    return(
        <h3 className='ticker ticker_flex'>
            <div className='ticker__element ticker__element_static-part'>Главное</div>
            <div className='ticker__element ticker__element_running-part'>...бегущая строка</div>
        </h3>
    )
}
export default Ticker