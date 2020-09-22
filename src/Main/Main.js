import React from 'react'
import SectionTopNews from './SectionTopNews.js'
import SectionBusinessNews from './SectionBusinessNews'
import './Section.css'
// import { withRouter } from 'react-router-dom'

function Main(props) {

    return (
        <main>
            <section className='section'>
                <SectionTopNews
                    firstNews={props.topNews.find(el => el)}
                    leftTopTopNews={props.topNews.slice(1, 5)}
                    leftBottomTopNews={props.topNews.slice(5, 10)}
                />
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