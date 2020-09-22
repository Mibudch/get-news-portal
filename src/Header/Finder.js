import React from 'react'
import './Finder.css'
function Finder(props) {
    return (
        <h2>
            <form>
                <input type='text' onChange={props.getSearcValue}></input>
                <button className='finder__button button_tick' onClick={props.onclickSearch}>Найти</button>
            </form>
        </h2>
    )
}
export default Finder