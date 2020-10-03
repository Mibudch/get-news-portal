import React from 'react'
import './Style/Section.css'
import { withRouter } from 'react-router-dom'
function AllNewsSection(props) {
    // let reverse = ''
    // const { newsCategory } = props
    // newsCategory.map(el => console.log(el))
    // if (props.key % 2 === 0) {
    //     align = 'banner-text_left-align'
    // } 
    // if (props.key % 2 === 1){
    //     align = 'section__category_right-align'
    // }
    // console.log(newsCategory);
    const handlerOnClick = () => {
        props.history.push(`${props.newsCategory.toLowerCase()}`)
        window.scrollTo({ top: 0 })
    }
    return (
        <section >
            <div className='banner__container' onClick={handlerOnClick}><div className='banner__container_fade'><div className={`banner-text ${'banner-text_left-align'}`}>{props.newsCategory.toUpperCase()}</div></div></div>
            <div className='news__block'>
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