import React from 'react';
import {TodoProvider} from "../components/TodoContext";
import {AppUi} from "./AppUi";

function App() {

    return (
        <TodoProvider>
            <AppUi />
        </TodoProvider>
    );
}

export default App;
