import React, { useState, useEffect } from "react";
import "./App.css";
import SideNav from "./components/SideNav/SideNav";
import Header from "./components/Header/Header";
import MyCurrentModules from "./components/MyCurrentModules/MyCurrentModules";
import UserInfoButton from "./components/SubComponents/UserInfoButton";
import MyWorkshops from "./components/MyWorkshops/MyWorkshops";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMyModulesOpen, setIsMyModulesOpen] = useState(true);
  const [isMyWorkshopsOpen, setIsMyWorkshopsOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="app-wrapper">
      <Header isMobile={isMobile} toggleMobileMenu={toggleMobileMenu} />
      <div className="main-content">
        {isMobile && isMobileMenuOpen && (
          <div className="mobile-menu">
            <UserInfoButton />
            <SideNav />
          </div>
        )}
        {!isMobile && (
          <div className="left-side">
            <SideNav
              setIsMyModulesOpen={setIsMyModulesOpen}
              setIsMyWorkshopsOpen={setIsMyWorkshopsOpen}
            />
          </div>
        )}
        <div className="right-side">
          {isMyModulesOpen && <MyCurrentModules />}
          {isMyWorkshopsOpen && <MyWorkshops />}
        </div>
      </div>
    </div>
  );
}

export default App;
