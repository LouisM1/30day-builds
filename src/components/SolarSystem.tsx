"use client";

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera } from '@react-three/drei';
import Planet from './Planet';
import GlowingSun from './GlowingSun';

const SolarSystem = () => {
  return (
    <Canvas style={{ width: '100vw', height: '100vh' }}>
      <PerspectiveCamera makeDefault position={[-10, 3, 10]} fov={50} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade={false} /> {/* Reduced Stars */}
      <OrbitControls />
      <GlowingSun position={[0, 0, 0]} intensity={15} /> {/* Much brighter Sun */}
      <Planet position={[2, 0, 0]} size={0.034} texture="/textures/mercury.jpg" /> {/* Mercury */}
      <Planet position={[3, 0, 0]} size={0.084} texture="/textures/venus.jpg" /> {/* Venus */}
      <Planet position={[5, 0, 0]} size={0.089} texture="/textures/earth.jpg" /> {/* Earth */}
      <Planet position={[7, 0, 0]} size={0.047} texture="/textures/mars.jpg" /> {/* Mars */}
      <Planet position={[12, 0, 0]} size={1} texture="/textures/jupiter.jpg" /> {/* Jupiter */}
      <Planet position={[18, 0, 0]} size={0.83} texture="/textures/saturn.jpg" /> {/* Saturn */}
      <Planet position={[22, 0, 0]} size={0.36} texture="/textures/uranus.jpg" /> {/* Uranus */}
      <Planet position={[30, 0, 0]} size={0.35} texture="/textures/neptune.jpg" /> {/* Neptune */}
      <Planet position={[40, 0, 0]} size={0.016} texture="/textures/pluto.jpg" /> {/* Pluto */}
    </Canvas>
  );
};

export default SolarSystem;