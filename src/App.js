import React from 'react';
import {TodoCounter, TodoSearch, TodoList, TodoItem, CreateTodoButton} from "./components";
// import logo from './logo.svg';

//import './App.css';
const todos = [
    {id: 1, text: 'Cortar cebolla', completed: false},
    {id: 2, text: 'Tomar el curso', completed: false},
    {id: 3, text: 'Ir a dormir', completed: false},
];

function App() {
    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
            <TodoList>
                {todos.map(todo => (
                    <TodoItem key={todo.id} text={todo.text}/>
                ))}
            </TodoList>

            <CreateTodoButton/>
        </React.Fragment>
    );
}

export default App;
