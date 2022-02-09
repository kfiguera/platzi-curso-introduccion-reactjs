import React from 'react';
import {TodoCounter, TodoSearch, TodoList, TodoItem, CreateTodoButton} from "../components";

function AppUi(props) {
    const {
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        toggleCompleteTodos,
        deleteTodo
    } = props;
    return (
        <React.Fragment>
            <TodoCounter
                completed={completedTodos}
                total={totalTodos}
            />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
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

            <CreateTodoButton/>
        </React.Fragment>
    );
}

export {AppUi};
