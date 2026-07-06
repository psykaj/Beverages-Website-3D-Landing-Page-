"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function LiquidDrop({ position, color, speed, distort }: any) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * speed;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * speed * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2} position={position}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={0.5}>
        <MeshDistortMaterial
          color={color}
          envMapIntensity={2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.1}
          roughness={0.2}
          distort={distort}
          speed={speed * 5}
          transmission={0.9}
          thickness={1}
        />
      </Sphere>
    </Float>
  );
}

function MainBottleRepresentation() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating and rotation
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.2;
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* A stylized cylinder representing the premium bottle */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[1.2, 1.2, 4, 64]} />
        <meshPhysicalMaterial
          color="#0a0a0a"
          metalness={0.9}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
      
      {/* Cap */}
      <mesh position={[0, 2.2, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.4, 0.4, 32]} />
        <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.2} />
      </mesh>

      {/* Label Area (Glow) */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.21, 1.21, 2, 64]} />
        <meshStandardMaterial
          color="#E63946"
          emissive="#800020"
          emissiveIntensity={0.5}
          transparent
          opacity={0.9}
        />
      </mesh>
    </group>
  );
}

export function HeroScene() {
  const drops = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8 + 1,
        (Math.random() - 0.5) * 4 - 2,
      ] as [number, number, number],
      color: Math.random() > 0.5 ? "#E63946" : "#2A9D8F",
      speed: Math.random() * 0.5 + 0.1,
      distort: Math.random() * 0.4 + 0.2,
    }));
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} shadows dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} castShadow />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#E63946" />
        
        <MainBottleRepresentation />
        
        {drops.map((drop, i) => (
          <LiquidDrop key={i} {...drop} />
        ))}

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
