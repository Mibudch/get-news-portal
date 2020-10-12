import React from 'react'
import './style/finder.css'
function Finder(props) {
    return (
        <h2 className='finder__container' >
            <form className='finder__wrapper'>
                <input className='finder__input' type='text' placeholder='поиск новостей...'></input>
                <button className='finder__button'>Найти</button>
            </form>
        </h2>
    )
}
export default Finder