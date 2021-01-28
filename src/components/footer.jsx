import React from "react";

const Footer = ({ backgroundImageInfo }) => {
  let { name, location, description } = backgroundImageInfo;

  return (
    <footer className="footer">
      <div className="image-info-container">
        <p className="image-info image-location">
          {location != null ? location : description.slice(0, 1).toUpperCase() + description.slice(1)}
        </p>
        <p className="image-info image-name">{name} / Unsplash</p>
      </div>
    </footer>
  );
}

export default Footer;