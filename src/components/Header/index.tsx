import { Container, Nav, Navbar } from 'react-bootstrap';
import { B, Button, ButtonFree } from './styles';
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
            <Nav.Link href="https://app-vlc.hotmart.com/market/details?producerUcode=907cd824-9109-46ad-8ba6-2f4dc06f2344&productUcode=51e1c936-c4b9-4aac-9ad1-5e528a98b6e5&bookmarked=false">
              <B>SEJA PARCEIRO</B>
            </Nav.Link>
            <Nav.Link href="https://t.me/opalpiteirofree2022">
              <ButtonFree>GRUPO FREE</ButtonFree>
            </Nav.Link>
            <Nav.Link href="#planos">
              <Button>GRUPO VIP</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
