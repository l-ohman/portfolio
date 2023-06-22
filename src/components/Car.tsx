import React from "react";
import {
  BoxGeometry,
  CylinderGeometry,
  Mesh,
  MeshStandardMaterial,
  Vector3,
} from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils";
import { Geometry, Base, Subtraction } from "@react-three/csg";
import { useControls } from "leva";

interface CarBodyProps {
  carWidth: number;
  carLength: number;
  carHeight: number;
  clearance: number;
}

function CarBody({ carWidth, carLength, carHeight, clearance }: CarBodyProps) {
  const body = React.useMemo(() => {
    const width = 2 * carWidth;
    const length = carLength * 3.5;

    const roof = new BoxGeometry(length * 0.8, carHeight * 0.8, width);
    const core = new BoxGeometry(length, carHeight * 0.65, width);

    roof.translate(0.35 * carLength, 0.35 * carHeight, 0);
    core.translate(0, 0, 0);

    const body = mergeGeometries([roof, core]);
    return body;
  }, [carWidth, carLength, carHeight]);

  const height = React.useMemo(() => {
    const height = carHeight / 2 - 0.5;
    return height + (clearance - 0.6);
  }, [carHeight, clearance]);

  return (
    <mesh position={[0, height, 0]}>
      <meshStandardMaterial color="red" />
      <primitive object={body} />
    </mesh>
  );
}

interface CarWheelsProps {
  tireWidth: number;
  tireSize: number;
  carWidth: number;
  carLength: number;
}

function CarWheels({
  tireWidth,
  tireSize,
  carWidth,
  carLength,
}: CarWheelsProps) {
  const wheels = React.useMemo(() => {
    const width = 0.45 * tireWidth;
    const size = 0.5 * tireSize;

    const wheelGeometry = new CylinderGeometry(size, size, width, 16);
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
  }, [tireWidth, tireSize]);

  const positions = React.useMemo(() => {
    const xOffset = 1 * carLength;
    const zOffset = 0.9 * carWidth;

    return [
      new Vector3(xOffset, 0, zOffset),
      new Vector3(xOffset, 0, -zOffset),
      new Vector3(-xOffset, 0, zOffset),
      new Vector3(-xOffset, 0, -zOffset),
    ];
  }, [carLength, carWidth]);

  return (
    <>
      <primitive object={wheels[0]} position={positions[0]} />
      <primitive object={wheels[1]} position={positions[1]} />
      <primitive object={wheels[2]} position={positions[2]} />
      <primitive object={wheels[3]} position={positions[3]} />
    </>
  );
}

export default function Car() {
  const defaultValue = {
    value: 1,
    min: 0.1,
    max: 3,
  };

  const { tireWidth, tireSize, carWidth, carLength, carHeight, clearance } =
    useControls({
      tireWidth: {
        value: 1,
        min: 0.1,
        max: 2.5,
      },
      tireSize: {
        value: 1,
        min: 0.5,
        max: 1.5,
      },
      carWidth: {
        value: 1,
        min: 0.3,
        max: 2,
      },
      carLength: {
        value: 1,
        min: 0.5,
        max: 2,
      },
      carHeight: defaultValue,
      // yeah, this needs a suspension system i think
      clearance: {
        value: 1,
        min: 0.7,
        max: 1.5,
      },
    });

  return (
    <>
      <CarBody
        carWidth={carWidth}
        carLength={carLength}
        carHeight={carHeight}
        clearance={clearance}
      />
      <CarWheels
        tireWidth={tireWidth}
        tireSize={tireSize}
        carWidth={carWidth}
        carLength={carLength}
      />
    </>
  );
}
