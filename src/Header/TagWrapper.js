import React from 'react'
import './TagWrapper.css'
function TagWrapper(props) {
    return (
        <li onClick={props.onClick} className='tagWrapper__element'>{props.tagName}</li>
    )
}
export default TagWrapper