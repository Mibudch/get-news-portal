import React from 'react'
import Background from '../header/img/logo.png'
import './style/logo.css'
function Logo() {
    return (
        <h1 className='logo-container'>
            <img className='logo' src={Background} alt='none'></img>
        </h1>
    )
}
export default Logo