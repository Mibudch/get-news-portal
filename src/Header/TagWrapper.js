import React from 'react'
import './TagWrapper.css'
function TagWrapper(props) {
    console.log(props.tagName);
    return (
        <li className='tagWrapper__element'>{props.tagName}</li>
    )
}
export default TagWrapper