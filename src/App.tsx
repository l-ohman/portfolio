import React from "react";
import Car from "./components/Car";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera, OrbitControls } from "@react-three/drei";

export default function App() {
  return (
    <>
      <Canvas camera={{ position: [-4, 1.85, 3.8] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <Car />
        <OrbitControls />
        {/* <OrthographicCamera /> */}
      </Canvas>
    </>
  );
}
