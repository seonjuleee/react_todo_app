import React from 'react';

function Category({onClick}) {
    return <div>
        <button onClick={onClick} value="All">All</button>
        <button onClick={onClick} value="Active">Active</button>
        <button onClick={onClick} value="Completed">Completed</button>
    </div>
}

export default Category;