import React from 'react';

function TodoList(props) {
    return (
        <React.Fragment>
            <section>
                {props.children}
            </section>
        </React.Fragment>
    )
}

export { TodoList };