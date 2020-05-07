import React from 'react';
import MenuItem from './menuItem.js';
import './app.css';

function App() {
  return (

    <nav className='navegacion'>
      <ul className='lista'>
       
    <MenuItem text='Tareas' link='#'></MenuItem>
    <MenuItem text='Nueva Tarea' link='#'></MenuItem>
      
      </ul>


    </nav>
  );
}

export default App;
