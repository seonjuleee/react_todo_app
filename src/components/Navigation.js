import React from 'react';

function Category({nav, displayDeleteToggle, onClick, onToggleDelete}) {
    return <div className="nav">
        <button className={nav === "All" ? "valid" : "invalid"} onClick={onClick} value="All">All</button>
        <button className={nav === "Active" ? "valid" : "invalid"} onClick={onClick} value="Active">Active</button>
        <button className={nav === "Completed" ? "valid" : "invalid"} onClick={onClick} value="Completed">Completed</button>
        <button className={"nav-btn-" + (displayDeleteToggle ? "delete" : "close")} onClick={onToggleDelete}>{displayDeleteToggle ? "Delete" : "Close"}</button>
    </div>
}

export default Category;