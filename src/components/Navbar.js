import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo from './../assets/images/keyurlogo.png'


const NavbarComponent = () => {

    return (
        <React.Fragment>
            <Navbar className='navbar-bg' variant="dark">
                <Container>
                    <img src={logo} alt='keyur-logo' className='keyur-logo' />
                    <Nav className="me-auto">
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/">Home Page</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/super-heroes">Super Heroes</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/developers">React-query</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/paginated-query">Paginates Query</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/mutation">Add New Developer</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </React.Fragment >
    )
}

export default NavbarComponent;