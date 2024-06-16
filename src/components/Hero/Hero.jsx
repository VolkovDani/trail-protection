import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { useTranslation } from 'react-i18next';

import './Hero.css';

const Hero = () => {
  const { t } = useTranslation('Hero');
  return (
    <Container>
      <div className="row p-4 pb-0 pe-lg-0 py-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5">
          <h1 className="display-4 fw-bold lh-1">{t('hero.title')}</h1>
          <p className="lead">{t('hero.description')}</p>
        </div>
        <div className="col-lg-4 offset-lg-0 p-0 overflow-hidden shadow-lg">
          <Image
            src={`${process.env.PUBLIC_URL}/products/5.jpg`}
            fluid
            rounded
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
