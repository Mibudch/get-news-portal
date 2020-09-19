import React from 'react'
function Finder(props){
    return(
        <h2>
            <input type='text' onChange={props.getSearcValue}></input>
            <button onClick={props.onclickSearch}>Найти</button>
        </h2>
    )
}
export default Finder