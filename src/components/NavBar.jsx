import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default class NavBar extends React.Component {
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Калкулатори</Nav.Link>
          <Nav.Link href="#home">Потсетници</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>
    );
  }
}
