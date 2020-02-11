import React from 'react';

const AppHeader = ({todo, done}) => {
    return (
        <header>
            <h1 className="text-center">My Todo List</h1>
            <span>To Do: <b>{todo}</b> </span><span>Done: <b>{done}</b></span>
        </header>
    );
}

export default AppHeader;