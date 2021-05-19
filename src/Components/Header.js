import React from "react";
import "./Header.css";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { LaptopWindows } from "@material-ui/icons";

function Header() {
  return (
    <div className="header-container">
      <h1 onClick={() => window.location.reload(false)} className="header">
        Popular Movies
      </h1>

      <button className="header-button" onClick={() => window.scroll(0, 0)}>
        <ArrowUpwardIcon
          style={{ backgroundColor: "#203666", color: "white" }}
        />
      </button>
    </div>
  );
}

export default Header;
