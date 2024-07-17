import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './Gallery.css';
import { useTranslation } from 'react-i18next';

const Gallery = (props) => {
  const { t } = useTranslation('Gallery');
  const {
    horizontalPhotos,
    verticalPhotos,
    squarePhotos,
  } = props;
  const getRandomSec = (maxTime = 8000, minTime = 5000) => Math
    .floor(Math.random() * (maxTime - minTime) + minTime);
  return (
    <Container
      id="gallery"
    >
      <Row>
        <Col
          lg="7"
          className="p-3 p-lg-5"
        >
          <h1 className="display-4 fw-bold lh-1">
            {
              t('title')
            }
          </h1>
        </Col>
      </Row>
      <Row>
        <Col
          className="d-flex"
        >
          <Carousel
            id="left-vertical-photo"
            indicators={false}
            controls={false}
            interval={getRandomSec()}
            touch={false}
            className="align-content-center"
          >
            {verticalPhotos
              .filter((namePhoto) => Number(namePhoto) % 2 === 0)
              .map((namePhoto) => (
                <Carousel.Item key={namePhoto}>
                  {/* <Image
                    fluid
                    src={`${process.env.PUBLIC_URL}/gallery/vertical/600/${namePhoto}`}
                    srcSet={
                      `
                      ${process.env.PUBLIC_URL}/gallery/vertical/400/${namePhoto} 600w,
                      ${process.env.PUBLIC_URL}/gallery/vertical/600/${namePhoto} 900w
                      `
                    }
                  /> */}
                  <LazyLoadImage
                    className="img-fluid"
                    loading="lazy"
                    src={`${process.env.PUBLIC_URL}/gallery/vertical/600/${namePhoto}`}
                    srcSet={
                      `
                      ${process.env.PUBLIC_URL}/gallery/vertical/400/${namePhoto} 600w,
                      ${process.env.PUBLIC_URL}/gallery/vertical/600/${namePhoto} 900w
                      `
                    }
                  />
                </Carousel.Item>
              ))}
          </Carousel>
        </Col>
        <Col>
          <Row>
            <Col>
              <Carousel
                id="right-horizontal-photo"
                indicators={false}
                controls={false}
                interval={getRandomSec()}
                touch={false}
              >
                {horizontalPhotos.map((namePhoto) => (
                  <Carousel.Item
                    key={namePhoto}
                  >
                    <Image
                      fluid
                      src={`${process.env.PUBLIC_URL}/gallery/horizontal/600/${namePhoto}`}
                      srcSet={
                        `
                        ${process.env.PUBLIC_URL}/gallery/horizontal/400/${namePhoto} 600w,
                        ${process.env.PUBLIC_URL}/gallery/horizontal/600/${namePhoto} 900w
                        `
                      }
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
          <Row>
            <Col>
              <Carousel
                id="first-square-photo"
                indicators={false}
                controls={false}
                interval={getRandomSec()}
                touch={false}
                className="my-2"
              >
                {squarePhotos
                  .filter((namePhoto) => Number(namePhoto) % 2 === 0)
                  .map((namePhoto) => (
                    <Carousel.Item key={namePhoto}>
                      <Image
                        fluid
                        src={`${process.env.PUBLIC_URL}/gallery/square/600/${namePhoto}`}
                        srcSet={
                          `
                          ${process.env.PUBLIC_URL}/gallery/square/400/${namePhoto} 600w,
                          ${process.env.PUBLIC_URL}/gallery/square/600/${namePhoto} 900w
                          `
                        }
                      />
                    </Carousel.Item>
                  ))}

              </Carousel>
              <Carousel
                id="second-square-photo"
                indicators={false}
                controls={false}
                interval={getRandomSec()}
                touch={false}
                className="my-2"
              >
                {squarePhotos
                  .filter((namePhoto) => Number(namePhoto) % 2 === 1)
                  .map((namePhoto) => (
                    <Carousel.Item key={namePhoto}>
                      <Image
                        fluid
                        src={`${process.env.PUBLIC_URL}/gallery/square/600/${namePhoto}`}
                        srcSet={
                          `
                          ${process.env.PUBLIC_URL}/gallery/square/400/${namePhoto} 600w,
                          ${process.env.PUBLIC_URL}/gallery/square/600/${namePhoto} 900w
                          `
                        }
                      />
                    </Carousel.Item>
                  ))}
              </Carousel>
            </Col>
            <Col
              className="d-flex"
            >
              <Carousel
                id="right-vertical-photo"
                indicators={false}
                controls={false}
                interval={getRandomSec()}
                touch={false}
                className="align-content-center"
              >
                {verticalPhotos
                  .filter((namePhoto) => Number(namePhoto) % 2 === 1)
                  .map((namePhoto) => (
                    <Carousel.Item key={namePhoto}>
                      <Image
                        fluid
                        src={`${process.env.PUBLIC_URL}/gallery/vertical/600/${namePhoto}`}
                        srcSet={
                          `
                          ${process.env.PUBLIC_URL}/gallery/vertical/400/${namePhoto} 600w,
                          ${process.env.PUBLIC_URL}/gallery/vertical/600/${namePhoto} 900w
                          `
                        }
                      />
                    </Carousel.Item>
                  ))}
              </Carousel>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
