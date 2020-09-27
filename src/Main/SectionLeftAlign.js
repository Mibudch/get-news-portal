import React from 'react'
import './Style/Section.css'
import {withRouter} from 'react-router-dom'
function SectionLeftAlign(props) {
    // console.log(props)
    // const handlerOnClick = () =>{
    //     props.history.push(`category/${props.firstNews.category.toLowerCase()}`)
    // }
    return (
        <section >
                <div className='section__separator _bg' onClick={props.handlerOnClick.bind(this, props.firstNews.category)}><div className='section__separator _fade'><div className='section__catecory section__catecory_left-align'>{props.firstNews.category}</div></div></div>
            <div className='section__block'>
                <div className='section-left__container'>
                    <img className='section-left__img' src={props.firstNews.urlToImage} alt='' title=''></img>
                    <h2><div className='section-left__text'>{props.firstNews.title}</div></h2>
                </div>
                <div className='section-right__block'>
                    <div className='section-right__container'>
                        {props.leftTopTopNews.map((el, i) => {
                            return (
                                <div key={i} className='section-right__top-wrapper'>
                                    <div className='section-right__img-container'><img className='section-right__img' src={el.urlToImage} alt='' ></img></div>
                                    <div className='section-right__top-text-container'>{el.title}</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='section-right__bottom-wrapper'>
                        {props.leftBottomTopNews.map((el, i) => {
                            return (
                                <React.Fragment key={i}>
                                    <hr />
                                    <div ><span className='section-right__bottom-time'>{el.publishedAt.slice(11, 16)}</span> {el.title}</div>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default withRouter (SectionLeftAlign)