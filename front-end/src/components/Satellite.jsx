import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";

const Satellite = () => {
  const satelliteRef = useRef();

  // Continuous rotation animation
  useFrame(() => {
    if (satelliteRef.current) {
      satelliteRef.current.rotation.y += 0.02;  // Speed up the rotation
      satelliteRef.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh ref={satelliteRef} position={[0, 0, -3]}>
      {/* Satellite body - glowing wobble sphere */}
      <sphereGeometry args={[0.3, 32, 32]} />
      <MeshWobbleMaterial
        color="#00ffff"
        wireframe
        factor={1}   // Wobble intensity
        speed={2}    // Wobble speed
      />

      {/* Right solar panel */}
      <mesh position={[0.8, 0, 0]}>
        <boxGeometry args={[1, 0.1, 0.3]} />
        <meshStandardMaterial color="cyan" transparent opacity={0.7} />
      </mesh>

      {/* Left solar panel */}
      <mesh position={[-0.8, 0, 0]}>
        <boxGeometry args={[1, 0.1, 0.3]} />
        <meshStandardMaterial color="cyan" transparent opacity={0.7} />
      </mesh>
    </mesh>
  );
};

export default Satellite;

