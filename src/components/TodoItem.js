import React from 'react';

function TodoItem({todo: {id, text, completed}, onDelete, onToggle}) {
    return <div>
            <input 
                type="checkbox" 
                onChange={() => onToggle(id)} 
                checked={completed} 
            />
            <span>{text} </span>
            <button onClick={() => onDelete(id)}>X</button>
        </div>
}

export default TodoItem;