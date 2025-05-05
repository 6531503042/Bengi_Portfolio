'use client';

import { memo, useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Waves with no SSR
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
  const initialCheckPerformed = useRef(false);

  useEffect(() => {
    // Only run once on mount
    if (!initialCheckPerformed.current) {
      setMounted(true);
      initialCheckPerformed.current = true;
      
      // Check screen size
      const checkScreenSize = () => {
        setIsSmallScreen(window.innerWidth < 768); // Tablet-sized breakpoint
      };

      // More efficient performance check
      const checkPerformance = () => {
        try {
          // Check processor cores - less strict to allow more devices
          const lowCores = navigator.hardwareConcurrency !== undefined && 
            navigator.hardwareConcurrency <= 2;
          
          // Check for mobile or tablet
          const isMobileOrTablet = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          );
          
          // More nuanced check that allows tablets but restricts old phones
          setIsLowPerformance(lowCores && isMobileOrTablet && window.innerWidth < 500);
        } catch (e) {
          // Fallback - if any error, assume it's not low performance
          setIsLowPerformance(false);
        }
      };
      
      checkScreenSize();
      checkPerformance();
      
      // Only add resize listener if needed
      const handleResize = () => {
        checkScreenSize();
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  if (!mounted) {
    return null;
  }

  // For small screens, adjust parameters to improve performance while maintaining visual quality
  const adjustedProps = isSmallScreen ? {
    ...props,
    xGap: Math.max(props.xGap * 1.75, 30),  // Increase gap but keep some minimum
    yGap: Math.max(props.yGap * 1.75, 80),  // Increase gap but keep some minimum
    waveAmpX: props.waveAmpX * 0.7,        // Reduce amplitude slightly
    waveAmpY: props.waveAmpY * 0.7,        // Reduce amplitude slightly
    waveSpeedX: props.waveSpeedX * 0.8,    // Slightly slower for better performance
    waveSpeedY: props.waveSpeedY * 0.8,    // Slightly slower for better performance
  } : props;

  // Only render on capable devices
  if (isLowPerformance) {
    return null;
  }

  return <Waves {...adjustedProps} />;
};

export default memo(ClientWaves); 