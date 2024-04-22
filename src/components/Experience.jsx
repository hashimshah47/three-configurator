import {  OrbitControls, Stage } from "@react-three/drei";
import Table from "./3dComponents/Table"
import { Box } from "./3dComponents/Box";

export const Experience = () => {
  return (
<>
      {/* <Stage 
      intensity={1.5} 
      environment={null} 
      // shadows={{
      //     type: "accumulative",
      //     color: "#d9afd9",
      //     colorBlend: 2,
      //     opacity: 2,
      //   }}
        adjustCamera={2}
      > */}

      <Table/>
      <Box/>

      {/* </Stage> */}
      <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2}
      />
      <ambientLight/>
    </>
  );
};

