"use client";

import { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, PresentationControls, RoundedBox, ContactShadows } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import type { Project } from "@/data/projects";
import { makeScreenTexture } from "./screenTexture";
import type { ThreeElements } from "@react-three/fiber";

function Phone({ project, ...props }: { project: Project } & ThreeElements["group"]) {
  const tex = useMemo(() => makeScreenTexture(project), [project.id]);
  return (
    <group {...props}>
      <RoundedBox args={[1.3, 2.62, 0.14]} radius={0.11} smoothness={5}>
        <meshStandardMaterial color="#0e1512" metalness={0.85} roughness={0.32} />
      </RoundedBox>
      <mesh position={[0, 0, 0.076]}>
        <planeGeometry args={[1.15, 2.46]} />
        <meshBasicMaterial map={tex} toneMapped={false} />
      </mesh>
    </group>
  );
}

function Laptop({ project, ...props }: { project: Project } & ThreeElements["group"]) {
  const tex = useMemo(() => makeScreenTexture(project), [project.id]);
  return (
    <group {...props}>
      {/* lid + screen (tilted back from the hinge at origin) */}
      <group rotation={[-0.33, 0, 0]}>
        <RoundedBox args={[3.5, 2.16, 0.1]} radius={0.06} smoothness={4} position={[0, 1.08, 0]}>
          <meshStandardMaterial color="#101a15" metalness={0.85} roughness={0.32} />
        </RoundedBox>
        <mesh position={[0, 1.08, 0.056]}>
          <planeGeometry args={[3.26, 1.94]} />
          <meshBasicMaterial map={tex} toneMapped={false} />
        </mesh>
      </group>
      {/* base */}
      <RoundedBox args={[3.5, 0.12, 2.3]} radius={0.05} smoothness={4} position={[0, -0.03, 1.16]}>
        <meshStandardMaterial color="#101a15" metalness={0.85} roughness={0.4} />
      </RoundedBox>
    </group>
  );
}

export default function DeviceScene({
  phone,
  laptop,
}: {
  phone: Project;
  laptop: Project;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0.3, 8.8], fov: 34 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true }}
      style={{ touchAction: "pan-y" }}
    >
      <color attach="background" args={["#070b09"]} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 5]} intensity={1.3} />
      <pointLight position={[-5, 2, 3]} intensity={60} color="#3ad18a" />
      <pointLight position={[5, -1, 4]} intensity={45} color="#7fae9b" />

      <PresentationControls
        global
        snap
        polar={[-0.3, 0.3]}
        azimuth={[-0.7, 0.7]}
      >
        <Float speed={1.3} rotationIntensity={0.3} floatIntensity={0.6}>
          <group position={[0.2, -0.4, 0]} scale={0.92}>
            <Laptop project={laptop} position={[-1.65, -0.35, 0]} rotation={[0, 0.3, 0]} />
            <Phone project={phone} position={[2.05, 0.15, 0.6]} rotation={[0, -0.35, 0.02]} />
          </group>
        </Float>
      </PresentationControls>

      <ContactShadows position={[0, -1.7, 0]} opacity={0.45} scale={12} blur={2.6} far={4} color="#000000" />

      <EffectComposer>
        <Bloom luminanceThreshold={0.25} luminanceSmoothing={0.9} intensity={0.75} mipmapBlur />
      </EffectComposer>
    </Canvas>
  );
}
