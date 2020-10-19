import React from 'react'
import { NavLink } from 'react-router-dom'
import './style/currency.css'
function Сurrency(props) {
    return (
        <NavLink className='_text-decoration-none _center-align' to='/rates'>
            <div className='currency__container _flex'>
                <div className='rates_padding-left'><strong><span className='rates_green'>&#36;</span> {props.usdRate}BYR;</strong></div>
                <div className='rates_padding-left'><strong><span className='rates_red'>&euro;</span> {props.eurRate}BYR;</strong></div>
                <div className='rates_padding-left'><strong><span className='rates_blue'>100&#8381;</span> {props.rubRate}BYR;</strong></div>
            </div>
        </NavLink>
    )
}
export default Сurrency