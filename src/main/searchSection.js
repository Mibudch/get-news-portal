import React from 'react'
import './style/searchSection.css'

function SearchSection(props) {
    // console.log(props.searchResult)
    return props.searchResult && (
        <section>
            {props.searchResult.map((el, i) => {
                return (
                    <React.Fragment key={i}>
                        <div className='news__container'>
                            <h2 className='news__tittle'>{el.title}</h2>
                            <h3 className='news__description'>{el.description}</h3>
                            <div className='news__url'>{el.url}</div>
                            <h4 className='news__date'>{el.publishedAt.slice(0, 10)} {el.publishedAt.slice(11, 16)}</h4>
                        </div>
                        <hr />
                    </React.Fragment>
                )
            })}
        </section>
    )
}
export default SearchSection