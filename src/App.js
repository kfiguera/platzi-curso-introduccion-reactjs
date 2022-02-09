import React from 'react';
import {v4 as uuidv4} from 'uuid';
import {TodoCounter, TodoSearch, TodoList, TodoItem, CreateTodoButton} from "./components";
// import logo from './logo.svg';
//import './App.css';

const defaultTodos = [
    {id: uuidv4(), text: 'Cortar cebolla', completed: false},
    {id: uuidv4(), text: 'Tomar el curso', completed: true},
    {id: uuidv4(), text: 'Ir a dormir', completed: false},
];

function App() {
    const [todos, setTodos] = React.useState(defaultTodos);
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
        const todoIndex = todos.findIndex(todo => todo.id == id);
        const newTodos = [...todos];

        (newTodos[todoIndex].completed === false)
            ? newTodos[todoIndex].completed = true
            : newTodos[todoIndex].completed = false;

        setTodos(newTodos);
    };
    const deleteTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id == id);
        const newTodos = [...todos];
        console.log(newTodos);
        newTodos.splice(todoIndex,1);
        console.log(newTodos);
        setTodos(newTodos);
    };

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
                        onDelete={()=>deleteTodo(todo.id)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton/>
        </React.Fragment>
    );
}

export default App;
