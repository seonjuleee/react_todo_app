import React from 'react';

function Footer({onCategory}) {
    return <div className="todoFooter">
        <span className="footerItemAmount"></span>
        <button className="footerAll" />
        <button className="footerActive" onClick={() => onCategory(false)}>Active</button>
        <button className="footerCompleted" onClick={() => onCategory(true)}>Completed</button>
    </div>
}

export default Footer;