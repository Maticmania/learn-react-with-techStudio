import Button from 'react-bootstrap/Button';
//import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <NavLink to='/'>
      <Navbar.Brand>BMW</Navbar.Brand>
      </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link>
            <NavLink to= '' style={{textDecoration: 'none', color: 'black'}}>Home</NavLink>
            </Nav.Link>
            <Nav.Link>
            <NavLink to= '/product' style={{textDecoration: 'none', color: 'black'}}>Product</NavLink>
            </Nav.Link>
            <Nav.Link>
            <NavLink to= '/about' style={{textDecoration: 'none', color: 'black'}}>About</NavLink>
            </Nav.Link>
            <Nav.Link>
            <NavLink to= '/hook' style={{textDecoration: 'none', color: 'black'}}>Hook</NavLink>
            </Nav.Link>
            <NavDropdown title="others" id="navbarScrollingDropdown">
            
               <NavDropdown.Item>
               <NavLink to= '/blog' style={{textDecoration: 'none', color: 'black'}}>
                Blog
                </NavLink>
                </NavDropdown.Item>
           
              
              
              <NavDropdown.Item >
              <NavLink to= '/login' style={{textDecoration: 'none', color: 'black'}}>
                Login
                </NavLink>
              </NavDropdown.Item>
              
              
              <NavDropdown.Divider />

              <NavDropdown.Item>
              <NavLink to= '/register' style={{textDecoration: 'none', color: 'black'}}>
                Register
              </NavLink>
              </NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;


// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { NavLink } from 'react-router-dom';

// function Menu() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto" >
//             <NavLink to="/" style={{textDecoration: "none"}}>
//               Home
//             </NavLink>
//             <NavLink to="/about" style={{textDecoration: "none"}}>
//             About
//             </NavLink>
//             <NavLink to="/product" style={{textDecoration: "none"}}>
//             Product
//             </NavLink>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Menu;