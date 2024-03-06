import { useState } from "react";
import { Col, Form, InputGroup, Row, Button } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
function CalculatorForm() {
  // const [weight , setWeight] = useState(0);
  // const [height , setHeight] = useState(0);
  // const [bmi , setBMI] = useState(0);
  
  return (
    <>
      <Form>
        <Row className="align-items-center">
          <Col sm={12} md={4}>
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
              weight
            </Form.Label>
            <InputGroup className="mb-2">
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control id="inlineFormInputGroup" placeholder="Weight" />
            </InputGroup>
          </Col>

          <Col sm={12} md={4}>
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
              height
            </Form.Label>
            <InputGroup className="mb-2">
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control id="inlineFormInputGroup" placeholder="Height" />
            </InputGroup>
          </Col>

          <Col sm={12} md={4}>
            <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
              Username
            </Form.Label>
            <InputGroup className="mb-2">
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control id="inlineFormInputGroup" placeholder="Username" />
            </InputGroup>
          </Col>
        </Row>
      <div className="text-center">
        <Form.Label htmlFor="custom-switch" className="d-inline-block mx-2 ">
          Male
        </Form.Label>
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          label="female"
          className="d-inline-block"
        />
      </div>
      <div className="d-flex justify-content-center">
        <Button
          type="submit"
          className="px-4 mx-2"
          style={{ backgroundColor: "#eee", color: "#000" }}
        >
          Clear
        </Button>
        <Button
          type="submit"
          className="px-4 mx-2"
          style={{ backgroundColor: "#9852f8" }}
        >
          Calculate
        </Button>
      </div>
     </Form>     
    </>
  )
}

export default CalculatorForm
