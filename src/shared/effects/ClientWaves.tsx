'use client';

import Waves from './Waves';

// export default function ClientWaves() {
//   return (
//     <Waves
//       lineColor="rgba(255, 255, 255, 0.1)"
//       backgroundColor="transparent"
//       waveSpeedX={0.02}
//       waveSpeedY={0.01}
//       waveAmpX={40}
//       waveAmpY={20}
//       friction={0.9}
//       tension={0.01}
//       maxCursorMove={120}
//       xGap={12}
//       yGap={36}
//     />
//   );
// }

export default function ClientWaves(props: any) {
  return <Waves {...props} />;
}