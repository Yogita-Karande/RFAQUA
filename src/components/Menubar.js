import { Button, Container, Dropdown, DropdownMenu, DropdownToggle, Image, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function OffcanvasExample() {
  return (
    <>
      <Navbar key='lg' expand='lg' className="mb-3 sticky-top">
        <Container>
          <Navbar.Brand>
            <NavLink to="/">
              <Image src="./images/logo/logo.png" alt='logo' height="50px" />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>

              <Nav className="justify-content-end flex-grow-1 pe-3">
                <li><NavLink className='nav-link' to="/">Home</NavLink></li>
                <li><NavLink className='nav-link' to="about-us">About Us</NavLink></li>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic" className="nav-link  " as={NavLink} to='products'>
                    Products
                  </Dropdown.Toggle>

                  <Dropdown.Menu className='d-flex-inline'>
                    <Dropdown.Item as={NavLink} to="about-us">Underwater Products & Platform</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="about-us">Radar</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="about-us">EMI/EMC LAB</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="about-us">Antena & Wave Propogation Lab</Dropdown.Item>
                    <Dropdown>
                    <DropdownToggle className='nav-link d-inline text-end' as={NavLink} to="products">
                           Training - Skill Development Programme
                      <DropdownMenu className='dropdown-right ' align="end" >
                            <Dropdown.Item as={NavLink} to="about-us">Option1</Dropdown.Item>
                            <Dropdown.Item as={NavLink} to="about-us">Option2</Dropdown.Item>
                            <Dropdown.Item as={NavLink} to="about-us">Option2</Dropdown.Item>
                            <Dropdown.Item as={NavLink} to="about-us">Option2</Dropdown.Item>
                          </DropdownMenu>
                    </DropdownToggle>
                  </Dropdown>
                  </Dropdown.Menu>
                </Dropdown>
                
                <li><NavLink className='nav-link' to="gallary">Gallary</NavLink></li>
                <li><NavLink className='nav-link' to="contact-us">ContactUs</NavLink></li>

                
                <div>
                  <Button className='me-4 ms-4'>Get Quates</Button>
                  <Button>Join us on you tube </Button>
                </div>
              </Nav>

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};
export default OffcanvasExample;
