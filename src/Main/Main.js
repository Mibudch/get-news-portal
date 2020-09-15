import React from 'react'
import './Section.css'
export default function Main(props) {
    return (
        <section className='section'>
            <div className='section__wrapper'>
                <div className='section__img-container'>
                    <img className='section__img' src={props.newsImage} alt='' title=''></img>
                </div>
                <div className='section__title'>{props.newsTitle}</div>
            </div>
        </section>
    )
}