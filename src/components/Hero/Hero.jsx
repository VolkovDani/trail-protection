import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useTranslation } from 'react-i18next';

import './Hero.css';

const Hero = () => {
  const { t } = useTranslation('Hero');
  return (
    <Container
      id="main"
      className="py-1"
    >
      <Row
        className="p-2 pb-0 pe-lg-0 py-lg-5 align-items-center rounded-3 shadow-lg"
      >
        <Col
          lg="7"
          className="p-3 p-lg-5"
        >
          <h1 className="display-4 fw-bold lh-1">
            {t('hero.title')}
          </h1>
          <p className="lead">
            {t('hero.description')}
          </p>
        </Col>
        <Col
          lg="4"
          className="offset-lg-0 p-2 overflow-hidden shadow-lg d-flex justify-content-center"
        >
          <Image
            src={`${process.env.PUBLIC_URL}/pictures/rezina.jpg`}
            fluid
            rounded
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
