import React from 'react'
import './TagWrapper.css'
import { tagArray } from './TagArray.js'
function TagWrapper(props) {
    return (
        <nav className='nav__container'>
            {tagArray.map((el, i) => {
                return (
                    <li key={i}>
                        <button value={el.category} onClick={props.onclickTag} className='nav__element'>{el.tagName}</button>
                    </li>
                )
            })}

        </nav>
    )
}
export default TagWrapper