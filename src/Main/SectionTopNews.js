import React from 'react'
import './Section.css'
function SectionTopNews(props) {
    return (
        <>
            <div className='section-left__container'>
                <img className='section-left__element' src={props.props[0].urlToImage} alt='' title=''></img>
                <h2><div className='section-left__element'>{props.props[0].title}</div></h2>
            </div>
            <div className='section-right__block'>
                <div className='section-right__container'>
                    <div className='section-right__top-wrapper'>
                        <img className='section-right__top-element' src={props.props[1].urlToImage} alt='' title='' ></img>
                        <div className='section-right__top-element'>{props.props[1].title}</div>
                    </div>
                    <div className='section-right__top-wrapper'>
                        <img className='section-right__top-element' src={props.props[2].urlToImage} alt='' title='' ></img>
                        <div className='section-right__top-element'>{props.props[2].title}</div>
                    </div>
                </div>
                <div className='section-right__bottom-wrapper'>
                    <div>{props.props[3].title}</div>
                    <hr/>
                    <div>{props.props[4].title}</div>
                    <hr/>
                    <div>{props.props[5].title}</div>
                    <hr/>
                    <div>{props.props[6].title}</div>
                    <hr/>
                    <div>{props.props[7].title}</div>
                    <hr/>
                    <div>{props.props[8].title}</div>
                    <hr/>
                    <div>{props.props[9].title}</div>
                </div>
            </div>
        </>
    )
}
export default SectionTopNews