import Button from 'react-bootstrap/Button';
import React from 'react';
import { Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import classes from './navigationBar.module.css'
import { Link } from 'react-router-dom';
const NavigationBar = () => {
    return (
        <Navbar expand="lg" className={classes.navbarContaier}>
            <Navbar.Brand>
                <Link to="/home">Shahriar Sakil</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/home">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/Contact">Contact</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/blogs">Blogs</Link>
                    <a href="https://drive.google.com/uc?export=download&amp;id=17ywo3hP8Z7oSUeNEK7J5izHmPWEwaLbc">Resume</a>
                </Nav>
            </Navbar.Collapse>
        </Navbar> 
        
    );
};

export default NavigationBar;