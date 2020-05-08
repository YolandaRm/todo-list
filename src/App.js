import React from 'react';
import MenuItem from './menuItem.js';
import './app.css';

function App() {
  return (
    <nav className='app__navegacion'>
      <ul className='app__navegacion__lista'>
        <MenuItem text='Tareas' link='#'></MenuItem>
        <MenuItem text='Nueva Tarea' link='#'></MenuItem>
      </ul>
    </nav>
  );
}

export default App;
