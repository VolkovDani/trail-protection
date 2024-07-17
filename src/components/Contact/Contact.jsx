/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';

import telephoneIcon from '../../assets/telephone.svg';
import telegramIcon from '../../assets/telegram_icon.svg';
import vkIcon from '../../assets/vk_icon.svg';
import githubIcon from '../../assets/github.svg';
import brand from '../../assets/brandlogo.svg';
import './Contact.css';

const Contact = () => {
  const { t: tHeader } = useTranslation('Header');
  const { t } = useTranslation('Contact');
  const tel = t('tel', '');
  const vkGroupLink = t('vkGroupLink', '');
  const vkCreator = t('creatorVkLink', '');
  const tgCreator = t('creatorTgLink', '');
  return (
    <Container className="bg-dark" id="contact">
      <footer className="row row-cols-sm-2 py-5 my-5">
        <Col className="mb-3">
          <h5>
            {t('linksSection')}
          </h5>
          <Navbar variant="dark">
            <Nav className="flex-column" navbar>
              <Nav.Link href="#main">{tHeader('main')}</Nav.Link>
              <Nav.Link href="#goods">{tHeader('goods')}</Nav.Link>
              {/* <Nav.Link href="#gallery">{tHeader('gallery')}</Nav.Link> */}
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
            {
              tel
                ? (
                  <li className="nav-item mb-2">
                    {
                      t('phoneNum')
                    }
                    <a
                      className="nav-link p-0 d-sm-inline-block"
                      href={`tel:${tel}`}
                    >
                      <img src={telephoneIcon} alt={t('phoneLinkAlt')} className="d-inline-block pb-1 px-1 contact-icon-footer" />
                    </a>
                  </li>
                ) : null
            }
            {
              vkGroupLink
                ? (
                  <li className="nav-item mb-2">
                    {
                      t('vkGroup')
                    }
                    <a
                      className="nav-link p-0 d-sm-inline-block"
                      target="_blank"
                      rel="external noreferrer"
                      href={vkGroupLink}
                    >
                      <img src={vkIcon} alt={t('vkLinkAlt')} className="d-inline-block pb-1 px-1 contact-icon-footer" />
                    </a>
                  </li>
                ) : null
            }
            {
              vkCreator
                ? (
                  <li className="nav-item mb-2">
                    {
                      t('textToCreator')
                    }
                    <a
                      className="nav-link p-0 d-sm-inline-block"
                      target="_blank"
                      rel="external noreferrer"
                      href={vkCreator}
                    >
                      <img src={vkIcon} alt={t('vkLinkAlt')} className="d-inline-block pb-1 px-1 contact-icon-footer" />
                    </a>
                    {
                      tgCreator
                        ? (
                          <a
                            className="nav-link p-0 d-sm-inline-block"
                            target="_blank"
                            rel="external noreferrer"
                            href={tgCreator}
                          >
                            <img src={telegramIcon} alt={t('tgLinkAlt')} className="d-inline-block pb-1 px-1 contact-icon-footer" />
                          </a>
                        ) : null
                    }
                  </li>
                ) : null
            }
          </ul>
        </Col>
      </footer>
      <Row>
        <Col className="mb-3 d-flex justify-content-center">
          <Navbar.Brand>
            <img src={brand} alt={t('brandname')} className="brand-icon-footer" />
            {
              t('madeBy')
            }
            <a
              className="nav-link p-0 d-inline-block"
              target="_blank"
              rel="external noreferrer"
              href={t('linkMadeBy')}
            >
              <img src={githubIcon} alt={t('githubLinkAlt')} className="d-inline-block pb-1 px-1 contact-icon-footer" />
            </a>
          </Navbar.Brand>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
