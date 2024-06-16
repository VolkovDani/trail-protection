/* eslint-disable functional/no-expression-statements */
/* eslint-disable comma-dangle */
import React from 'react';
import ReactDOM from 'react-dom/client';
import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import './index.css';
import './index.scss';
import resources from './locales/index.js';
import Stub from './components/Stub/Stub.jsx';

const init = async () => {
  const i18n = i18next.createInstance();

  const mode = process.env.NODE_ENV || 'development';
  const isDevelop = mode === 'development';

  await i18n
    .use(initReactI18next)
    .init({
      resources,
      debug: isDevelop,
      fallbackLng: 'ru',
      interpolation: {
        escapeValue: false,
      },
    });

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <Stub />
      </I18nextProvider>
    </React.StrictMode>
  );
};

init();
