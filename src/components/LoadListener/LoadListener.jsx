/* eslint-disable functional/no-expression-statements */
import { useEffect } from 'react';

const LoadListener = () => {
  useEffect(() => {
    const stubEl = document.getElementById('stub');
    return stubEl.classList.add('stub-animation');
  });
};

export default LoadListener;
