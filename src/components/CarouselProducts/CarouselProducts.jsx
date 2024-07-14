import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
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
            style={{ width: '15rem', height: '20rem' }}
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
          id, src, title, link, description,
        }) => {
          if (src.length === 1) {
            const [folderName, imageName] = src[0].split('/');
            return (
              <ListGroup.Item key={id}>
                <Card className="theme-black card-size">
                  <LazyLoadImage
                    className="d-block w-100 rounded my-auto"
                    src={`${process.env.PUBLIC_URL}/products/${folderName}/400/${imageName}`}
                    srcSet={
                      `
                      ${process.env.PUBLIC_URL}/products/${folderName}/200/${imageName} 600w,
                      ${process.env.PUBLIC_URL}/products/${folderName}/400/${imageName} 900w
                      `
                    }
                    alt={title}
                  />
                  <Card.ImgOverlay>
                    <GoodsButton link={link} title={title} description={description} />
                  </Card.ImgOverlay>
                </Card>
              </ListGroup.Item>
            );
          }
          return (
            <ListGroup.Item key={id}>
              <Card className="theme-black card-size">
                <Carousel
                  controls={false}
                  indicators={false}
                  className="my-auto"
                >
                  {
                    src.map((srcPath) => {
                      const [folderName, imageName] = srcPath.split('/');
                      return (
                        <Carousel.Item
                          key={srcPath}
                        >
                          <img
                            className="d-block w-100 rounded"
                            src={`${process.env.PUBLIC_URL}/products/${folderName}/400/${imageName}`}
                            alt={title}
                            srcSet={
                              `
                              ${process.env.PUBLIC_URL}/products/${folderName}/200/${imageName} 600w,
                              ${process.env.PUBLIC_URL}/products/${folderName}/400/${imageName} 900w
                              `
                            }
                          />
                        </Carousel.Item>
                      );
                    })
                  }
                </Carousel>
                <Card.ImgOverlay>
                  <GoodsButton link={link} title={title} description={description} />
                </Card.ImgOverlay>
              </Card>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Container>
  );
};

export default CarouselProducts;
