import React from 'react';
import './App.css';
import SideNav from './components/SideNav/SideNav';

function App() {
  return (
    <div className='app-wrapper'>
      <div className='left-side'>
        <SideNav />
      </div>
      <div className='right-side'>
    World
      </div>
    </div>
  );
}

export default App;
