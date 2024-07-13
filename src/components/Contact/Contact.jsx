/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import brand from '../../assets/brandlogo.svg';
import './Contact.css';

const Contact = () => {
  const { t: tHeader } = useTranslation('Header');
  const { t } = useTranslation('Contact');
  return (
    <Container className="bg-dark" id="contact">
      <footer className="row row-cols-sm-2 py-5 my-5">
        {/* <Col className="mb-3" /> */}

        {/* <Col className="mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Home</a></li>
            <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Features</a></li>
            <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Pricing</a></li>
            <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">FAQs</a></li>
            <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">About</a></li>
          </ul>
        </Col> */}
        <Col className="mb-3">
          <h5>
            {t('linksSection')}
          </h5>
          <Navbar variant="dark">
            <Nav className="flex-column" navbar>
              <Nav.Link href="#main">{tHeader('main')}</Nav.Link>
              <Nav.Link href="#goods">{tHeader('goods')}</Nav.Link>
              <Nav.Link href="#gallery">{tHeader('gallery')}</Nav.Link>
              <Nav.Link href="#about">{tHeader('about')}</Nav.Link>
              <Nav.Link href="#contact">{tHeader('contact')}</Nav.Link>
            </Nav>
          </Navbar>
        </Col>

        <Col className="mb-3">
          <h5>
            {
              t('contactSection')
            }
          </h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              {
                t('phoneNum')
              }
              <a className="nav-link p-0">{t('tel')}</a>
            </li>
            <li className="nav-item mb-2">
              {
                t('vkGroup')
              }
              <a className="nav-link p-0">{t('vkLink')}</a>
            </li>
            <li className="nav-item mb-2">
              {
                t('textToCreator')
              }
              <a className="nav-link p-0">{t('sobolVkLink')}</a>
            </li>

            {/* <li className="nav-item mb-2"><a className="nav-link p-0">Features</a></li>
            <li className="nav-item mb-2"><a className="nav-link p-0">Pricing</a></li>
            <li className="nav-item mb-2"><a className="nav-link p-0">FAQs</a></li>
            <li className="nav-item mb-2"><a className="nav-link p-0">About</a></li> */}
          </ul>
        </Col>
      </footer>
      <Row>
        <Col className="mb-3 d-flex justify-content-center">
          <Navbar.Brand href="#main">
            <img src={brand} alt={t('brandname')} className="brand-icon-footer" />
            {
              t('madeBy')
            }

          </Navbar.Brand>
          {/* <p className="">
            {
              t('madeBy')
            }
          </p> */}
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
