import React from 'react'
import { NavLink } from 'react-router-dom'
import Background from '../header/img/logo.png'
import './style/logo.css'
function Logo() {
    return (
        <NavLink  className='logo-link' to='/'>
            <div className='logo-container'>
                <img className='logo' src={Background} alt='none'></img>
            </div>
        </NavLink>
    )
}
export default Logo