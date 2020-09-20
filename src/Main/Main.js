import React from 'react'
import './Section.css'
import { withRouter } from 'react-router-dom'
const Main = (props) => {
    console.log(props);
    return (
        <section className='section' onClick={()=>props.history.push('/main' + props.newsTitle.toLowerCase())}>
            <div className='section__wrapper'>
                <div className='section__img-container'>
                    <img className='section__img' src={props.newsImage} alt='' title=''></img>
                </div>
                <div className='section__title'>{props.newsTitle}</div>
            </div>
        </section>
    )
}
export default withRouter(Main)