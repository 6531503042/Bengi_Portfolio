'use client';

import { memo, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Waves = dynamic(() => import('./Waves'), { 
  ssr: false,
  loading: () => null
});

interface ClientWavesProps {
  lineColor: string;
  backgroundColor: string;
  waveSpeedX: number;
  waveSpeedY: number;
  waveAmpX: number;
  waveAmpY: number;
  friction: number;
  tension: number;
  maxCursorMove: number;
  xGap: number;
  yGap: number;
}

const ClientWaves = (props: ClientWavesProps) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check screen size
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    // Basic performance check
    const checkPerformance = () => {
      // Check if the device has a low-performance CPU
      const isLowEnd = 
        navigator.hardwareConcurrency !== undefined && 
        navigator.hardwareConcurrency < 4;
      
      // Check if device is mobile
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
      
      setIsLowPerformance(isLowEnd || isMobile);
    };
    
    checkScreenSize();
    checkPerformance();
    
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Don't render on small screens or low-performance devices
  if (!mounted || isSmallScreen || isLowPerformance) {
    return null;
  }

  // For small screens, reduce the complexity
  const adjustedProps = isSmallScreen ? {
    ...props,
    xGap: props.xGap * 1.5,
    yGap: props.yGap * 1.5,
    waveAmpX: props.waveAmpX * 0.7,
    waveAmpY: props.waveAmpY * 0.7
  } : props;

  return <Waves {...adjustedProps} />;
};

export default memo(ClientWaves); 