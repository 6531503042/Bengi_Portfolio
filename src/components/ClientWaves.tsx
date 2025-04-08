'use client';

import dynamic from 'next/dynamic';

const Waves = dynamic(() => import('./effects/Waves'), { ssr: false });

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
  return <Waves {...props} />;
};

export default ClientWaves; 