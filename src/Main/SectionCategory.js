import React from 'react'
import { withRouter } from 'react-router-dom'

function SectionCategory(props) {
    const categoryName = props.match.params.name.charAt(0).toUpperCase() + props.match.params.name.slice(1)
    const currentCategory = () => {
        let arr = []
        for (let elem of props.categoryContent) {
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
            <div className='section__separator _bg'>
                <div className='section__separator _fade'>
                    <div className='section__catecory section__catecory_left-align'>{props.match.params.name.toUpperCase()}</div>
                </div>
            </div>
            {currentCategory().map((el, i) => {
                return (
                    <React.Fragment key={i}>
                        <div className='section-tag__container'>
                            <div className='section-tag__image-wrapper'>
                                <img className='section-tag__image' src={el.urlToImage} alt='' title=''></img>
                            </div>
                            <div className='section-tag__text-wrapper'>
                                <div className='section-tag__title'><h2>{el.title}</h2><span className='section__time section__time_small'>{el.publishedAt.slice(11, 16)}</span></div>
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

export default withRouter(SectionCategory)