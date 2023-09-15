import { useState, useEffect } from "react";

type MediaQuery = {
  isSp: boolean;
  isTablet: boolean;
  isPc: boolean;
};

export const useMediaQuery = () => {
  const [mq, setMq] = useState<MediaQuery>({
    isSp: window.matchMedia('(max-width: 575px)').matches,
    isTablet: window.matchMedia('(min-width: 576px) and (max-width: 767px)').matches,
    isPc: window.matchMedia('(min-width: 768px)').matches,
  });

  useEffect(() => {
    const onResize = () => {
      setMq({
        isSp: window.matchMedia('(max-width: 575px)').matches,
        isTablet: window.matchMedia('(min-width: 576px) and (max-width: 767px)').matches,
        isPc: window.matchMedia('(min-width: 768px)').matches,
      });
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('load', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('load', onResize);
    };

  }, [window]);
  return mq;
};