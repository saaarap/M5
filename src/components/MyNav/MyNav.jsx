import React from 'react';
import { Navbar, Nav, InputGroup, FormControl } from 'react-bootstrap';

function MyNav(props) {
  const { query, setQuery } = props;

  const handleInputChange = (e) => {

    setQuery(e.target.value);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">La libreria di Sara</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Browse</Nav.Link>
        </Nav>

        <InputGroup>
          <FormControl
            placeholder="Cerca..."
            value={query}
            onChange={handleInputChange}
          />
        </InputGroup>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNav;
