import Col from 'react-bootstrap/Col';
import cartLogo from '../../../assets/shopping-basket.svg';

import './GoodsButton.css';

const GoodsButton = (props) => {
  const { description, link, title } = props;
  return (
    <a
      href={link}
      target="_blank"
      rel="external noreferrer"
      className="size bg-white rounded-end remove-left-space row link-dark"
    >
      <Col
        className="align-content-center"
      >
        <img
          src={cartLogo}
          className="img-fluid"
          alt="some"
        />
      </Col>
      <Col
        className="col-8 lh-1"
      >
        <p className="my-3 text-black">
          {title}
        </p>
        { description ? <p className="h6">{description}</p> : null}
      </Col>
    </a>
  );
};

export default GoodsButton;
