import React from 'react';
import './App.css';
import SidebarItem from './components/SidebarItem';
import Slider from './components/Slider';

function App() {
  return (
    <div className='container'>
      <div className='main-image' />
      <div className='sidebar'>
        <SidebarItem />
        <SidebarItem />
      </div>
      <Slider />
    </div>
  );
}

export default App;
