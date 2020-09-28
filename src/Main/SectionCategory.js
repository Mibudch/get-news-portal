import React from 'react'
import { withRouter } from 'react-router-dom'
function SectionCategory(props) {
    console.log(props);
    return (
        <section>
            {props.content.map((el, i) => {
                return (
                    <React.Fragment key={i}>
                        <div className='section-category__container'>
                            <div className='section-category__image-wrapper'>
                                <img src={el.urlToImage} alt='' title=''></img>
                            </div>
                            <div className='section-category__title-wrapper'>
                                <div className='section-category__title'>{el.title}</div>
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