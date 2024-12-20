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
  const [currentPage, setCurrentPage] = useState("modules");

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
            <SideNav setCurrentPage={setCurrentPage} />
          </div>
        )}
        {!isMobile && (
          <div className="left-side">
            <SideNav setCurrentPage={setCurrentPage} />
          </div>
        )}
        <div className="right-side">
          {currentPage === "modules" && <MyCurrentModules />}
          {currentPage === "workshops" && <MyWorkshops />}
        </div>
      </div>
    </div>
  );
}

export default App;
