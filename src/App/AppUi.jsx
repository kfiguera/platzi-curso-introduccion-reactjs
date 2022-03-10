import React from 'react';
import {TodoContext, TodoCounter, TodoSearch, TodoList, TodoItem, CreateTodoButton, Modal} from "../components";


function AppUi() {
    const {
        searchedTodos,
        toggleCompleteTodos,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
            <TodoList>
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        onToggleComplete={() => toggleCompleteTodos(todo.id)}
                        onDelete={() => deleteTodo(todo.id)}
                    />
                ))}
            </TodoList>
            {openModal && (
                <Modal>
                    <p>Prueba</p>
                </Modal>
            )}

            <CreateTodoButton />
        </React.Fragment>
    );
}

export {AppUi};
