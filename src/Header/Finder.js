import React from 'react'
import './Style/Finder.css'
function Finder(props) {
    return (
        <h2 className='finder__container' >
            <form className='finder__wrapper'>
                <input className='finder__input' type='text' placeholder='поиск новостей...' onChange={props.getSearcValue}></input>
                <button className='finder__button' onClick={props.onclickSearch}>Найти</button>
            </form>
        </h2>
    )
}
export default Finder