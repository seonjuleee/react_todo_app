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

    return <div className="todoHeader">
        <h1 className="headerTitle">TODOS</h1>
        <div className="headerCreate">
            <input className="headerInput" onChange={handleChange} value={text}/>
            <button className="headerAdd" onClick={handleClick}>+</button>
        </div>
    </div>
}

export default Header;