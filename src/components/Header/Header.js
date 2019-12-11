import React from 'react';

import {Nav, Navbar} from 'react-bootstrap';

const Header = () => {
  return(
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">League of Legends</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/filter">Filter</Nav.Link>
            {
              //Need to build a better UI for this tab
              //<Nav.Link href="/champion/Aatrox">Details</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
