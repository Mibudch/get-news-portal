import React from 'react'
import './Style/Section.css'
function SectionRightAlign(props) {
    return (
        <section >
            <div className='section__separator _bg'><div className='section__separator _fade'><div className='section__catecory section__catecory_reverse'>{props.firstNews.category}</div></div></div>
            <div className='section__block block_reverse'>
                <div className='section-left__container'>
                    <img className='section-left__element' src={props.firstNews.urlToImage} alt='' title=''></img>
                    <h2><div className='section-left__element'>{props.firstNews.title}</div></h2>
                </div>
                <div className='section-right__block'>
                    <div className='section-right__container'>
                        {props.leftTopTopNews.map((el, i) => {
                            return (
                                <div key={i} className='section-right__top-wrapper'>
                                    <div className='section-right__top-element section-right__top-element_img'><div className='element_img' style={{ backgroundImage: `url(${el.urlToImage})` }}></div></div>
                                    <div className='section-right__top-element section-right__top-element_text'>{el.title}</div>
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
export default SectionRightAlign