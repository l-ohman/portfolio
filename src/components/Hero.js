import React from "react";
import styled from "styled-components";
// import { Canvas, useThree } from "@react-three/fiber";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const HeroContainer = styled.div`
  /* border: 1px solid red; */
  padding: 0.7em;
  /* background: #3f3f90; */
  position: absolute;
  top: 3.5em /*0*/;
  left: 0;

  width: 100vw;
  height: 100vh;

  h1 {
    /* border: 1px solid red; */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    /* color: white; */
  }
`;

export default function Hero() {
  // const cubes = new Array(50).fill(0);
  return (
    <HeroContainer>
      <h1>Hi, I'm Jake.</h1>

      {/* <Canvas frameloop="demand">
        <CameraController />

        {cubes.map((itm, i) => (
          <mesh position={[0, 0, i * 2]} key={i}>
            <boxGeometry args={[2, 2, 2]} />
            <meshBasicMaterial color="red" />
          </mesh>
        ))}
      </Canvas> */}
    </HeroContainer>
  );
}

// function CameraController() {
//   const { camera, gl } = useThree();

//   React.useEffect(() => {
//     camera.position.set(30, 18, 30);

//     const controls = new OrbitControls(camera, gl.domElement);
//     controls.minDistance = 1;
//     controls.maxDistance = 120;

//     return () => {
//       controls.dispose();
//     };
//   }, [camera, gl]);

//   return <></>;
// }
