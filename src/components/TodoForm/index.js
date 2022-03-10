import React from 'react';
import {TodoContext} from "../TodoContext";
import './TodoForm.css';

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const {addTodo, setOpenModal} = React.useContext(TodoContext);

    function onChange(event) {
        setNewTodoValue(event.target.value)
    }

    function onCancel() {
        setOpenModal(false);
    }

    function onSubmit(event) {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form>
            <label>Escribe tu nuevo To Do</label>
            <textarea
                placeholder="Escribe una nueva tarea"
                      value={newTodoValue}
                      onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    className="TodoForm-button TodoForm-button-cancel"
                    type="button"
                    onClick={onCancel}>
                    Cancelar
                </button>
                <button
                    className="TodoForm-button TodoForm-button-add"
                    type="submit"
                    onClick={onSubmit}>
                    Añadir
                </button>
            </div>
        </form>
    )
}

export {TodoForm};