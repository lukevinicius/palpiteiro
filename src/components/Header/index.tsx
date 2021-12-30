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
          <Nav style={{ alignItems: 'center' }}>
            <Nav.Link href="#home" style={{ color: 'var(--primary)' }}>
              <B>SOBRE</B>
            </Nav.Link>
            <Nav.Link href="#planos" style={{ color: 'var(--primary)' }}>
              <B>PLANOS</B>
            </Nav.Link>
            <Nav.Link href="#duvidas" style={{ color: 'var(--primary)' }}>
              <B>DUVIDAS FREQUENTES</B>
            </Nav.Link>
            <Nav.Link href="#parceiro" style={{ color: 'var(--primary)' }}>
              <B>SEJA PARCEIRO</B>
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
