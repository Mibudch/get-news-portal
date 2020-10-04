import React from 'react'
import './Style/Section.css'
import { withRouter } from 'react-router-dom'
function AllNewsSection(props) {
    let alignStyle = {}
    if (props.indx % 2 === 0) {
        alignStyle.bannerAlignModify = 'banner-text_left-align'
    } else {
        alignStyle.bannerTextReverse = 'banner-text_reverse'
        alignStyle.bannerAlignModify = 'banner-text_right-align'
        alignStyle.newsBlockReverse ='block_reverse'
    }
    const handlerOnClick = () => {
        props.history.push(`${props.newsCategory.toLowerCase()}`)
        window.scrollTo({ top: 0 })
    }
    return (
        <section >
            <div className={`banner__container ${alignStyle.bannerTextReverse}`} onClick={handlerOnClick}><div className='banner__container_fade'><div className={`banner-text ${alignStyle.bannerAlignModify}`}>{props.newsCategory.toUpperCase()}</div></div></div>
            <div className={`news__block ${alignStyle.newsBlockReverse}`}>
                <div className='main-news__container'>
                    <img className='main-news__img' src={props.mainNews.urlToImage} alt='' title=''></img>
                    <h2><div className='main-news__text'>{props.mainNews.title}</div></h2>
                </div>
                <div className='rest-news__block'>
                    <div className='rest-news__top-container'>
                        {props.topSideNews.map((el, i) => {
                            return (
                                <div key={i} className='rest-news__top-wrapper'>
                                    <div className='rest-news__img-container'><img className='rest-news__img' src={el.urlToImage} alt='' ></img></div>
                                    <div className='rest-news__top-text-container'>{el.title}</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='rest-news__bottom-wrapper'>
                        {props.bottomSideNews.map((el, i) => {
                            return (
                                <React.Fragment key={i}>
                                    <hr />
                                    <div ><span className='news__time'>{el.publishedAt.slice(11, 16)}</span> {el.title}</div>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default withRouter(AllNewsSection)