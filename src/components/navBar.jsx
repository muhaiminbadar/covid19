import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class navBar extends React.Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">{this.props.siteName}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    {this.props.items.map((item, index) =>  <Nav.Link key={index} href={item.link}>{item.name}</Nav.Link>)}
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}
