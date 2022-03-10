import React from "react";

function useLocalStorage(itemName) {
    const localStorageItem = localStorage.getItem(itemName);

    let parsedItem;

    if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify([]));
        parsedItem = [];
    } else {
        parsedItem = JSON.parse(localStorageItem);
    }
    const [item, setItem] = React.useState(parsedItem);
    const saveItem = (newItem) => {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
    }
    return [item, saveItem];
}

export {useLocalStorage};