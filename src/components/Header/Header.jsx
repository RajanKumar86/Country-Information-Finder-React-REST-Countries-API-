import React from 'react'
import { FaMoon } from "react-icons/fa";
import './Header.css'

const Header = () => {
  return (
    <div className = "header-container">
        <div className="header-content">
            <h2 className="title" > Where in the World ??</h2>
            <p>  <FaMoon /> &nbsp; &nbsp; Dark Mode</p>
        </div>   
    </div>
  )
}

export default Header
