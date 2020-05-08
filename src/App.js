import React from 'react';
import { BrowserRouter  } from 'react-router-dom';
import { Content } from './content';
import {Menu} from './menu';
import './app.css';

function App() {
  return (
    <BrowserRouter >
      <div className='app'>
      <Menu/>
      <Content />
      </div>
    </BrowserRouter >
  );
}

export default App;
