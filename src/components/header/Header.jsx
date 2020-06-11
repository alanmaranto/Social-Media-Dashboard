import React from "react";
import "./style.css";

const Header = ({ children }) => {
  return (
    <div className="App">
      <header className="header">
        <div className="wrapper">
          <div className="header-grid">
            <div>
              <h1>Social Media Dashboard</h1>
              <p className="header-total">Total Followers 23, 005</p>
            </div>
            {children}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
