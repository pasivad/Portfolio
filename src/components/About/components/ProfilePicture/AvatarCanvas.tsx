'use client'

import { Suspense, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, OrbitControls, useAnimations, useGLTF } from '@react-three/drei';
import { Group } from 'three';

function Avatar() {
  const group = useRef<Group>(null);
  const { scene, animations } = useGLTF('/avatar.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const first = Object.values(actions)[0];
    if (first) {
      first.reset().fadeIn(0.4).play();
    }
  }, [actions]);

  return (
    <primitive
      ref={group}
      object={scene}
    />
  );
}

useGLTF.preload('/avatar.glb');

export default function AvatarCanvas() {
  return (
    <Canvas
      shadows
      className="h-full w-full touch-none"
      camera={{ position: [0, 1.35, 2.1], fov: 42, near: 0.1, far: 48 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <directionalLight
        position={[2.5, 4.5, 3.5]}
        intensity={2.2}
        castShadow
        shadow-mapSize={[1024, 1024]}
        color="#ffe8d0"
      />
      <directionalLight
        position={[-2.5, 2, 2]}
        intensity={1.0}
        color="#c8d8f0"
      />
      <directionalLight
        position={[0, 3, -3]}
        intensity={0.6}
        color="#f0e8ff"
      />
      <ambientLight
        intensity={1.2}
        color="#f8f4f0"
      />
      <pointLight
        position={[0, 1.6, 2.2]}
        intensity={0.8}
        color="#ffe0b0"
      />

      <Suspense fallback={null}>
        <Avatar />
      </Suspense>

      <ContactShadows
        position={[0, 0, 0]}
        opacity={0.38}
        scale={8}
        blur={2.2}
        far={3}
      />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        target={[0, 1.32, 0]}
        autoRotate
        autoRotateSpeed={2}
        minPolarAngle={Math.PI / 3.2}
        maxPolarAngle={Math.PI / 2.1}
      />
    </Canvas>
  );
}
