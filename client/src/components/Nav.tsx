import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./Nav.css";

export default function Navbar() {
  return (
    <>
      <div className="introduction">
        <h1>About</h1>
      </div>
      <Outlet></Outlet>
    </>
  );
}
