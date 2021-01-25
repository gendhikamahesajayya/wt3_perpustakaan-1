import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

class nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return(
            <Navbar color="faded" light expand="md">
                <NavbarBrand href="/Dashboard">Perpustakaan</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/Buku">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Manage_Data">Manage Data</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Add">Tambah Data</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export default nav