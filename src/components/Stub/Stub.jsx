import { useTranslation } from 'react-i18next';
import brand from '../../assets/brand.svg';
import './Stub.css';

const Stub = () => {
  const { t } = useTranslation('Stub');
  return (
    <div className="App">
      <header className="App-header">
        <img src={brand} className="App-logo" alt="brand" />
        <p>
          {t('testcooking')}
        </p>
        <a
          className="App-link"
          href={t('links.vk')}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('vkGroup')}
        </a>
      </header>
    </div>
  );
};

export default Stub;
