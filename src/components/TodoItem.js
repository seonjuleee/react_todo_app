import React from 'react';

function TodoItem({todo: {id, text, completed}, displayDeleteToggle, onDelete, onToggle}) {

    return <div className="list-item">
            <input 
                id="item-cb"
                className={(displayDeleteToggle ? "show" : "hide") + " input"}
                type="checkbox" 
                onChange={() => onToggle(id)} 
                checked={completed} 
            />
            <span>{text} </span>
            <button className={(displayDeleteToggle ? "hide" : "show") + " button"} onClick={() => onDelete(id)}>X</button>
        </div>
}

export default TodoItem;