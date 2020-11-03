import React from 'react'
import { NavLink } from 'react-router-dom'
import './style/finder.css'
function Finder(props) {
    return (
        <h2 className='finder__container'>
            <div className='finder__wrapper'>
                <input type='text' className='finder__input' onChange={props.onChange}></input>
                <NavLink to='/search' className='finder__link' onClick={props.finderOnClick}>
                    Найти
                </NavLink>
            </div>
        </h2>
    )
}
export default Finder