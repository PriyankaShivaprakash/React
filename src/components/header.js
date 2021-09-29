import React from 'react';
import './bootstrap.min.css';
// import { NavLink,Link } from 'react-router-dom'
import {Container,Navbar,Nav} from 'react-bootstrap'



function header() {
    return (
        <div>
            <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Restaurants</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#details">Details</Nav.Link>
                    <Nav.Link href="#order">Order</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
        </div>
    )
}

export default header
