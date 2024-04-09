import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useConfigurator } from "../context/Configurator";
import { useState } from "react";

export const Box = () => {
  const { nodes } = useGLTF("./models/Table.gltf");
  const tableBoundingBox = new THREE.Box3().setFromObject(nodes.Plate);
  const tableHeight = tableBoundingBox.max.y;
  const tableWidth = tableBoundingBox.max.x;

  const { box } = useConfigurator();
  const [currentColor, setCurrentColor] = useState("white");
//   console.log(box);

const boxSelected = () => {
    setCurrentColor(0x2c9e93);
}

  return (
    <>
      {box && (
        <>
          {" "}
          <mesh
          onClick={boxSelected}
            position={[parseInt(tableWidth / 2) + 0.5, tableHeight + 0.5, 0]}
          >
            <boxGeometry />
            <meshStandardMaterial color={currentColor}/>
          </mesh>
          <OrbitControls
            makeDefault
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 2}
          />
          <ambientLight />
        </>
      )}
    </>
  );
};
