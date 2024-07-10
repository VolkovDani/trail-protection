import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import brand from '../../assets/brandlogo.svg';
import './Header.css';

const Header = () => {
  const { t } = useTranslation('Header');
  return (
    <Navbar
      expand="lg"
      variant="dark"
      bg="dark"
      sticky="top"
      className="mb-1"
    >
      <Container>
        <Navbar.Brand href="#main">
          <img src={brand} alt={t('brandname')} className="brand-icon" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end flex-grow-1">
            <Nav.Link href="#main">{t('main')}</Nav.Link>
            <Nav.Link href="#goods">{t('goods')}</Nav.Link>
            <Nav.Link href="#gallery">{t('gallery')}</Nav.Link>
            <Nav.Link href="#about">{t('about')}</Nav.Link>
            <Nav.Link href="#contact">{t('contact')}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
