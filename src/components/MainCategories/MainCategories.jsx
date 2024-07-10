import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import './MainCategories.css';
import GoodsButton from '../small/GoodsButton/GoodsButton';

const MainCategories = () => (
  <Container
    id="goods"
  >
    <Row
      className="flex-row-reverse"
    >
      <Col
        className="d-flex justify-content-center"
      >
        <h1
          className="h3 align-content-center"
        >
          Экип для него
        </h1>
      </Col>
      <Col
        md="auto"
        lg="6"
      >
        <Card
          className="border-0"
        >
          <Card.Img
            src={`${process.env.PUBLIC_URL}/products/1.jpg`}
          />
          <Card.ImgOverlay>
            <GoodsButton link="somewhere" title="Какой-то продукт" description="и небольное описание" />
          </Card.ImgOverlay>
        </Card>
      </Col>
    </Row>
    <Row className="pt-2">
      <Col
        className="d-flex justify-content-center"
      >
        <h1
          className="h3 align-content-center"
        >
          Экип для тебя
        </h1>
      </Col>
      <Col
        md="auto"
        lg="6"
      >
        <Card
          className="border-0"
        >
          <Card.Img
            src={`${process.env.PUBLIC_URL}/products/1.jpg`}
          />
          <Card.ImgOverlay>
            <GoodsButton link="somewhere" title="Какой-то продукт" description="и небольное описание" />
          </Card.ImgOverlay>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default MainCategories;
