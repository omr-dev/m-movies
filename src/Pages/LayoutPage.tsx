import Navbar from 'react-bootstrap/Navbar';
import {Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import {Outlet} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'

const LayoutPage=()=>{
    return ( <>
        <Navbar bg="light" expand="lg">
            <Container>
                 <Navbar.Brand>Vidly</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/"><Nav.Link >Movies</Nav.Link></LinkContainer>
                        <LinkContainer to="customers"><Nav.Link >Customers</Nav.Link></LinkContainer>
                        <LinkContainer to="rentals"><Nav.Link >Rentals</Nav.Link></LinkContainer>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


        <Outlet/>
        </>
    );
}
export default LayoutPage;