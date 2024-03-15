import React from "react";
import {useNavigate } from "react-router-dom";
import Styles from "./Header.module.css";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <nav className={Styles.Main_NavBar}>
        <p className={Styles.Home_Button} onClick={() => navigate("/")}>
          Home
        </p>
        <p
          className={Styles.New_Blog_btn}
          onClick={() => navigate("/add-blog")}
        >
          Add New Blog
        </p>
      </nav>
    </>
  );
}

export default Header;
