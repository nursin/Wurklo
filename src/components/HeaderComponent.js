// dependencies
import React, { useState } from 'react';
import { Nav, Navbar, NavbarToggler, NavItem, Jumbotron, Button, Collapse, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';

// styles
import '../Styles/HeaderStyles.css';

// redux


// component
function Header() {
  const [input, setInput] = useState('');

  const [toggleNav, setToggleNav] = useState(false);
  // const [toggleModal, setToggleModal] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    setInput('');
  }
  return (
    <div>
      <div className="container-fluid shadow p-3 mb-2 bg-body rounded">
        <div className="row d-flex align-items-center">
          <div className="col-3 d-flex align-items-center">
            <a className="navbar-brand text-dark ps-2" href="/home">Wurklo</a>
            <Form className="header__search bg-secondary bg-opacity-50">
              <FormGroup>
                <Input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search Wurklo . . ."
                  value={input}
                  onChange={e => setInput(e.target.value)}
                />
              </FormGroup>
              <Button hidden onClick={handleSubmit} type="submit">Submit</Button>
            </Form>
          </div>
          <div className="col-6 bg-white d-flex justify-content-center">
            <Navbar className="bg-white" light sticky="top" expand="md" color="light">
              <NavbarToggler style={{ color: "black" }} onClick={() => setToggleNav(!toggleNav)} onBlur={() => setToggleNav(false)} />
              <Collapse isOpen={toggleNav} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink className="nav-link" to="/home">
                      <i className="fa fa-home fa-2x px-4" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/myprofile">
                      <i className="fa fa-user fa-2x px-4" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/myjobs">
                      <i className="fa fa-briefcase fa-2x px-4" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/associates">
                      <i className="fa fa-address-card fa-2x px-4" />
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/settings">
                      <i className="fa fa-cog fa-2x px-4" />
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
          <div className="col-2 d-flex justify-content-end align-items-center">
            <Avatar src='https://source.unsplash.com/random/800' />
            <h4 className="fs-6 fw-bold ps-2 pt-2">Bobby Keel</h4>
          </div>
          <div className="col-1">
            <Link className="nav-link" to="/login">
              <i className="fa fa-sign-in fa-2x px-4 text-secondary bg-opacity-50" />
            </Link>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Header
