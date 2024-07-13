import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation('About');
  return (
    <Container
      id="about"
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
            {t('title')}
          </h1>
          <blockquote className="blockquote">
            {t('description')}
          </blockquote>
          <blockquote className="blockquote-footer">
            {t('sign')}
          </blockquote>
        </Col>
        <Col
          lg="4"
          className="offset-lg-0 p-2 overflow-hidden shadow-lg"
        >
          <Image
            src={`${process.env.PUBLIC_URL}/pictures/sobolpilit.jpg`}
            fluid
            rounded
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
