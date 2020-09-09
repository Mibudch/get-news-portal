import React from 'react'
import Background from '../Header/logo/GN.png'
import './Logo.css'
function Logo() {
    return (
        <h1 className='logo-container'>
            <img className='logo' src={Background} alt='none'></img>
        </h1>
    )
}
export default Logo