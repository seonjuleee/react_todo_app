import React, {useState} from 'react';
import styled from 'styled-components'

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
        <h1 className="headerTitle">TODO APP</h1>
        <input className="headerInput" onChange={handleChange} value={text}/>
        <button className="headerAdd" onClick={handleClick}>+</button>
    </div>
}

export default Header;