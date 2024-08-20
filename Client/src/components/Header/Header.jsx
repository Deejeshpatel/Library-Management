import { Container, Form, Nav, Navbar, Row } from "react-bootstrap"
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="bg-lights header">
            <Container>
                <Row className="py-3 align-items-center">
                    <Navbar.Brand href="#" className="col-3 text-dark">
                        DJS Library System
                    </Navbar.Brand>
                    <Nav className="col-9 justify-content-end">
                        <Nav.Item>
                            <Link to="/AddBook" className="text-dark nav-icon me-3">AddBook</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/Collection" className="text-dark me-3 nav-icon">Books</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/" className="text-dark nav-icon">Library</Link>
                        </Nav.Item>
                    </Nav>
                </Row>
            </Container>
        </div>
    )

}

export default Header