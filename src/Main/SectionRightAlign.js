import React from 'react'
import './Style/Section.css'
import { withRouter } from 'react-router-dom'
function SectionRightAlign(props) {
    return (
        <section >
            <div className='section__separator _bg separator-text_reverse' onClick={()=>props.history.push(`category/${props.firstNews.category.toLowerCase()}`)}><div className='section__separator _fade'><div className='section__catecory section__category_right-align'>{props.firstNews.category.toUpperCase()}</div></div></div>
            <div className='section__block block_reverse'>
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
                                    <div ><span className='section__time'>{el.publishedAt.slice(11, 16)}</span> {el.title}</div>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default withRouter(SectionRightAlign)