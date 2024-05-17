import React, { Component,} from 'react';
import { Button, Container, FormControl, Navbar, Nav , Form } from 'react-bootstrap'
import logo from './vtg1.gif'
import {BrowserRouter as  Router, Routes , Route, Link,  } from 'react-router-dom';

import Home from '../Pages/Home.js';
import About from '../Pages/About.js';
import Contacts from '../Pages/Contact.js';
import Blog from '../Pages/blog.js';



export default class Header extends Component {
    render() {
        return (
            <>
            <Navbar  collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="60"
                            width="70"
                            className="d-inline-block align-top"
                            alt="Logo"
                        /> Военторг
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="mr-auto">
                            <Nav.Link href="/"> Home </Nav.Link>
                            <Nav.Link href="/about"> About us </Nav.Link>
                            <Nav.Link href="/contacts"> Contacts  </Nav.Link>
                            <Nav.Link href="/blog"> Blog  </Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl
                                type='text'
                                placeholder='Поиск'
                                className='mr-sm-2' 
                            />
                            <Button variant='online-info'>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Router>
                <Routes>
                    <Route exact path='/' Component={Home} />
                    <Route exact path='/about' Component={About} />
                    <Route exact path='/contacts' Component={Contacts} />
                    <Route exact path='/blog' Component={Blog} />
                </Routes>
            </Router>
            </>
        );
    }
}
