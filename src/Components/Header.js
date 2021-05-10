import React, { useState } from "react";

function Header() {
  return (
    <h1 onClick={() => window.scroll(0, 0)} className="header">
      Popular Movies
    </h1>
  );
}

export default Header;
