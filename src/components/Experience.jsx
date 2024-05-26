import {  OrbitControls, Stage } from "@react-three/drei";
import Table from "./3dComponents/Table"
import Lamp from "./3dComponents/Lamp";
import { Box } from "./3dComponents/Box";
import Hotel from "./3dComponents/Hotels"
import Printer from "./3dComponents/Printer"
import PC from "./3dComponents/PC"
import Arm from './3dComponents/Arm'
import DoubleTable from './3dComponents/DoubleTable'
import { useModelContext } from "../context/ModelContext";
import { useEffect } from "react";


export const Experience = () => {

const {currentModel, setCurrentModel, currentInstrument, setCurrentInstrument} = useModelContext();

// useEffect(() => {
//   console.log("useeff",currentModel)
// },[currentModel, setCurrentModel])

  return (
<>
<ambientLight/>

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

      {currentModel && currentModel === 'table' && <Table/>}
      {currentModel && currentModel === 'doubletable' && <DoubleTable/>}

      {currentInstrument && currentInstrument === 'hotel' && <Hotel/>}
      {currentInstrument && currentInstrument === 'lamp' && <Lamp/>}
      {currentInstrument && currentInstrument === 'pc' && <PC/>}
      {currentInstrument && currentInstrument === 'arm' && <Arm/>}
      {currentInstrument && currentInstrument === 'printer' && <Printer/>}




{/* <Hotel/> */}
{/* <Table/> */}
{/* <DoubleTable/> */}
{/* <Lamp/> */}
{/* <Box/> */}
{/* <PC/> */}
{/* <Arm/> */}
      
      
      {/* </Stage> */}
      <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};

