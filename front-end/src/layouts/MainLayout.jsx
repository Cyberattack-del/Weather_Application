import React from "react";
import { Outlet } from "react-router-dom";
import HamburgerMenu from "../components/HamburgerMenu";
import "../styles/index.css";

const MainLayout = ({ selectedTheme }) => {
  return (
    <div className={`main-layout ${selectedTheme}`}>
      <HamburgerMenu />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;