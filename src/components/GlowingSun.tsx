"use client";

import React, { useRef } from 'react';
import { TextureLoader, Mesh } from 'three';
import { useLoader, useFrame } from '@react-three/fiber';

const GlowingSun = ({ position, intensity = 10 }: { position: [number, number, number], intensity?: number }) => {
  const texture = useLoader(TextureLoader, '/textures/sun.jpg');
  const meshRef = useRef<Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002; // Adjust this value to change rotation speed
    }
  });

  return (
    <mesh position={position} ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial map={texture} />
      <pointLight intensity={intensity} distance={100} decay={1} />
    </mesh>
  );
};

export default GlowingSun;