// import { useRef, useState, useEffect, Suspense } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, Environment, ContactShadows, useGLTF, Html } from '@react-three/drei';
// import * as THREE from 'three';

// interface HeadProps {
//   mouse: React.MutableRefObject<number[]>;
// }

// function Loader() {
//   return (
//     <Html center>
//       <div className="text-white">
//         Loading 3D Model...
//       </div>
//     </Html>
//   );
// }

// function Head({ mouse }: HeadProps) {
//   const group = useRef<THREE.Group>(null);
//   // Using a more reliable model
//   const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/duck/model.gltf');
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!scene) {
//       setError('Failed to load 3D model');
//     }
//   }, [scene]);

//   useFrame((state) => {
//     if (!group.current) return;

//     // Smooth movement
//     const targetRotationX = (mouse.current[1] * Math.PI) / 8;
//     const targetRotationY = (mouse.current[0] * Math.PI) / 4;

//     group.current.rotation.x = THREE.MathUtils.lerp(
//       group.current.rotation.x,
//       targetRotationX,
//       0.1
//     );
//     group.current.rotation.y = THREE.MathUtils.lerp(
//       group.current.rotation.y,
//       targetRotationY,
//       0.1
//     );
//   });

//   if (error) {
//     return (
//       <Html center>
//         <div className="text-red-500">
//           {error}
//         </div>
//       </Html>
//     );
//   }

//   return (
//     <group ref={group} dispose={null}>
//       <primitive 
//         object={scene} 
//         scale={2}
//         position={[0, -1, 0]}
//         rotation={[0, Math.PI, 0]}
//       />
//     </group>
//   );
// }

// function Scene() {
//   const mouse = useRef([0, 0]);
  
//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       mouse.current = [
//         (event.clientX / window.innerWidth) * 2 - 1,
//         -(event.clientY / window.innerHeight) * 2 + 1
//       ];
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <>
//       <color attach="background" args={['#000']} />
//       <fog attach="fog" args={['#000', 5, 15]} />
//       <ambientLight intensity={0.5} />
//       <spotLight
//         position={[5, 5, 5]}
//         angle={0.3}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize-width={1024}
//         shadow-mapSize-height={1024}
//       />
//       <Suspense fallback={<Loader />}>
//         <Head mouse={mouse} />
//         <Environment preset="city" />
//         <ContactShadows
//           position={[0, -2, 0]}
//           opacity={0.7}
//           scale={10}
//           blur={3}
//           far={10}
//           resolution={256}
//           color="#000000"
//         />
//       </Suspense>
//       <OrbitControls
//         enableZoom={false}
//         enablePan={false}
//         minPolarAngle={Math.PI / 2.5}
//         maxPolarAngle={Math.PI / 2}
//         minAzimuthAngle={-Math.PI / 4}
//         maxAzimuthAngle={Math.PI / 4}
//       />
//     </>
//   );
// }

// interface EmojiAvatarProps {
//   className?: string;
// }

// const EmojiAvatar = ({ className = "" }: EmojiAvatarProps) => {
//   return (
//     <div className={`w-full h-[500px] ${className}`}>
//       <Canvas
//         shadows
//         dpr={[1, 2]}
//         camera={{ position: [0, 0, 5], fov: 45 }}
//       >
//         <Scene />
//       </Canvas>
//     </div>
//   );
// };

// // Update preload
// useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/duck/model.gltf');

// export default EmojiAvatar; 