"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial, Sparkles } from "@react-three/drei";

function Crystal() {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1.2}>
      {/* bright inner core */}
      <mesh>
        <sphereGeometry args={[0.42, 24, 24]} />
        <meshBasicMaterial color="#dffcec" />
      </mesh>
      {/* distorted translucent gem */}
      <Icosahedron args={[1.3, 12]}>
        <MeshDistortMaterial
          color="#0a140d"
          emissive="#1f7a4e"
          emissiveIntensity={0.6}
          roughness={0.26}
          metalness={0.5}
          distort={0.32}
          speed={1.5}
          transparent
          opacity={0.92}
        />
      </Icosahedron>
      {/* faceted wireframe */}
      <Icosahedron args={[1.34, 1]}>
        <meshBasicMaterial wireframe color="#58d39a" transparent opacity={0.3} />
      </Icosahedron>
      {/* outer geometric halo */}
      <Icosahedron args={[2.15, 1]}>
        <meshBasicMaterial wireframe color="#2e3a33" transparent opacity={0.35} />
      </Icosahedron>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 40 }}
      dpr={[1, 1.8]}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 3, 4]} intensity={55} color="#3ad18a" />
      <pointLight position={[-4, -2, 2]} intensity={40} color="#7fae9b" />
      <pointLight position={[0, 2, -4]} intensity={22} color="#ffffff" />
      <Crystal />
      <Sparkles count={110} scale={10} size={2.4} speed={0.35} color="#3ad18a" opacity={0.7} />
      <Sparkles count={60} scale={8} size={2} speed={0.3} color="#7fae9b" opacity={0.6} />
    </Canvas>
  );
}
