import React, { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectBlogById, deleteBlog } from "../../store/blogSlice";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { LikesContext } from "../../context/like-context";
import Styles from "./BlogDeatails.module.css";
import BackArrow from "../../assets/SvgSection/BackArrow.svg";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdDelete, MdModeEdit } from "react-icons/md";

const BlogDetails = () => {
  const { id } = useParams();

  console.log(id);
  const blogUnit = useSelector((state) => selectBlogById(state, id));
  console.log(blogUnit);
  const blogs = useSelector((state) => state.blogs.blogs);
  console.log(blogs);

  const { likes, toggleLike } = useContext(LikesContext);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteBlog(id));
    navigate("/");
  };

  const handleLikeClick = () => {
    toggleLike(id);
  };

  const likeButton = (
    <Button bg="light" variant="danger" onClick={handleLikeClick}>
      {likes[id] ? (
        <>
          {" "}
          <FaHeart style={{ width: "2rem", height: "2rem" }} />
        </>
      ) : (
        <>
          {" "}
          <FaRegHeart style={{ width: "2rem", height: "2rem" }} />
        </>
      )}
    </Button>
  );
  const handleEdit = (id) => {
    navigate(`/edit-blog/${id}`);
  };

  return (
    <div className={Styles.BlogDetails_Main_Page}>
      <p className={Styles.Back_Btn}>
        <img
          src={BackArrow}
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
          alt="Back button"
        />
      </p>

      <Card
        border="primary"
        key={blogUnit.id}
        text={"dark"}
        className={Styles.Card_Main}
        style={{
          background: "#fff9ec",
        }}
      >
        <Card.Header className={Styles.Card_Header_Section}>
          {/* 

          */}
          <p className={Styles.Category_Section}>{blogUnit.category}</p>
        </Card.Header>

        <Card.Body className={Styles.Card_Body_Main}>
          <Card.Title>
            <div>
              <div className={Styles.Blog_Title}>{blogUnit.title}</div>
            </div>
          </Card.Title>
          <Card.Text>{blogUnit.description}</Card.Text>

          <div className={Styles.Bottom_Section}>
            <div>
              {likeButton}

              <Button
                type="button"
                bg="dark"
                variant="info"
                onClick={() => handleEdit(blogUnit.id)}
              >
                <MdModeEdit style={{ width: "2rem", height: "2rem" }} />
              </Button>
            </div>

            <Button
              type="button"
              bg="light"
              variant="warning"
              onClick={() => handleDelete(blogUnit.id)}
            >
              <MdDelete style={{ width: "2rem", height: "2rem" }} />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BlogDetails;
