import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import Home from "./Home";
export default class NavbarComp extends Component {
    render() {
        return (
            <BrowserRouter>
            
                <div>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to={"/Home"}>Home</Nav.Link>
                                    <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                                    <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
                                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">
                                            Something
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Nav>
                                    <Nav.Link as={Link} to={"/signIn"}>SignIn</Nav.Link>
                                    <Nav.Link as={Link} to={"/signOut"}>
                                        SignOut
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div>
                <Routes>
                    <Route  path="/About" element={<About/>}>    
                    </Route>
                    <Route  path="/Contact" element={<Contact/>}>
                    </Route>
                    <Route  path="/SignIn" element={<SignIn/>}>
                    </Route>
                    <Route  path="/SignOut" element={<SignOut/>}>
                    </Route>
                    <Route  path="/Home" element={<Home/>}>
                    </Route>  
                </Routes>
                </div>
            </BrowserRouter>
        );
    }
}
