import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaHome } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useScrollTrigger } from "@mui/material";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      closeSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className={`navbar ${trigger ? "elevated" : ""}`}>
      <div className="navbar-container">
        <div className="menu-icon" onClick={toggleSidebar}>
          {isSidebarOpen ? <RiCloseLine /> : <FaBars />}
        </div>
        <Link to="/" className="home-link" onClick={closeSidebar}>
        </Link>
        <h1 className="navbar-title">Sorting Visualizer</h1>
      </div>
      <div
        className={`sidebar ${isSidebarOpen ? "open" : ""}`}
        ref={sidebarRef}
      >
        <div className="close-button" onClick={closeSidebar}>
          <RiCloseLine />
        </div>
        <Link to="/" className="home-link" onClick={closeSidebar}>
          <FaHome className="home-icon" />
          Home
        </Link>
        <div className="sidebar-section">
          <h2>Logarithmic</h2>
          <Link to="/merge-sort" onClick={closeSidebar}>
            Merge Sort
          </Link>
          <Link to="/quick-sort" onClick={closeSidebar}>
            QuickSort.jsx
          </Link>
          <Link to="/heap-sort" onClick={closeSidebar}>
            HeapSort.jsx
          </Link>
        </div>
        <div className="sidebar-section">
          <h2>Quadratic</h2>
          <Link to="/bubble-sort" onClick={closeSidebar}>
            Bubble Sort
          </Link>
          <Link to="/insertion-sort" onClick={closeSidebar}>
            Insertion Sort
          </Link>
          <Link to="/selection-sort" onClick={closeSidebar}>
            SelectionSort.jsx
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
