import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import './Gallery.css';

const Gallery = () => {
  const horizontalPhotos = ['1.jpg', '8.jpg'];
  const verticalPhotos = ['3.jpg', '4.jpg'];
  const getRandomSec = (maxTime = 10000, minTime = 5000) => Math
    .floor(Math.random() * (maxTime - minTime) + minTime);
  return (
    <Container>
      <Row>
        <Col>
          <Carousel
            id="left-vertical-photo"
            indicators={false}
            controls={false}
            interval={getRandomSec()}
            touch={false}
          >
            {verticalPhotos.map((namePhoto) => (
              <Carousel.Item key={namePhoto}>
                <Image
                  fluid
                  src={`${process.env.PUBLIC_URL}/gallery/${namePhoto}`}
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
                interval={getRandomSec(4000, 2000)}
                touch={false}
              >
                {horizontalPhotos.map((namePhoto) => (
                  <Carousel.Item
                    key={namePhoto}
                  >
                    <Image
                      fluid
                      src={`${process.env.PUBLIC_URL}/gallery/${namePhoto}`}
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
              >
                {horizontalPhotos.map((namePhoto) => (
                  <Carousel.Item key={namePhoto}>
                    <Image
                      fluid
                      src={`${process.env.PUBLIC_URL}/gallery/${namePhoto}`}
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
                className="overflow-hidden"
              >
                {horizontalPhotos.map((namePhoto) => (
                  <Carousel.Item key={namePhoto}>
                    <Image
                      fluid
                      src={`${process.env.PUBLIC_URL}/gallery/${namePhoto}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
            <Col>
              <Carousel
                indicators={false}
                controls={false}
                interval={getRandomSec()}
                touch={false}
                className="overflow-hidden"
              >
                {verticalPhotos.map((namePhoto) => (
                  <Carousel.Item key={namePhoto}>
                    <Image
                      fluid
                      src={`${process.env.PUBLIC_URL}/gallery/${namePhoto}`}
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
