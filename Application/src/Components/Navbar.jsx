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
        <Navbar.Brand to="/"  as={NavLink}>LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav className="ms-auto">
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={name}
              menuVariant="dark"
              className="mx-5"
            >
                            {
                role === 'admin' && (
                  <NavDropdown.Item to="/admin" as={NavLink}>
                  Admin
                </NavDropdown.Item>
                )
              }
              <NavDropdown.Item to="/updateUser" as={NavLink}>Update User</NavDropdown.Item>
              <NavDropdown.Item to="/changePassword" as={NavLink}>Change password</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  onClick={() => LogoutUser()}>
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