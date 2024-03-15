import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { addBlog } from "../../store/blogSlice";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import BackArrow from "../../assets/SvgSection/BackArrow.svg";
import Styles from "./AddBlog.module.css";

const AddPage = () => {
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate("/");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    console.log("form is here");
    console.log(form.checkValidity());

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);

    if (form.checkValidity() === true) {
      const id = uuid();
      const title = event.target.title.value;
      const category = event.target.category.value;
      const description = event.target.description.value;

      dispatch(addBlog({ id, title, category, description }));
      navigate("/");
    }
  };

  return (
    <div className={Styles.Main_Page}>
      {/* back button  */}
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
          <h2 style={{textAlign:'center'}}>
            Add New Blog
          </h2>
        </Card.Header>

        <Card.Body>
          <div
            className={Styles.Card_Body}
          >
            <Form noValidate validated={validated} className={Styles.FromSection} onSubmit={handleSubmit}>
              <Row className={Styles.Row_Section}>
                <Form.Group as={Col} md="10" controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    style={{ background: "#FFFCEC" }}
                    placeholder="Enter Title"
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
                    placeholder="Enter category"
                    style={{ background: "#FFFCEC" }}
                    autocomplete="off"
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
                    placeholder="Describe about your experience..."
                    style={{ background: "#FFFCEC" }}
                    required
                  />

                  <Form.Control.Feedback type="invalid">
                    Please provide description
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Button style={{ background: "#7c8aff", alignSelf:"flex-start", marginLeft:'8%' }} type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddPage;
