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
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
// import CarouselPhotos from './components/CarouselPhotos/CarouselPhotos.jsx';
import CarouselProducts from './components/CarouselProducts/CarouselProducts.jsx';
import MainCategories from './components/MainCategories/MainCategories.jsx';

const init = async () => {
  const i18n = i18next.createInstance();

  const mode = process.env.NODE_ENV || 'development';
  const isDevelop = mode === 'development';

  await i18n.use(initReactI18next).init({
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
        <Header />
        <Hero />
        <MainCategories />

        <CarouselProducts
          carouselItems={[
            {
              id: 1,
              title: 'Первый слайд',
              description: 'Описание первого слайда',
              src: '1.jpg',
            },
            {
              id: 2,
              title: 'Первый слайд',
              description: 'Описание первого слайда',
              src: '2.jpg',
            },
            {
              id: 3,
              title: 'Первый слайд',
              description: 'Описание первого слайда',
              src: '3.jpg',
            },
            {
              id: 4,
              title: 'Первый слайд',
              description: 'Описание первого слайда',
              src: '1square.jpg',
            }
          ]}
        />
      </I18nextProvider>
    </React.StrictMode>
  );
};

init();
