import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


const NavbarComponent = () => {

    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/">Home Page</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/super-heroes">Super Heroes</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/developers">React-query</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/paginated-query">Paginates Query</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </React.Fragment >
    )
}

export default NavbarComponent;