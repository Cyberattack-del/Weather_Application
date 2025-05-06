// src/components/MainLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import "./../styles/index.css";

const MainLayout = ({ selectedTheme }) => {
  return (
    <div className={`main-layout ${selectedTheme}`}>
      {/* Persistent Hamburger Menu */}
      <HamburgerMenu />

      {/* Main content area for nested routes */}
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;