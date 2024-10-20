import React from 'react';
import './App.css';
import SideNav from './components/SideNav/SideNav';
import Header from './components/header/Header';

function App() {
  return (
    <div className='app-wrapper'>
      <div className='left-side'>
        <SideNav />
      </div>
      <div className='right-side'>
        <Header />
      </div>
    </div>
  );
}

export default App;
