import React from 'react';
import {Link} from "react-router-dom";
import './menuItem.css';

function MenuItem(props) {
    return (
        <li className='menu-item'>
            <Link to={props.link} className='menu-item__link'>{props.text}</Link>
        </li>
    );
}

export default MenuItem;