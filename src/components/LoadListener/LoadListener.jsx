/* eslint-disable functional/no-expression-statements */
import { useEffect } from 'react';

const LoadListener = () => {
  useEffect(() => () => {
    const stubEl = document.getElementById('stub');
    console.log(stubEl);
    stubEl.classList.add('stub-animation');
  });
  return (
    <div>
      Loading...
    </div>
  );
};

export default LoadListener;
