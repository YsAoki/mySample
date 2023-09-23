import { useState, useEffect } from 'react';
import { theme } from '../themes/themes';

export const useMediaQuery = () => {

  const [mq, setMq] = useState({
    isSp: window.matchMedia(`screen and (max-width: ${theme.breakPoints.mobile})`).matches,
    isPc: window.matchMedia(`screen and (min-width: ${parseInt(theme.breakPoints.mobile) + 1}px)`).matches,
  });

  useEffect(() => {
    const onResize = () => {
      setMq({
        isSp: window.matchMedia(`screen and (max-width: ${theme.breakPoints.mobile})`).matches,
        isPc: window.matchMedia(`screen and (min-width: ${parseInt(theme.breakPoints.mobile) + 1}px)`).matches,
      });
    }

    window.addEventListener('resize', onResize);
    window.addEventListener('load', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('load', onResize);
    }
  });

  return mq
}