import React from 'react'
import './style/section.css'
import { withRouter } from 'react-router-dom'
function AllNewsSection(props) {
    console.log(props.allNewsContent);
    // props.allNewsContent.map((elem, ind) => {
    //     return console.log(elem[ind].category)
    // })
    let alignStyle = {
        bannerLeftAlign: 'banner-text_left-align',
        bannerRightAlign: 'banner-text_right-align',
        bannerTextReverse: 'banner-text_reverse',
        newsBlockReverse: 'block_reverse'
    }
    return (
        <section >
            {props.allNewsContent.map((elem, ind) => {
                return (
                    <React.Fragment key={ind}>
                        <div className= 'banner__container' onClick={props.handlerCaregoryOnClick.bind(this, elem[ind].category)}><div className={`banner__container_fade ${(ind % 2 === 0 ? alignStyle.bannerLeftAlign : alignStyle.bannerRightAlign)}`}><div className={`banner-text ${(ind % 2 !== 0 && alignStyle.bannerTextReverse)}`}>{elem[ind].category.toUpperCase()}</div></div></div>
                        <div className={`news__block ${(ind % 2 !== 0 && alignStyle.newsBlockReverse)}`}>
                            <div className='main-news__container' onClick={props.handlerSingleNewsOnclick.bind(this, elem[0])}>
                                <img className='main-news__img' src={elem[0].urlToImage} alt='' title=''></img>
                                <h2><div className='main-news__text'>{elem[0].title}</div></h2>
                            </div>
                            <div className='rest-news__block'>
                                <div className='rest-news__top-container'>
                                    {elem.slice(1, 5).map((el, i) => {
                                        return (
                                            <div key={i} onClick={props.handlerSingleNewsOnclick.bind(this, el)} className='rest-news__top-wrapper'>
                                                <div className='rest-news__img-container'><img className='rest-news__img' src={el.urlToImage} alt='' ></img></div>
                                                <div className='rest-news__top-text-container'>{el.title}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className='rest-news__bottom-wrapper'>
                                    {elem.slice(5, 10).map((el, i) => {
                                        return (
                                            <React.Fragment key={i}>
                                                <hr />
                                                <div onClick={props.handlerSingleNewsOnclick.bind(this, el)}><span className='news__time'>{el.publishedAt.slice(11, 16)}</span> {el.title}</div>
                                            </React.Fragment>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                )

            })}
        </section>
    )
}
export default withRouter(AllNewsSection)