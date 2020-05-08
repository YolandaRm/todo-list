import React from 'react';
import './menuItem.css';

function MenuItem(props) {
    return (
        <li className='menu-item'>
            <a href={props.link} className='menu-item__link'>{props.text}</a>
        </li>
    );
}

export default MenuItem;