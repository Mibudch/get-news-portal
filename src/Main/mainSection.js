import React from 'react'
import './Style/Section.css'
import { withRouter } from 'react-router-dom'
function MainSection(props) {
    // console.log(props.mainNews);
    const handlerOnClick = () => {
        props.history.push(`category/${props.firstNews.category.toLowerCase()}`)
        window.scrollTo({ top: 0 })
    }
    return (
        <section >
            <div className='section__separator _bg' onClick={handlerOnClick}><div className='section__separator _fade'><div className='section__catecory section__catecory_left-align'>{props.newsCategory}</div></div></div>
            <div className='section__block'>
                <div className='section-left__container'>
                    <img className='section-left__img' src={props.mainNews.urlToImage} alt='' title=''></img>
                    <h2><div className='section-left__text'>{props.mainNews.title}</div></h2>
                </div>
                <div className='section-right__block'>
                    <div className='section-right__container'>
                        {props.topSideNews.map((el, i) => {
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
export default withRouter(MainSection)