import Navbar from 'react-bootstrap/Navbar';
import {Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

const NavbarComponent=()=>{
    return ( <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Vidly</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Movies</Nav.Link>
                        <Nav.Link href="#link">Customers</Nav.Link>
                        <Nav.Link href="#link">Rentals</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavbarComponent;