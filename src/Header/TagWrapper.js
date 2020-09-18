import React from 'react'
import './TagWrapper.css'
function TagWrapper(props) {
    return (
        <li>
            <button value={props.category} onClick={props.handlerOnclickTag} className='tagWrapper__element'>{props.tagName}</button>
        </li>
    )
}
export default TagWrapper