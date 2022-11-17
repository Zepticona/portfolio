import Button from 'react-bootstrap/Button';
import React from 'react';
import { Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import classes from './navigationBar.module.css'
import { Link } from 'react-router-dom';
const NavigationBar = () => {
    return (
        <Navbar expand="lg" className={classes.navbarContaier}>
            <Navbar.Brand>
                <Link to="/home" className="nav-logo">Shahriar Sakil</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/home" className='navigation-link'>Home</Link>
                    <Link to="/projects" className='navigation-link'>Projects</Link>
                    <Link to="/Contact" className='navigation-link'>Contact</Link>
                    <Link to="/about" className='navigation-link'>About Me</Link>
                    <Link to="/blogs" className='navigation-link'>Blogs</Link>
                    <a href="https://drive.google.com/uc?export=download&amp;id=17ywo3hP8Z7oSUeNEK7J5izHmPWEwaLbc">Resume</a>
                </Nav>
            </Navbar.Collapse>
        </Navbar> 
        
    );
};

export default NavigationBar;