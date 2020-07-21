import React from 'react';
import TodoItem from './TodoItem';
function TodoList({todos, nav, displayDeleteToggle, onDelete, onToggle, styledList}) {

    let navCompleted;

    if(nav === "Active") {
        navCompleted = false;
    } else if(nav === "Completed") {
        navCompleted = true;
    }

    return <div className="list">
        {(todos.filter(todoo => (
            nav === "All" ? true : todoo.completed === navCompleted
            ))).map(todo => (
            <TodoItem
                todo={todo} 
                key={todo.id} 
                displayDeleteToggle={displayDeleteToggle}
                onDelete={onDelete} 
                onToggle={onToggle}
            />
        ))}
    </div>
}

export default TodoList;