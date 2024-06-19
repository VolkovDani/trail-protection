import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cartLogo from '../../../assets/shopping-basket.svg';

import './GoodsButton.css';

const GoodsButton = (props) => {
  const { description, link, title } = props;
  return (
    <Row
      className="size bg-white rounded-end remove-left-space"
    >
      <Col
        className="align-content-center"
      >
        <a
          href={link}
          target="_blank"
          rel="external noreferrer"
        >
          <img
            src={cartLogo}
            className="img-fluid"
            alt="some"
          />
        </a>
      </Col>
      <Col
        className="col-8 lh-1"
      >
        <p className="my-1 text-black">
          {title}
        </p>
        { description ? <p className="text-secondary">{description}</p> : null}
      </Col>
    </Row>
  );
};

export default GoodsButton;
