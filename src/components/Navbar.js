import React from 'react';
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { useEffect, useState } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {

  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();  //find the location in the webpage
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);   //run the useEffect whener the location changes, and set the expand navbar to false


  return (
  <div className="navbar" id ={expandNavbar ? "open" : "close"}>
    <div className="toggleButton">
        <button onClick={() => {
          setExpandNavbar((prev) => !prev);
          
          }}>
            <ReorderIcon/>
            </button>
    </div>

    <div className="links">
        <Link to ="/">Home</Link>
        <Link to ="/projects">Projects</Link>
        <Link to ="/experience">Experience</Link>
        <Link to ="/blogs">Blogs</Link>
   
    </div>
  </div>
    
  );
}

export default Navbar;