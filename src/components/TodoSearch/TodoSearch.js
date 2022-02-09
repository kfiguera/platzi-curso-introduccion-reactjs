import React from 'react';
import './TodoSearch.css';

function TodoSearch(props) {
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
    }
    return (

        <input
            className="TodoSearch"
            onChange={onSearchValueChange}
            type="text" placeholder="Cebolla"/>
    )
}

export {TodoSearch};