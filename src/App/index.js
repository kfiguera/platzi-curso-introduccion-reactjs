import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import {AppUi} from "./AppUi";
// import {v4 as uuidv4} from 'uuid';
// import logo from './logo.svg';
//import './App.css';


function App() {
    const [todos, saveTodos] = useLocalStorage('TODOS_V1',[]);

    const [searchValue, setSearchValue] = React.useState('');
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    let searchedTodos = [];
    if (searchValue.length >= 1) {
        searchedTodos = todos.filter(todo => {
            let todoText = todo.text.toLowerCase();
            let searchText = searchValue.toLowerCase()
            return todoText.includes(searchText);
        });
    } else {
        searchedTodos = todos;
    }
    const toggleCompleteTodos = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];

        (newTodos[todoIndex].completed === false)
            ? newTodos[todoIndex].completed = true
            : newTodos[todoIndex].completed = false;

        saveTodos(newTodos);
    };
    const deleteTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        console.log(newTodos);
        newTodos.splice(todoIndex, 1);
        console.log(newTodos);
        saveTodos(newTodos);
    };

    return (
        <AppUi
            completedTodos={completedTodos}
            totalTodos={totalTodos}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            searchedTodos={searchedTodos}
            toggleCompleteTodos={toggleCompleteTodos}
            deleteTodo={deleteTodo}
        />
    );
}

export default App;
