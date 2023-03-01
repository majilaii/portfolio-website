import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./Nav.css";

export default function Navbar() {
  let activeStyle = {
    textDecoration: "underline",
    color: "white",
    transition: "0.5s",
  };

  let notActive = {
    textDecoration: "none",
    color: "grey",
    transition: "0.5s",
  };
  return (
    <>
      <div className="introduction">
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : notActive)}
        >
          About
        </NavLink>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : notActive)}
        >
          Work
        </NavLink>
      </div>
      <Outlet></Outlet>
    </>
  );
}
