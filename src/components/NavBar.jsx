import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function () {
  return (
    <nav>
      <Link to="" className="navIcon home">
        PRODUCTS
      </Link>
      <Link to="" className="navIcon about">
        SERVICES
      </Link>
      <Link to="" className="navIcon works">
        PROJECTS
      </Link>
      <Link to="" className="navIcon getInTouch">
        BLOGS
      </Link>
    </nav>
  );
}
