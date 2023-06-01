import Logo from "./Logo"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAppContext } from "../context/context";
import {NavLink} from "react-router-dom";
const NavbarComp = () => {

    const {name , LogoutUser , role} = useAppContext()

    return (
        <Navbar   variant="dark" bg="primary" expand="lg">
      <Container>
        <Navbar.Brand to="/"  as={NavLink}>SHOPIFY</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav className="ms-auto">
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={name}
              menuVariant="dark"
              className="mx-5"
            >
              <NavDropdown.Item to="/updateUser" as={NavLink}>update user</NavDropdown.Item>
              {
                role === 'admin' && (
                  <NavDropdown.Item to="/admin" as={NavLink}>
                  admin
                </NavDropdown.Item>
                )
              }
              <NavDropdown.Item to="/changePassword" as={NavLink}>Change password</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" onClick={() => LogoutUser()}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavbarComp