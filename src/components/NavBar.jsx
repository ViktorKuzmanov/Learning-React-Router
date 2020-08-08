import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { Dropdown, DropdownButton, Modal } from "react-bootstrap";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activetab: "0",
      showModal: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.onHide = this.onHide.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        ...prevState,
        showModal: true,
      };
    });
  }

  onHide() {
    this.setState((prevState) => {
      return {
        ...prevState,
        showModal: false,
      };
    });
  }

  render() {
    return (
      <Navbar bg="light" variant="light" expand="md">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/">Calculators</Link>
          <Link to="/about">About</Link>
        </Nav>
        {this.props.location.pathname === "/" && (
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        )}
        <DropdownButton
          alignRight
          title="Account"
          id="dropdown-menu-align-right"
        >
          <Button variant="light" onClick={this.handleClick}>
            Sign in
          </Button>{" "}
          <Button variant="dark" onClick={this.handleClick}>
            Join
          </Button>{" "}
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownButton>
        <Modal
          show={this.state.showModal}
          onHide={this.onHide}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Navbar>
    );
  }
}

export default withRouter(NavBar);
