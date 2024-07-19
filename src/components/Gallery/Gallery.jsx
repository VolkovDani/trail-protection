/* eslint-disable functional/no-expression-statements */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { useTranslation } from 'react-i18next';

import './Gallery.css';

const Gallery = (props) => {
  const { t } = useTranslation('Gallery');
  const {
    horizontalPhotos,
    verticalPhotos,
    squarePhotos,
  } = props;

  const getRandomSec = (maxTime = 6000, minTime = 3000) => Math
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
            className="align-content-center"
            indicators={false}
            controls={false}
            touch={false}
            interval={getRandomSec()}
          >
            {verticalPhotos
              .filter((namePhoto) => Number(namePhoto) % 2 === 0)
              .map((namePhoto) => (
                <Carousel.Item key={namePhoto} className="glowing">
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
        <Col>
          <Row>
            <Col>
              <Carousel
                id="right-horizontal-photo"
                indicators={false}
                controls={false}
                touch={false}
                interval={getRandomSec()}
              >
                {horizontalPhotos.map((namePhoto) => (
                  <Carousel.Item
                    className="glowing"
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
                className="my-2"
                controls={false}
                indicators={false}
                touch={false}
                interval={getRandomSec()}
              >
                {squarePhotos
                  .filter((namePhoto) => Number(namePhoto) % 2 === 0)
                  .map((namePhoto) => (
                    <Carousel.Item
                      key={namePhoto}
                      className="glowing"
                    >
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
                className="my-2"
                indicators={false}
                controls={false}
                touch={false}
                interval={getRandomSec()}
              >
                {squarePhotos
                  .filter((namePhoto) => Number(namePhoto) % 2 === 1)
                  .map((namePhoto) => (
                    <Carousel.Item
                      key={namePhoto}
                      className="glowing"
                    >
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
                className="align-content-center"
                indicators={false}
                controls={false}
                touch={false}
                interval={getRandomSec()}
              >
                {verticalPhotos
                  .filter((namePhoto) => Number(namePhoto) % 2 === 1)
                  .map((namePhoto) => (
                    <Carousel.Item
                      key={namePhoto}
                      className="glowing"
                    >
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
