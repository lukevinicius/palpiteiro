import { Container, Nav, Navbar } from 'react-bootstrap';
import { B, Button } from './styles';
import LogoHorizontal from '../../assets/logos/logoHorizontalGreen.png';

export function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: 'transparent' }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={LogoHorizontal} alt="Logo" width="235" height="75" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav style={{ alignItems: 'center', color: 'var(--primary)' }}>
            <Nav.Link href="#home">
              <B>SOBRE</B>
            </Nav.Link>
            <Nav.Link href="#planos">
              <B>PLANOS</B>
            </Nav.Link>
            <Nav.Link href="#duvidas">
              <B>DUVIDAS FREQUENTES</B>
            </Nav.Link>
            <Nav.Link href="#parceiro">
              <B>SEJA PARCEIRO</B>
            </Nav.Link>
            <Nav.Link href="#parceiro">
              <Button style={{ background: 'none', color: 'var(--primary)' }}>
                <B>GRUPO FREE</B>
              </Button>
            </Nav.Link>
            <Nav.Link href="#planos">
              <Button>ASSINAR AGORA!</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
