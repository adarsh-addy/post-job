import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import "./App.css";
import React, { useState } from "react";

function App() {
  function FormExample() {
    const [validated, setValidated] = useState(false);
    const job = {
      Title: "",
      Locations: [],
      MustHaveSkills: [],
      YearsOfExperience: "",
      Category: [],
      EmploymentType: "",
    };
    const [data, setdata] = useState(job);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      event.preventDefault();
      if (form.checkValidity() === false) {
       
        event.stopPropagation();

        

        axios.post(`/v1jobs/job`, { data}).then((res) => {
          console.log(res);
          console.log(res.data);
        });
      }
      console.log(data);

      setValidated(true);
    };

    const handleChange=(e)=>{
      setdata(pre=>({
        ...pre,[e.target.name]:e.target.value
      })
      )
    }

    return (
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="container w-50 mx-auto"
      >
        <h6>
          <strong>Post Job</strong>
        </h6>
        <h3 className="text-success">Basic Details</h3>
        <hr></hr>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="validationCustom03">
            <Form.Label>Job Title*</Form.Label>
            <Form.Control
              type="text"
              className="p-3"
              placeholder="Write a title that appropriately describes this job"
              name="Title"
              value={data.Title}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid title job.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="validationCustom03">
            <Form.Label>Location*</Form.Label>
            <Form.Control type="text" placeholder="+Add Location"  name="Locations"
              value={data.Locations}
              onChange={handleChange} 
              className="p-3" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid location.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Years of experience*</Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="Select Min"
              name="YearsOfExperience"
              value={data.YearsOfExperience}
              onChange={handleChange}
              className="p-3"
            />
            <Form.Control.Feedback>Mention it correct</Form.Control.Feedback>
          </Form.Group>
          {/* <div className="col-2"></div> */}
          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label></Form.Label>
            <Form.Control
              required
              type="date"
              placeholder="Select Max"
              name="YearsOfExperience"
              value={data.YearsOfExperience}
              onChange={handleChange}
              className="mt-2 p-3"
            />
            <Form.Control.Feedback>Mention it correct</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="validationCustom03">
            <Form.Label>Job Description*</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Describe the role and responsibilities, skills required for the job and help the candidates understand the role better "
              name="EmploymentType"
              value={data.EmploymentType}
              onChange={handleChange}
              className="p-3"


            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid job description.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <h3 className="text-success">Targeting</h3>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Category</Form.Label>
            {/* <Form.Control type="text" placeholder="City" required /> */}
            <Dropdown >
              <Dropdown.Toggle variant="outline-success" className="w-50 ">
                Select
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-50">
                <Dropdown.Item href="#">1#</Dropdown.Item>
                <Dropdown.Item href="#">2#</Dropdown.Item>
                <Dropdown.Item href="#">3#</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Form.Control.Feedback type="invalid">
              Please provide a valid category.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label>Functional Area*</Form.Label>
            {/* <Form.Control type="text" placeholder="State" required /> */}
            <Dropdown>
              <Dropdown.Toggle variant="outline-success" className="w-50">
                Select
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-50">
                <Dropdown.Item href="#">1#</Dropdown.Item>
                <Dropdown.Item href="#">2#</Dropdown.Item>
                <Dropdown.Item href="#">3#</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Form.Control.Feedback type="invalid">
              Please provide a valid functional area.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Graduation Year</Form.Label>
            {/* <Form.Control type="text" placeholder="City" required /> */}
            <Dropdown>
              <Dropdown.Toggle variant="outline-success" className="w-50">Min Batch</Dropdown.Toggle>
              <Dropdown.Menu className="w-50">
                <Dropdown.Item href="#">2022</Dropdown.Item>
                <Dropdown.Item href="#">2021</Dropdown.Item>
                <Dropdown.Item href="#">2020</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Form.Control.Feedback type="invalid">
              Please provide a min batch.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label></Form.Label>
            <Dropdown className="mt-2">
              <Dropdown.Toggle variant="outline-success" className="w-50">Max Batch</Dropdown.Toggle>
              <Dropdown.Menu className="w-50">
                <Dropdown.Item href="#">2019</Dropdown.Item>
                <Dropdown.Item href="#">2018</Dropdown.Item>
                <Dropdown.Item href="#">2017</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Form.Control.Feedback type="invalid">
              Please provide a max batch.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="validationCustom03">
            <Form.Label>Tags</Form.Label>
            <Form.Control type="text" placeholder="+Add Job tags" 
            name="MustHaveSkills"
            value={data.MustHaveSkills}
            onChange={handleChange} 
            className="p-3"
            required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid tags.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <button type="submit" className="btn btn-success mx-3">Post Job</button>
        <button type="submit" className="btn btn-outline-success mx-3">Post Job and Another Job</button>
        <button type="button" className="btn btn-light text-primary">Cancel</button>
      </Form>
    );
  }

  return (
    <div className="form-parent">
      <FormExample />
    </div>
  );
}

export default App;
