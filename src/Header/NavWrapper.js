import React from 'react'
import './style/navWrapper.css'
import { tagArray } from '../sys/TagArray.js'
function NavWrapper(props) {
    return (
        <nav className='nav__container'>
            {tagArray.map((el, i) => {
                return (
                    <li key={i}>
                        <button value={el.category} onClick={props.onclickTag} className='nav__element'>{el.category}</button>
                    </li>
                )
            })}

        </nav>
    )
}
export default NavWrapper