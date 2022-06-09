import React from 'react';
import './App.css';
import Slider from './components/Slider';

function App() {
  return (
    <div className='container'>
      <div className='main-image'></div>
      <div className='sidebar'></div>
      <Slider />
    </div>
  );
}

export default App;
