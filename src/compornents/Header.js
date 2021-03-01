import React from "react";
import "./Header.css";
import logo from "../logo.svg";

const Header = () => {
  return (
    <div className="Header">
      <a href="http://google.com/" target="_blank">
        <img className="logo_image" src={logo} alt="logo" />
      </a>
      <label className="title-text"><b>デモアプリ(β版)</b></label>
    </div>
  );
};

export default Header;
