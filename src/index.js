/* eslint-disable functional/no-expression-statements */
/* eslint-disable comma-dangle */
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import './styles/index.scss';
import resources from './locales/index.js';
// import Stub from './components/Stub/Stub.jsx';
import LoadListener from './components/LoadListener/LoadListener.jsx';

// import Header from './components/Header/Header.jsx';
// import Hero from './components/Hero/Hero.jsx';
// import CarouselProducts from './components/CarouselProducts/CarouselProducts.jsx';
// import MainCategories from './components/MainCategories/MainCategories.jsx';
// import Gallery from './components/Gallery/Gallery.jsx';
// import About from './components/About/About.jsx';
// import Contact from './components/Contact/Contact.jsx';

const Header = lazy(() => import('./components/Header/Header.jsx'));
const Hero = lazy(() => import('./components/Hero/Hero.jsx'));
const CarouselProducts = lazy(() => import('./components/CarouselProducts/CarouselProducts.jsx'));
const MainCategories = lazy(() => import('./components/MainCategories/MainCategories.jsx'));
// const Gallery = lazy(() => import('./components/Gallery/Gallery.jsx'));
const About = lazy(() => import('./components/About/About.jsx'));
const Contact = lazy(() => import('./components/Contact/Contact.jsx'));

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
        <Suspense fallback={<LoadListener />}>
          {/* <Stub /> */}
          <Header />
          <Hero />
          <MainCategories />
          <CarouselProducts
            carouselItems={[
              {
                id: 1,
                title: 'Джерси',
                link: 'https://vk.com/market-185472895?screen=group&w=product-185472895_9092170%2Fquery',
                src: [
                  'jersy/1.jpg',
                  'jersy/2.jpg',
                  'jersy/3.jpg',
                  'jersy/4.jpg',
                  'jersy/5.jpg',
                  'jersy/6.jpg',
                  'jersy/7.jpg',
                  'jersy/8.jpg',
                  'jersy/9.jpg',
                  'jersy/10.jpg',
                  'jersy/11.jpg',
                  'jersy/12.jpg',
                  'jersy/13.jpg',
                  'jersy/14.jpg',
                  'jersy/15.jpg',
                  'jersy/16.jpg',
                  'jersy/17.jpg',
                  'jersy/18.jpg',
                  'jersy/19.jpg',
                  'jersy/20.jpg',
                ],
              },
              {
                id: 2,
                link: 'https://vk.com/market-185472895?w=product-185472895_8007510%2Fquery',
                title: 'Поясная сумка',
                src: ['bag/bag1.jpg'],
              },
              {
                id: 3,
                link: 'https://vk.com/market-185472895?w=product-185472895_9022014%2Fquery',
                title: 'Балаклава',
                src: ['bal/bal1.jpg', 'bal/bal2.jpg'],
              },
              {
                id: 4,
                link: 'https://vk.com/market-185472895?w=product-185472895_4732905%2Fquery',
                title: 'Обмотка',
                src: ['obmotka/obmotka1.jpg', 'obmotka/obmotka2.jpg'],
              },
              {
                id: 5,
                link: 'https://vk.com/market-185472895?w=product-185472895_8098708%2Fquery',
                title: 'Патч',
                src: ['patch/patch1.jpg'],
              },
              {
                id: 6,
                link: 'https://vk.com/market-185472895?w=product-185472895_4166161%2Fquery',
                title: 'Резина',
                src: ['rezina/rezina1.jpg', 'rezina/rezina2.jpg'],
              },
              {
                id: 7,
                link: 'https://vk.com/market-185472895?w=product-185472895_9092069%2Fquery',
                title: 'Труба',
                src: ['truba/truba1.jpg'],
              },
            ]}
          />
          {/* <Gallery /> */}
          <About />
          <Contact />
        </Suspense>
      </I18nextProvider>
    </React.StrictMode>
  );
};

init();
