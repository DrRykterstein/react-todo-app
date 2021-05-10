import React from "react";

const Header = ({ eyeglasses }) => {
  return (
    <React.Fragment>
      <nav className="header">
        <img className="eyeglasses" src={eyeglasses} alt="eyeglasses"/>      
      </nav>
    </React.Fragment>
  );
};

export default Header;