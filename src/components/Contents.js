import React, {useState} from 'react';
import TodoList from './TodoList';
import Navigation from './Navigation';

function Contents({todos, onDelete, onToggle}) {
    
    const [navState, setNavState] = useState("All");

    // 카테고리 버튼 클릭 핸들러
    const handleChangeNav = (e) => {
        setNavState(e.target.value);
    }

    return (
        <div>
            <Navigation 
                onClick={handleChangeNav}
            />
            <TodoList 
                todos={todos}
                nav={navState}
                onDelete={onDelete}
                onToggle={onToggle}
            />
        </div>
    )
}

export default Contents;