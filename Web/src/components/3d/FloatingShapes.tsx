"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei";
import * as THREE from "../../../node_modules/@types/three";

function FloatingTorus({
  position,
  scale,
  color,
  speed,
}: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.7}
          distort={0.2}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function FloatingSphere({
  position,
  scale,
  color,
  speed,
}: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshWobbleMaterial
          color={color}
          transparent
          opacity={0.6}
          factor={0.3}
          speed={1}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
    </Float>
  );
}

function FloatingOctahedron({
  position,
  scale,
  color,
  speed,
}: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.4;
      meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.3;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.5}
          distort={0.15}
          speed={3}
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>
    </Float>
  );
}

function FloatingIcosahedron({
  position,
  scale,
  color,
  speed,
}: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.15;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.9}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshWobbleMaterial
          color={color}
          transparent
          opacity={0.55}
          factor={0.2}
          speed={1.5}
          roughness={0.35}
          metalness={0.65}
        />
      </mesh>
    </Float>
  );
}

function Particles({ count = 100 }: { count?: number }) {
  const points = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null!);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#ff6b6b"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function Scene({ isMobile }: { isMobile: boolean }) {
  const primaryColor = "#ff6b6b";
  const primaryLight = "#ff8787";
  const primaryDark = "#f44336";

  if (isMobile) {
    return (
      <>
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={0.6}
          color="#ffffff"
        />
        <directionalLight
          position={[-10, -10, -5]}
          intensity={0.2}
          color={primaryLight}
        />
        <pointLight position={[0, 0, 5]} intensity={0.4} color={primaryColor} />

        <Particles count={40} />

        <FloatingTorus
          position={[-1.7, 0.8, -2]}
          scale={0.45}
          color={primaryColor}
          speed={0.5}
        />

        <FloatingTorus
          position={[1.6, -0.9, -1.7]}
          scale={0.5}
          color={primaryLight}
          speed={0.7}
        />

        <FloatingIcosahedron
          position={[0, 2.4, -2.2]}
          scale={0.4}
          color={primaryColor}
          speed={0.6}
        />

        <FloatingOctahedron
          position={[1, -2.7, -2.5]}
          scale={0.6}
          color={primaryDark}
          speed={0.7}
        />

        <FloatingSphere
          position={[-1.7, -2.7, -3.0]}
          scale={0.3}
          color={primaryLight}
          speed={0.8}
        />

        <FloatingSphere
          position={[1.8, 1.6, -3.2]}
          scale={0.35}
          color={primaryDark}
          speed={0.55}
        />
      </>
    );
  }

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={0.8}
        color="#ffffff"
      />
      <directionalLight
        position={[-10, -10, -5]}
        intensity={0.3}
        color={primaryLight}
      />
      <pointLight position={[0, 0, 5]} intensity={0.5} color={primaryColor} />

      <Particles count={80} />

      <FloatingTorus
        position={[-4.5, 2, -3]}
        scale={0.8}
        color={primaryColor}
        speed={0.5}
      />
      <FloatingSphere
        position={[4, 0, -2]}
        scale={0.6}
        color={primaryLight}
        speed={0.7}
      />
      <FloatingOctahedron
        position={[-4, -2, -4]}
        scale={0.5}
        color={primaryDark}
        speed={0.6}
      />
      <FloatingIcosahedron
        position={[3, 2.5, -3]}
        scale={0.55}
        color={primaryColor}
        speed={0.45}
      />
      <FloatingSphere
        position={[-6, 0, -5]}
        scale={0.5}
        color={primaryLight}
        speed={0.8}
      />
      <FloatingTorus
        position={[5, -2, -4]}
        scale={0.45}
        color={primaryLight}
        speed={0.55}
      />
      <FloatingIcosahedron
        position={[3, -4, -6]}
        scale={0.55}
        color={primaryDark}
        speed={0.65}
      />
    </>
  );
}

export function FloatingShapes3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <Canvas
        camera={{
          position: isMobile ? [0, 0, 6] : [0, 0, 8],
          fov: isMobile ? 50 : 45,
        }}
        style={{ background: "transparent" }}
        dpr={isMobile ? 1 : [1, 2]}
      >
        <Scene isMobile={isMobile} />
      </Canvas>
    </div>
  );
}
