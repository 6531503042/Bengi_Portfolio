"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

class Grad {
  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x; this.y = y; this.z = z;
  }
  dot2(x: number, y: number) { return this.x * x + this.y * y; }
}

class Noise {
  grad3: Grad[];
  p: number[];
  perm: number[];
  
  constructor(seed = 0) {
    this.grad3 = [
      new Grad(1, 1, 0), new Grad(-1, 1, 0), new Grad(1, -1, 0), new Grad(-1, -1, 0),
      new Grad(1, 0, 1), new Grad(-1, 0, 1), new Grad(1, 0, -1), new Grad(-1, 0, -1),
      new Grad(0, 1, 1), new Grad(0, -1, 1), new Grad(0, 1, -1), new Grad(0, -1, -1)
    ];
    this.p = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30,
      69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219,
      203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74,
      165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105,
      92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208,
      89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226,
      250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182,
      189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43,
      172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97,
      228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239,
      107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254,
      138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];

    this.perm = new Array(512);
    this.seed(seed);
  }

  seed(seed: number) {
    if (seed > 0 && seed < 1) {
      seed *= 65536;
    }

    seed = Math.floor(seed);
    if (seed < 256) {
      seed |= seed << 8;
    }

    for (let i = 0; i < 256; i++) {
      const v = (i & 1) ? (this.p[i] ^ (seed & 255)) : (this.p[i] ^ ((seed >> 8) & 255));
      this.perm[i] = this.perm[i + 256] = v;
    }
  }

  fade(t: number) { return t * t * t * (t * (t * 6 - 15) + 10); }
  lerp(a: number, b: number, t: number) { return (1 - t) * a + t * b; }
  perlin2(x: number, y: number) {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    x -= Math.floor(x);
    y -= Math.floor(y);
    const u = this.fade(x);
    const v = this.fade(y);
    const A = this.perm[X] + Y, AA = this.perm[A], AB = this.perm[A + 1];
    const B = this.perm[X + 1] + Y, BA = this.perm[B], BB = this.perm[B + 1];

    return this.lerp(
      this.lerp(this.grad3[this.perm[AA] % 12].dot2(x, y), this.grad3[this.perm[BA] % 12].dot2(x - 1, y), u),
      this.lerp(this.grad3[this.perm[AB] % 12].dot2(x, y - 1), this.grad3[this.perm[BB] % 12].dot2(x - 1, y - 1), u),
      v
    );
  }
}

interface WavesProps {
  lineColor?: string;
  backgroundColor?: string;
  waveSpeedX?: number;
  waveSpeedY?: number;
  waveAmpX?: number;
  waveAmpY?: number;
  xGap?: number;
  yGap?: number;
  friction?: number;
  tension?: number;
  maxCursorMove?: number;
  style?: React.CSSProperties;
  className?: string;
}

interface Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
}

const Waves = ({
  lineColor = "#fff",
  backgroundColor = "rgba(255, 255, 255, 0.2)",
  waveSpeedX = 0.02,
  waveSpeedY = 0.01,
  waveAmpX = 40,
  waveAmpY = 20,
  xGap = 12,
  yGap = 36,
  friction = 0.9,
  tension = 0.01,
  maxCursorMove = 120,
  style = {},
  className = ""
}: WavesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const boundingRef = useRef<DOMRect | null>(null);
  const noiseRef = useRef(new Noise(Math.random()));
  const linesRef = useRef<Point[][]>([]);
  const mouseRef = useRef({
    x: -10, y: 0, lx: 0, ly: 0, sx: 0, sy: 0, v: 0, vs: 0, a: 0, set: false
  });

  const configRef = useRef({
    lineColor, waveSpeedX, waveSpeedY, waveAmpX, waveAmpY,
    friction, tension, maxCursorMove, xGap, yGap
  });
  const frameIdRef = useRef<number | null>(null);

  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const frameRef = useRef<number | null>(null);
  const pointsRef = useRef<Point[][]>([]);
  const centerRef = useRef<[number, number]>([0, 0]);
  const targetRef = useRef<[number, number]>([0, 0]);
  const timeRef = useRef<number>(0);
  const widthRef = useRef<number>(0);
  const heightRef = useRef<number>(0);

  useEffect(() => {
    configRef.current = { lineColor, waveSpeedX, waveSpeedY, waveAmpX, waveAmpY, friction, tension, maxCursorMove, xGap, yGap };
  }, [lineColor, waveSpeedX, waveSpeedY, waveAmpX, waveAmpY, friction, tension, maxCursorMove, xGap, yGap]);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let waves: Wave[] = [];
    const numWaves = 3;
    const waveColors = ['rgba(0, 112, 243, 0.2)', 'rgba(0, 112, 243, 0.15)', 'rgba(0, 112, 243, 0.1)'];

    class Wave {
      amplitude: number;
      period: number;
      phase: number;
      color: string;

      constructor(amplitude: number, period: number, phase: number, color: string) {
        this.amplitude = amplitude;
        this.period = period;
        this.phase = phase;
        this.color = color;
      }

      draw(ctx: CanvasRenderingContext2D, width: number, height: number, time: number) {
        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let x = 0; x < width; x++) {
          const y = height / 2 +
            this.amplitude * Math.sin((x / this.period) + this.phase + time / 1000);
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    function initWaves() {
      waves = [];
      for (let i = 0; i < numWaves; i++) {
        const amplitude = 20 + i * 5;
        const period = 200 + i * 20;
        const phase = i * Math.PI / 2;
        waves.push(new Wave(amplitude, period, phase, waveColors[i]));
      }
    }

    function setSize() {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      boundingRef.current = rect;
      canvas.width = rect.width;
      canvas.height = rect.height;
    }

    function animate(time: number) {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      waves.forEach(wave => {
        wave.draw(ctx, canvas.width, canvas.height, time);
      });

      frameIdRef.current = requestAnimationFrame(animate);
    }

    function handleResize() {
      setSize();
    }

    initWaves();
    setSize();
    frameIdRef.current = requestAnimationFrame(animate);
    window.addEventListener('resize', handleResize);

    return () => {
      if (frameIdRef.current) {
        cancelAnimationFrame(frameIdRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      style={{
        backgroundColor,
        ...style
      }}
      className={`absolute top-0 left-0 w-full h-full overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="absolute top-0 left-0 bg-[#160000] rounded-full w-[0.5rem] h-[0.5rem]"
        style={{
          transform: "translate3d(calc(var(--x) - 50%), calc(var(--y) - 50%), 0)",
          willChange: "transform"
        }}
      />
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
      />
    </motion.div>
  );
};

export default Waves; 