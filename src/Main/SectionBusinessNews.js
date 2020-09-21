import React from 'react'
import './Section.css'
function SectionBusinessNews(props) {
    return (
        <div className='section__wrapper'>
            <div className='section__img-container'>
                <img className='section__img' src={props.businessNewsImage} alt='' title=''></img>
            </div>
            <div className='section__title'>{props.businessNewsTitle}</div>
        </div>
    )
}
export default SectionBusinessNews