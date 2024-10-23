import React, { useState, useEffect } from 'react';
import './App.css';
import SideNav from './components/SideNav/SideNav';
import Header from './components/header/Header';


function App() {
  //State for if we're in mobile mode or not. Set to false initially.
  const [isMobile, setIsMobile] = useState(false);
  //State for if the mobile menu is open. Set to false initially.
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  //Handler to check if the window length is mobile size. Updates isMobile piece of state.
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  //Mobile Menu Toggle Function. Updates Mobile Menu piece of state.
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  //Running Resize handler. Listens for Resize handler trigger. Removes it upon handling.
  useEffect(() => {
    handleResize(); //Call handleResize once to determine screen size
    window.addEventListener('resize', handleResize); //Every time window is resized, we run handlResize to see where it's at.
    return () => window.removeEventListener('resize', handleResize); //Clean-up function. When component unmounts. Prevents memory leaking. Removes Event Listener.
  }, []);

  return (
    <div className='app-wrapper'>
      {/*isMobile prop tells Header whether the current view is mobile or not */}
      {/*toggleMobileMenu prop is a function that toggles mobile menu state*/}
      <Header isMobile={isMobile} toggleMobileMenu={toggleMobileMenu} />
      <div className='main-content'>
        {/*If both of these states are true, then render SideNav within mobile-menu */}
        {isMobile && isMobileMenuOpen && (
          <div className='mobile-menu'>
            <SideNav />
          </div>
        )}
        {/*If isMobile is false, then render the Sidenav in desktop view */}
        {!isMobile && (
          <div className='left-side'>
            <SideNav />
          </div>
        )}
        <div className='right-side'>
          {/* Content goes here */}
          <h2>Main Content</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
