import React from 'react';
import {TodoCounter, TodoSearch, TodoList, TodoItem, CreateTodoButton} from "./components";
// import logo from './logo.svg';
//import './App.css';

const defaultTodos = [
    {id: 1, text: 'Cortar cebolla', completed: false},
    {id: 2, text: 'Tomar el curso', completed: true},
    {id: 3, text: 'Ir a dormir', completed: false},
];

function App() {
    const [todos, setTodos] = React.useState(defaultTodos);
    const [searchValue, setSearchValue] = React.useState('');
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    let searchedTodos = [];
    if(searchValue.length >= 1){
        searchedTodos = todos.filter(todo =>{
            let todoText = todo.text.toLowerCase();
            let searchText = searchValue.toLowerCase()
            return todoText.includes(searchText);
        });
    }else{
        searchedTodos = todos;
    }
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
                        completed={todo.completed}/>
                ))}
            </TodoList>

            <CreateTodoButton/>
        </React.Fragment>
    );
}

export default App;
