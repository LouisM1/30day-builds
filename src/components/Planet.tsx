"use client";

import React from 'react';
import { MeshProps, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface PlanetProps extends MeshProps {
  size: number;
  color: string;
}

const Planet: React.FC<PlanetProps> = ({ size, color, ...props }) => {
  const mesh = React.useRef<Mesh>(null!);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh {...props} ref={mesh}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Planet;