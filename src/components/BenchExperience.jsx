import { OrbitControls, Stage } from "@react-three/drei";
import Bench from "./3dComponents/Bench"

export const BenchExperience = () => {
  return (
<>
      <Stage 
      intensity={1.5} 
      environment={null} 
      // shadows={{
      //     type: "accumulative",
      //     color: "#d9afd9",
      //     colorBlend: 2,
      //     opacity: 2,
      //   }}
        adjustCamera={2}
      >

      <Bench/>

      </Stage>
      <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2}
      />
      <ambientLight/>
    </>
  );
};

