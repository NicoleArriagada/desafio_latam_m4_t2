
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Navbar as BsNavbar, Container } from 'react-bootstrap';
import formatPrice from '../helpers/formatPrice';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <BsNavbar bg="dark" variant="dark" expand="lg">
      <Container>
        <BsNavbar.Brand href="#">Pizzería Mamma Mia!</BsNavbar.Brand>
        <Nav className="ms-auto">
          <Button variant="outline-light" className="me-2">🍕 Home</Button>
          {token ? (
            <>
              <Button variant="outline-light" className="me-2">🔓 Profile</Button>
              <Button variant="outline-light" className="me-2">🔒 Logout</Button>
            </>
          ) : (
            <>
              <Button variant="outline-light" className="me-2">🔐 Login</Button>
              <Button variant="outline-light" className="me-2">🔐 Register</Button>
            </>
          )}
          <Button variant="info">🛒 Total: ${formatPrice(total)}</Button>
        </Nav>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
