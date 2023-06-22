import React from "react";
import { Header, Footer, Box } from "./components";
import { Canvas } from "@react-three/fiber";

export default function App() {
  return (
    <Canvas id="canvas">
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-2, 0, 0]} />
      <Box position={[2, 0, 0]} />
    </Canvas>
  );
}
