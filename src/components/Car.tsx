import React from "react";
import {
  BoxGeometry,
  CylinderGeometry,
  Mesh,
  MeshStandardMaterial,
} from "three";

interface CarGeometry {
  roof: Mesh;
  body: Mesh;
  wheelLF: Mesh;
  wheelLR: Mesh;
  wheelRF: Mesh;
  wheelRR: Mesh;
}

export default function Car() {
  const car = React.useMemo<CarGeometry>(() => {
    const roofGeometry = new BoxGeometry(2.8, 0.7, 1.95);
    const bodyGeometry = new BoxGeometry(3.5, 0.5, 1.95);
    const wheelGeometry = new CylinderGeometry(0.5, 0.5, 0.5, 16);
    wheelGeometry.rotateX(Math.PI / 2);

    const roofMesh = new Mesh(
      roofGeometry,
      new MeshStandardMaterial({ color: "red" })
    );
    const bodyMesh = new Mesh(
      bodyGeometry,
      new MeshStandardMaterial({ color: "red" })
    );
    const createWheelMesh = () =>
      new Mesh(wheelGeometry, new MeshStandardMaterial({ color: "black" }));

    return {
      roof: roofMesh,
      body: bodyMesh,
      wheelLF: createWheelMesh(),
      wheelLR: createWheelMesh(),
      wheelRF: createWheelMesh(),
      wheelRR: createWheelMesh(),
    };
  }, []);

  return (
    <>
      <primitive object={car.roof} position={[0.35, 0.9, 0]} />
      <primitive object={car.body} position={[0, 0.4, 0]} />
      <primitive object={car.wheelLF} position={[-1, 0, 1]} />
      <primitive object={car.wheelLR} position={[1, 0, 1]} />
      <primitive object={car.wheelRF} position={[-1, 0, -1]} />
      <primitive object={car.wheelRR} position={[1, 0, -1]} />
    </>
  );
}
