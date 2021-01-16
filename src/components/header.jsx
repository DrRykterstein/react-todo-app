import React from "react";

const Header = ({ eyeglasses }) => {
  return (
    <React.Fragment>
      <nav className="header">
        <img className="eyeglasses" src={eyeglasses} alt="eyeglasses"/>  
        <button className="btn login">Login</button>     
      </nav>
    </React.Fragment>
  );
};

export default Header;