import React from 'react';
import TodoItem from './TodoItem'

function TodoList({todos, nav, onDelete, onToggle}) {

    let navCompleted;

    if(nav === "Active") {
        navCompleted = false;
    } else if(nav === "Completed") {
        navCompleted = true;
    }

    console.log(nav);
    return <div>
        {(todos.filter(todoo => (
            nav === "All" ? true : todoo.completed === navCompleted
            ))).map(todo => (
            <TodoItem
                todo={todo} 
                key={todo.id} 
                onDelete={onDelete} 
                onToggle={onToggle}
            />
        ))}
    </div>
}

export default TodoList;