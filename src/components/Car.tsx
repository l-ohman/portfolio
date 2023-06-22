import React from "react";
import {
  BoxGeometry,
  CylinderGeometry,
  Mesh,
  MeshStandardMaterial,
} from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils";
import {
  Geometry,
  Base,
  Addition,
  Subtraction,
  Intersection,
  Difference,
} from "@react-three/csg";

function CarBody() {
  const bodyGeometry = React.useMemo(() => {
    const roof = new BoxGeometry(2.8, 0.8, 2);
    const core = new BoxGeometry(3.5, 0.65, 2);

    roof.translate(0.35, 0.35, 0);
    core.translate(0, 0, 0);

    const body = mergeGeometries([roof, core]);
    return body;
  }, []);

  const subtractiveCylinder = React.useMemo(() => {
    const cylinder = new CylinderGeometry(0.57, 0.57, 3, 16);
    cylinder.rotateX(Math.PI / 2);
    return cylinder;
  }, []);

  return (
    <mesh position={[0, 0.4, 0]}>
      <meshStandardMaterial color="red" />
      <Geometry>
        <Base geometry={bodyGeometry} />

        <Subtraction position={[-1, -0.4, 0]}>
          <primitive object={subtractiveCylinder} />
        </Subtraction>
        <Subtraction position={[1, -0.4, 0]}>
          <primitive object={subtractiveCylinder} />
        </Subtraction>
      </Geometry>
    </mesh>
  );
}

function CarWheels<Mesh>() {
  const wheels = React.useMemo(() => {
    const wheelGeometry = new CylinderGeometry(0.5, 0.5, 0.45, 16);
    wheelGeometry.rotateX(Math.PI / 2);

    const createWheelMesh = () => {
      const material = new MeshStandardMaterial({ color: "black" });
      return new Mesh(wheelGeometry, material);
    };

    return [
      createWheelMesh(),
      createWheelMesh(),
      createWheelMesh(),
      createWheelMesh(),
    ];
  }, []);

  const xOffset = 1;
  const zOffset = 0.9;

  return (
    <>
      <primitive object={wheels[0]} position={[-xOffset, 0, zOffset]} />
      <primitive object={wheels[1]} position={[xOffset, 0, zOffset]} />
      <primitive object={wheels[2]} position={[-xOffset, 0, -zOffset]} />
      <primitive object={wheels[3]} position={[xOffset, 0, -zOffset]} />
    </>
  );
}

export default function Car() {
  return (
    <>
      <CarBody />
      <CarWheels />
    </>
  );
}
