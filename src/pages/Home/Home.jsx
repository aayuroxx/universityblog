import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Styles from "./Home.module.css";

const Home = () => {
  const blogs = useSelector((state) => state.blogs.blogs);
  const colors = ["Primary", "Secondary", "Danger", "Warning", "Info"];
  const navigate = useNavigate();
  return (
    <div className={Styles.Main_Home_Page}>
      <header className={Styles.Header_section}>University Blogs</header>

      <div className={Styles.Card_Section}>
        {blogs.map((ele, i) => {
          return (
            <div
              key={ele.id}
              onClick={() => navigate(`/blog-details/${ele.id}`)}
            >
              <header> {ele.title}</header>

              <p>{ele.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
