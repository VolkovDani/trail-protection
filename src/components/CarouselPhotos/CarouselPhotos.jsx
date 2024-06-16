import Carousel from 'react-bootstrap/Carousel';

const CarouselPhotos = (props) => {
  const { carouselItems } = props;
  return (
    <Carousel id="main" className="my-2">
      {carouselItems.map(({
        id, src, title, description,
      }) => (
        <Carousel.Item key={id}>
          <img
            className="d-block w-100"
            src={`${process.env.PUBLIC_URL}/products/${src}`}
            alt={title}
          />
          <Carousel.Caption
            className="transparent-grey"
          >
            <h3>{title}</h3>
            <p>{description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselPhotos;
