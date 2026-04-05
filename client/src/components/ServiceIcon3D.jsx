import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Sphere, Torus, Octahedron, Icosahedron } from "@react-three/drei";

const Shape = ({ type = "sphere", color = "#10367d" }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  const variants = {
    "3d": (
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.4, 128, 32]} />
        <MeshDistortMaterial
          color={color}
          speed={2}
          distort={0.4}
          roughness={0}
          metalness={1}
        />
      </mesh>
    ),
    "uiux": (
      <Icosahedron ref={meshRef} args={[1, 1]}>
        <MeshWobbleMaterial
          color={color}
          speed={3}
          factor={0.6}
          roughness={0}
          metalness={0.8}
        />
      </Icosahedron>
    ),
    "branding": (
      <Octahedron ref={meshRef} args={[1, 0]}>
        <MeshDistortMaterial
          color={color}
          speed={2}
          distort={0.3}
          roughness={0.1}
          metalness={0.9}
        />
      </Octahedron>
    ),
    "motion": (
      <Torus ref={meshRef} args={[1, 0.3, 16, 100]}>
        <MeshWobbleMaterial
          color={color}
          speed={4}
          factor={1}
          roughness={0}
          metalness={1}
        />
      </Torus>
    ),
    "art": (
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color={color}
          speed={5}
          distort={0.5}
          roughness={0}
          metalness={1}
        />
      </Sphere>
    ),
    "marketing": (
      <mesh ref={meshRef}>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <MeshWobbleMaterial
          color={color}
          speed={2}
          factor={0.4}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    )
  };

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      {variants[type] || variants["3d"]}
    </Float>
  );
};

const ServiceIcon3D = ({ type, color }) => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }} alpha>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <Shape type={type} color={color} />
      </Canvas>
    </div>
  );
};

export default ServiceIcon3D;
