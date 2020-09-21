import React from 'react'
import SectionTopNews from './SectionTopNews.js'
import SectionBusinessNews from './SectionBusinessNews'
import './Section.css'
// import { withRouter } from 'react-router-dom'

function Main(props) {
    return (
        <main>
            <section className='section'>
                <SectionTopNews props={props.topNews} />
            </section>
            <hr />
            <section>
                {props.businessNews.map((el, i) => {
                    return (
                        <SectionBusinessNews
                            key={i}
                            businessNewsImage={el.urlToImage}
                            businessNewsTitle={el.title}
                        />
                    )
                })}
            </section>
        </main>
    )
}
export default Main

// onClick={()=>props.history.push('/main' + props.newsTitle.toLowerCase())}