import React, { useEffect, useRef } from 'react';

interface KakaoAdFitProps {
  unit: string;
  width: number;
  height: number;
  disabled?: boolean;
  top?: number;
}

const KakaoAdFit: React.FC<KakaoAdFitProps> = ({ unit, width, height, disabled = false, top = 0 }) => {
  const scriptElementWrapper = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!disabled) {
      const script = document.createElement('script');
      script.setAttribute('src', 'https://t1.daumcdn.net/kas/static/ba.min.js');
      scriptElementWrapper.current?.appendChild(script);

      return () => {
        const mainBannerAdFit = (window as any).adfit;
        if (mainBannerAdFit) mainBannerAdFit.destroy(unit);
      }
    }
  }, [disabled, unit]);

  return (
    <div style={{ position: 'fixed', top: top, left: 0, right: 0, zIndex: 9 }} ref={scriptElementWrapper}>
      <ins
        className="kakao_ad_area"
        style={{ display: 'none' }}
        data-ad-unit={unit}
        data-ad-width={width}
        data-ad-height={height}
      ></ins>
    </div>
  );
}

export default KakaoAdFit;
