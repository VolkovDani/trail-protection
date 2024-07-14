import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';

import './MainCategories.css';
// import GoodsButton from '../small/GoodsButton/GoodsButton';

const MainCategories = () => {
  const { t } = useTranslation('MainCategories');
  return (
    <Container
      id="goods"
    >
      <Row
        className="flex-row-reverse"
      >
        <Col
          className="align-content-center"
        >
          <h1
            className="h3 d-flex justify-content-center"
          >
            {
              t('forIt')
            }
          </h1>
          <p
            className="d-flex justify-content-center m-0"
          >
            {
              t('firstCategory.title')
            }
          </p>
          <p
            className="d-flex justify-content-center"
          >
            {
              t('firstCategory.description')
            }
          </p>
          <div className="d-flex justify-content-center">
            <Button
              variant="light"
              className="mb-2"
            >
              {
                t('lookAtSetOfGoods')
              }
            </Button>
          </div>
        </Col>
        <Col
          lg="6"
        >
          <Card
            className="border-0"
          >
            <Card.Img
              src={`${process.env.PUBLIC_URL}/mainCategories/600p/goods_for_it.jpg`}
              srcset={
                `${process.env.PUBLIC_URL}/mainCategories/400p/goods_for_it.jpg 600w,
                ${process.env.PUBLIC_URL}/mainCategories/600p/goods_for_it.jpg 900w,`
              }
            />
          </Card>
        </Col>
      </Row>
      <Row className="pt-2">
        <Col
          className="align-content-center"
        >
          <h1
            className="h3 d-flex justify-content-center"
          >
            {
              t('forYou')
            }
          </h1>
          <p
            className="d-flex justify-content-center m-0"
          >
            {
              t('secondCategory.title')
            }
          </p>
          <p
            className="d-flex justify-content-center"
          >
            {
              t('secondCategory.description')
            }
          </p>
          <div className="d-flex justify-content-center">
            <Button
              variant="light"
              className="mb-2"
            >
              {
                t('lookAtSetOfGoods')
              }
            </Button>
          </div>

        </Col>
        <Col
          lg="6"
        >
          <Card
            className="border-0"
          >
            <Card.Img
              src={`${process.env.PUBLIC_URL}/mainCategories/600p/goods_for_you.jpg`}
              srcset={
                `${process.env.PUBLIC_URL}/mainCategories/400p/goods_for_you.jpg 600w,
                ${process.env.PUBLIC_URL}/mainCategories/600p/goods_for_you.jpg 900w,`
              }
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MainCategories;
