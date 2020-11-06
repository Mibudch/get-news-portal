import React from 'react'
import './style/finder.css'
function Finder(props) {
    return (
        <h2 className='finder__container'>
            <div className='finder__wrapper'>
                <input type='text' className='finder__input' onKeyDown={props.onKeyDown} onChange={props.onChange}></input>
                <button className='finder__button' onClick={props.finderOnClick}>Найти</button>
            </div>
        </h2>
    )
}
export default Finder