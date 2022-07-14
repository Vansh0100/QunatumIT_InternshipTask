import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
function TopNav() {
  return (
    <Navbar className='p-3' expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        <i className="fa fa-slack"  style={{fontSize:"28px",paddingRight:"10px",color:"rgb(5,163,232)"}}></i>
          Bisness</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id='navbarScroll' className="justify-content-end">
          
          <Nav className='text-lg'>
            <Nav.Link href='#' active style={{color:"rgb(5,163,232)"}}>Home</Nav.Link>
            <Nav.Link href='#'>About</Nav.Link>
            <Nav.Link href='#'>Project</Nav.Link>
            <Nav.Link href='#'>Blog</Nav.Link>
            <Nav.Link href='#'>Services</Nav.Link>
            <Nav.Link href='#'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;