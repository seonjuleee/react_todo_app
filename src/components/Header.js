import React, {useState} from 'react';
import './Header.css'

// input
function Header({onChange}) {
    const [text, setText] = useState("");

    const handleChange = e => {
        setText(e.target.value);
    }

    const handleClick = () => {
        onChange(text);
        setText("");
    }

    return <div className="header">
        <h1 className="title">TODOS</h1>
        <div className="create">
            <input className="create-input" onChange={handleChange} value={text}/>
            <button className="create-btn-add" onClick={handleClick}>+</button>
        </div>
    </div>
}

export default Header;