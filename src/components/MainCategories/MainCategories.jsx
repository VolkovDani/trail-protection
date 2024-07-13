import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';

import './MainCategories.css';
import GoodsButton from '../small/GoodsButton/GoodsButton';

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
          className="d-flex justify-content-center"
        >
          <h1
            className="h3 align-content-center"
          >
            {
              t('forIt')
            }
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
              src={`${process.env.PUBLIC_URL}/mainCategories/600p/goods_for_it.jpg`}
              srcset={
                `${process.env.PUBLIC_URL}/mainCategories/400p/goods_for_it.jpg 600w,
                ${process.env.PUBLIC_URL}/mainCategories/600p/goods_for_it.jpg 900w,`
              }
            />
            <Card.ImgOverlay>
              <GoodsButton
                link={t('firstCategory.link')}
                title={t('firstCategory.title')}
                description={t('firstCategory.description')}
              />
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
            {
              t('forYou')
            }
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
              src={`${process.env.PUBLIC_URL}/mainCategories/600p/goods_for_you.jpg`}
              srcset={
                `${process.env.PUBLIC_URL}/mainCategories/400p/goods_for_you.jpg 600w,
                ${process.env.PUBLIC_URL}/mainCategories/600p/goods_for_you.jpg 900w,`
              }
            />
            <Card.ImgOverlay>
              <GoodsButton
                link={t('secondCategory.link')}
                title={t('secondCategory.title')}
                description={t('secondCategory.description')}
              />
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MainCategories;
