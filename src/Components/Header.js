import React, { Component,} from 'react';
import { Button, Container, FormControl, Navbar, Nav , Form } from 'react-bootstrap'
import logo from '../assets/logo.png';
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
                            height="70"
                            width="60"
                            className="d-inline-block align-top"
                            alt="Logo"
                        /> 
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="mr-auto">
                            <Nav.Link href="/"> Главная </Nav.Link>
                            <Nav.Link href="/about"> О нас </Nav.Link>
                            <Nav.Link href="/contacts"> Контакты  </Nav.Link>
                            <Nav.Link href="/blog"> Блог  </Nav.Link>
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
