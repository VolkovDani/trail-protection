import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './CarouselProducts.css';
import GoodsButton from '../small/GoodsButton/GoodsButton';

const CarouselProducts = (props) => {
  const { t } = useTranslation('CarouselProducts');
  const { carouselItems } = props;
  return (
    <Container className="my-2">
      <ListGroup
        variant="flush"
        horizontal
        className="overflow-auto"
      >
        <ListGroup.Item>
          <Card
            style={{ width: '10rem', height: '15rem' }}
          >
            <Card.Title>
              <h1
                className="h5 mx-2 my-3"
              >
                {
                  t('description')
                }
              </h1>
            </Card.Title>
          </Card>
        </ListGroup.Item>
        {carouselItems.map(({
          id, src, title, link,
        }) => (
          <ListGroup.Item key={id}>
            <Card className="theme-black card-size">
              <LazyLoadImage
                className="d-block w-100 rounded my-auto"
                src={`${process.env.PUBLIC_URL}/products/${src}`}
                alt={title}
              />
              {/* <Card.Img
                className="d-block w-100 rounded my-auto"
                src={`${process.env.PUBLIC_URL}/products/${src}`}
                alt={title}
              /> */}
              <Card.ImgOverlay>
                <GoodsButton link={link} title={title} />
              </Card.ImgOverlay>
            </Card>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default CarouselProducts;
