import React from "react";
import {useLocalStorage} from "../../hooks/useLocalStorage";


const TodoContext = React.createContext();

function TodoProvider(props) {
    const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
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
    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
        });
        saveTodos(newTodos);
    };
    return (
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            toggleCompleteTodos,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};