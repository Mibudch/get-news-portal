import React from 'react'
import SectionLeftAlign from './SectionLeftAlign.js'
import SectionRightAlign from './SectionRightAlign.js'
import './Style/Section.css'

function Main(props) {
// console.log(props)
    return (
        <main>
            {props.mainPageContent.map((elem, i) => {
                return (
                    (i % 2 === 0) ?
                        < SectionLeftAlign
                            key={i}
                            firstNews={elem.find(el => el)}
                            leftTopTopNews={elem.slice(1, 5)}
                            leftBottomTopNews={elem.slice(5, 10)}
                            handlerOnClick={props.handlerOnClick}
                        /> :
                        < SectionRightAlign
                            key={i}
                            firstNews={elem.find(el => el)}
                            leftTopTopNews={elem.slice(1, 5)}
                            leftBottomTopNews={elem.slice(5, 10)}
                        />
                )
            })}
        </main>
    )
}
export default Main