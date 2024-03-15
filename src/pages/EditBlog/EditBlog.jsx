import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectBlogById, updateBlog } from "../../store/blogSlice";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Styles from "./EditBlog.module.css";
import BackArrow from "../../assets/SvgSection/BackArrow.svg";

const EditBlog = () => {
  const { id } = useParams();
  const blog = useSelector((state) => selectBlogById(state, id));
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState(String(blog.title));
  const [category, setCategory] = useState(blog.category);
  const [description, setDescription] = useState(blog.description);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    e.preventDefault();
    setValidated(true);

    if (form.checkValidity() === true) {
      dispatch(updateBlog({ id, title, category, description }));
      navigate(`/blog-details/${id}`);
    }
  };

  return (
    <div className={Styles.Main_Page}>
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
        text={"dark"}
        style={{
          background: "#f4f1f9",
        }}
        className={Styles.Card_Section_Main}
      >
        <Card.Header>
          <h2 style={{ justifyContent: "center", textAlign: "center" }}>
            Edit Blog
          </h2>
        </Card.Header>

        <Card.Body>
          <div className={Styles.Card_Body}>
            <Form
              noValidate
              validated={validated}
              className={Styles.FromSection}
              onSubmit={handleSubmit}
            >
              <Row className={Styles.Row_Section}>
                <Form.Group as={Col} md="10" controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Title"
                    onChange={(e) => setTitle(e.target.value)}
                    style={{ background: "#FFFCEC" }}
                    defaultValue={title}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide title
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className={Styles.Row_Section}>
                <Form.Group as={Col} md="10" controlId="category">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    defaultValue={category}
                    placeholder="Enter category"
                    style={{ background: "#FFFCEC" }}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please provide category
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className={Styles.Row_Section}>
                <Form.Group as={Col} md="10" controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    type="text"
                    style={{ background: "#FFFCEC" }}
                    placeholder="Please provide Description"
                    defaultValue={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide Description
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Button
                style={{
                  background: "#7c8aff",
                  alignSelf: "flex-start",
                  marginLeft: "8%",
                }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EditBlog;
