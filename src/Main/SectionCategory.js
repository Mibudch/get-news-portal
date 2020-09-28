import React from 'react'
import { withRouter } from 'react-router-dom'
function SectionCategory(props) {
    console.log(props);
    return (
        <section>
            <div className='section__separator _bg'>
                <div className='section__separator _fade'>
                    <div className='section__catecory section__catecory_left-align'>{props.match.params.name.toUpperCase()}</div>
                </div>
            </div>
            {props.content.map((el, i) => {
                return (
                    <React.Fragment key={i}>
                        <div className='section-tag__container'>
                            <div className='section-tag__image-wrapper'>
                                <img className='section-tag__image' src={el.urlToImage} alt='' title=''></img>
                            </div>
                            <div className='section-tag__text-wrapper'>
                                <div className='section-tag__title'>{el.title}</div>
                                <hr/>
                                <div className='section-tag__description'>{el.description}</div>
                            </div>
                        </div>
                        <hr />
                    </React.Fragment>
                )
            })}
        </section>
    )
}

export default withRouter(SectionCategory)