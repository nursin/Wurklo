// dependencies
import React, { useState } from 'react';
import { Nav, Navbar, NavbarToggler, NavItem, Jumbotron, Button, Collapse, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Tooltip } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';

// styles
import '../Styles/HeaderStyles.css';

// redux


// component
function Header() {
    const [input, setInput] = useState('');
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const [toggleNav, setToggleNav] = useState(false);
    // const [toggleModal, setToggleModal] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        setInput('');
    }

    const toggle = () => setTooltipOpen(!tooltipOpen);


    // the layout is for mobile and order classes set lg viewport layout
    return (
        // need to figure out how to make sticky top / fixed top
        // need to make search bar fill left top in desktop mode
        <div>
            <div className="header container-fluid shadow mb-3 px-3 pb-lg-0 rounded bg-white">
                <div className="row d-flex align-items-center justify-content-around">
                    <div className="col-1 col-lg-6 bg-white d-flex justify-content-start justify-content-lg-center order-lg-3">
                        <Navbar className="bg-white" light sticky="top" expand="lg" color="light">
                            <NavbarToggler style={{ color: "black" }} onClick={() => setToggleNav(!toggleNav)} onBlur={() => setToggleNav(false)} />
                            <Collapse isOpen={toggleNav} navbar>
                                <Nav navbar>
                                    <NavItem id="Home" className="mx-3">
                                        <NavLink className="nav-link" to="/home">
                                            <i className="fa fa-home fa-2x px-4" />
                                        </NavLink>
                                    </NavItem>
                                    <NavItem id="MyProfile" className="mx-3">
                                        <NavLink className="nav-link" to="/myprofile">
                                            <i className="fa fa-user fa-2x px-4" />
                                        </NavLink>
                                    </NavItem>
                                    <NavItem id="SearchWorkers" className="mx-3">
                                        <NavLink className="nav-link" to="/searchworkers">
                                            <i className="fa fa-briefcase fa-2x px-4" />
                                        </NavLink>
                                    </NavItem>
                                    <NavItem id="SearchProjects" className="mx-3">
                                        <NavLink className="nav-link" to="/searchprojects">
                                            <i className="fa fa-pencil fa-2x px-4" />
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </div>
                    <div className="col-10 col-lg-3 order-lg-1 d-flex justify-content-lg-start justify-content-center ps-lg-5 ">
                        <a className="navbar-brand text-dark p-2" href="/home">Wurklo</a>
                    </div>
                    <div className="col-1 col-lg-3 d-flex justify-content-end align-items-center order-lg-4">
                        {true ? (
                            <>
                                <Avatar src='https://source.unsplash.com/random/800' />
                                <h4 className="fs-6 fw-bold ps-2 pt-2 d-none d-lg-block pe-5">Bobby Keel</h4>
                            </>
                        ) : (
                            <Link className="header__loginLink col-1 col-lg-3 d-flex justify-content-end align-items-center order-lg-4 p-2" to='/login'>
                                <Avatar src='' />
                                <h4 className="fs-6 fw-bold ps-2 pt-2 d-none d-lg-block pe-3">Login/Register</h4>
                            </Link>
                        )}
                    </div>
                    {/* <div className="col-lg-2 order-lg-2">
            <Form className="header__search bg-secondary bg-opacity-50">
              <FormGroup>
                <Input
                className=""
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search Wurklo . . ."
                  value={input}
                  onChange={e => setInput(e.target.value)}
                />
              </FormGroup>
              <Button className="d-none" onClick={handleSubmit} type="submit">Submit</Button>
            </Form>
          </div> */}
                    {/* <div className="col-lg-1 order-lg-5 d-none d-lg-block">
            <Link className="nav-link" to="/login">
              <i className="fa fa-sign-in fa-2x px-4 p-2 text-secondary bg-opacity-50" />
            </Link>
          </div> */}
                </div>
            </div>
        </div >
    )
}

export default Header
