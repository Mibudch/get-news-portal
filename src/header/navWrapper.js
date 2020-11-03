import React from 'react'
import './style/navWrapper.css'
import { tagArray } from '../sys/tagArray.js'
import { NavLink } from 'react-router-dom'
function NavWrapper() {
    return (
        <nav className='nav__container'>
            {tagArray.map((el, i) => {
                return (
                    <li key={i}>
                        <NavLink exact to={`/category/${el.category.toLowerCase()}`} activeClassName='active_link' className='nav__link'>
                            <div className='nav__tag'>{el.category}</div>
                        </NavLink>
                    </li>

                )
            })}
        </nav >
    )
}
export default NavWrapper