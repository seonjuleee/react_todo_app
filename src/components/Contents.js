import React, {useState} from 'react';
import TodoList from './TodoList';
import Navigation from './Navigation';
import './Contents.css';

function Contents({todos, onDelete, onToggle}) {
    
    const [navState, setNavState] = useState("All");
    const [displayDeleteToggle, setDisplayDeleteToggle] = useState("false");

    // 카테고리 버튼 클릭 핸들러
    const handleChangeNav = (e) => {
        setNavState(e.target.value);
    }

    // 삭제 버튼 토글
    const handleToggleDelete = (tog) => {
        setDisplayDeleteToggle(!displayDeleteToggle);
    }

    return (
        <div className="contents">
            <Navigation 
                nav={navState}
                displayDeleteToggle={displayDeleteToggle}
                onClick={handleChangeNav}
                onToggleDelete={handleToggleDelete}
            />
            <TodoList 
                todos={todos}
                nav={navState}
                displayDeleteToggle={displayDeleteToggle}
                onDelete={onDelete}
                onToggle={onToggle}
            />
        </div>
    )
}

export default Contents;