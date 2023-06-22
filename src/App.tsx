import React from "react";
import { Car } from "./components";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera, OrbitControls } from "@react-three/drei";

export default function App() {
  return (
    <Canvas camera={{ position: [-4, 2.5, 4] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Car />
      <OrbitControls />
    </Canvas>
  );
}
