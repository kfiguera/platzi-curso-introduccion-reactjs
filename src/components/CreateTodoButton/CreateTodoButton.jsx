import React from 'react';
import './CreateTodoButton.css';
import {TodoContext} from "../TodoContext";

function CreateTodoButton() {
    const {
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
    const onClickButton = () => {
        (!openModal)
            ? setOpenModal(true)
            : setOpenModal(false)
    }
    return (
        <button
            className={ "CreateTodoButton "+ (openModal ? 'active' : '' )}
            onClick={onClickButton}
        >+</button>
    )
}

export {CreateTodoButton};