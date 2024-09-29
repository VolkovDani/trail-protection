/* eslint-disable functional/no-expression-statements */
import { useEffect } from 'react';

const LoadListener = () => {
  useEffect(() => {
    const stubEl = document.getElementById('stub');
    stubEl.addEventListener('animationend', () => {
      stubEl.remove();
    });
    return stubEl.classList.add('stub-animation');
  });
};

export default LoadListener;
