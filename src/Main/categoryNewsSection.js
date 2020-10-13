import React from 'react'
import './style/section.css'
import { withRouter } from 'react-router-dom'
function CategoryNewsSection(props) {
    const categoryName = props.match.params.name.charAt(0).toUpperCase() + props.match.params.name.slice(1)
    const currentNewsCategory = () => {
        let arr = []
        for (let elem of props.categoryNewsContent) {
            for (let el of elem) {
                if (el.category === categoryName) {
                    arr.push(el)
                }
            }
        }
        return arr
    }
    return (
        <section>
            <div className='banner__container'>
                <div className='banner__container_fade'>
                    <div className='banner-text banner-text_left-align'>{props.match.params.name.toUpperCase()}</div>
                </div>
            </div>
            {currentNewsCategory().map((el, i) => {
                return (
                    <React.Fragment key={i}>
                        <div className='section-tag__container' onClick={props.handlerSingleNewsOnclick.bind(this, el)}>
                            <div className='section-tag__image-wrapper'>
                                <img className='section-tag__image' src={el.urlToImage} alt='' title=''></img>
                            </div>
                            <div className='section-tag__text-wrapper'>
                                <div className='section-tag__title'><h2>{el.title}</h2><span className='news__time news__time_small'>{el.publishedAt.slice(11, 16)}</span></div>
                                <hr />
                                <div className='section-tag__description'><h5>{el.description}</h5></div>
                            </div>
                        </div>
                    </React.Fragment>
                )
            })}
        </section>
    )
}
export default withRouter(CategoryNewsSection)