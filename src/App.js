import React, { useState, useEffect } from 'react';
import './App.css';
import SideNav from './components/SideNav/SideNav';
import Header from './components/header/Header';
import UserInfoButton from './components/subcomponents/UserInfoButton';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='app-wrapper'>
      <Header isMobile={isMobile} toggleMobileMenu={toggleMobileMenu} />
      <div className='main-content'>
        {isMobile && isMobileMenuOpen && (
          <div className='mobile-menu'>
            <UserInfoButton />
            <SideNav />
          </div>
        )}
        {!isMobile && (
          <div className='left-side'>
            <SideNav />
          </div>
        )}
        <div className='right-side'>
          <h2>Main Content</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
