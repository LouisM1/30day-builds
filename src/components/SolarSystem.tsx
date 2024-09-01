"use client";

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Planet from './Planet';

const SolarSystem = () => {
  return (
    <Canvas style={{ width: '100vw', height: '100vh' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars />
      <OrbitControls />
      <Planet position={[0, 0, 0]} size={1} color="yellow" /> {/* Sun */}
      <Planet position={[5, 0, 0]} size={0.5} color="blue" /> {/* Earth */}
      <Planet position={[8, 0, 0]} size={0.3} color="red" /> {/* Mars */}
      {/* Add more planets as needed */}
    </Canvas>
  );
};

export default SolarSystem;