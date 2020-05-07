import React from 'react';
import './menuItem.css';

function MenuItem(props){
return(
<li className='menuItem'>
 <a href={props.link} className='menuLink'>{props.text}</a>
</li>
)
}

export default MenuItem;