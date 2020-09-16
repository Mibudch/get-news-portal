import React from 'react'
function Finder(props){
    return(
        <h2>
            <input type='text'  onChange={props.onChange}></input>
            <button onClick={props.onClick}>Найти</button>
        </h2>
    )
}
export default Finder