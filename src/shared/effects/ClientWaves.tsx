'use client';

import Waves from './Waves';

export default function ClientWaves() {
  return (
    <Waves
      lineColor="rgba(255, 260, 260, 0.125)"       // softer line color
      backgroundColor="transparent"              // or use a soft gradient bg
      waveSpeedX={0.02}
      waveSpeedY={0.01}
      waveAmpX={40}
      waveAmpY={20}
      friction={0.9}
      tension={0.01}
      maxCursorMove={120}
      xGap={12}
      yGap={36}                           // more vertical space
    />
  );
}
