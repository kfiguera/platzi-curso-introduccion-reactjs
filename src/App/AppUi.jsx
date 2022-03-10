import React from 'react';
import {TodoContext, TodoCounter, TodoSearch, TodoList, TodoItem, CreateTodoButton} from "../components";


function AppUi() {
    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
            <TodoContext.Consumer>
                {({searchedTodos, toggleCompleteTodos, deleteTodo}) => (
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
                )}

            </TodoContext.Consumer>
            <CreateTodoButton/>
        </React.Fragment>
    );
}

export {AppUi};
