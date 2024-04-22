import { OrbitControls} from "@react-three/drei";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { Fragment, useEffect, useRef, useState } from "react";
import {   useFrame, useThree } from "@react-three/fiber";
import { Experience } from "../Experience";
import Table from "../3dComponents/Table";
import {BenchExperience} from "../BenchExperience"
import { useModelContext } from "../../context/ModelContext";
import * as THREE from 'three';
import { useConfigurator } from "../../context/Configurator";
import { Raycaster } from "three";
import { Box } from "../3dComponents/Box";

const Gallery = () => {
  const modelRef = useRef();
  
  const [val, setVal] = useState(50); // Initial value
  const prevRefVal = useRef(val);
  const {scale, setScale, rotateModel, setRotateModel, inAr, setInAr, rotateDirection, incDec, missMouseDown, setMissMouseDown} = useConfigurator();

  // useEffect(() => {
  //   console.log("rotateModel",rotateModel)
  // },[rotateModel])

  useEffect(() => {
    if(modelRef.current){
   
      // console.log(modelRef.current)
    // const raycaster = new THREE.Raycaster();
    // const intersections = raycaster.intersectObjects(modelRef.current, true);
    // console.log("intersection", intersections);
  }
  }, [rotateDirection, rotateModel]);



  useEffect(() => {
    // console.log(scale)
      if (scale > val) {
        setVal(scale)
        set_Scale([(scale)/100, (scale)/100, (scale)/100]);
      } else if (scale < val) {
        set_Scale([(scale)/100, (scale)/100, (scale)/100]);
        setVal(scale);
      }
  },[scale])

  const reticleRef = useRef();

 
const [models, setModels] = useState([]);
const [currentPosition, setCurrentPosition] = useState();



const {isPresenting} = useXR();
const {currentModel, setCurrentModel} = useModelContext();
// console.log(scale)


const [mouseDown, setMouseDown] = useState(false);
const [initialX, setInitialX] = useState(false);
const [finalX, setFinalX] = useState(false);

const [initialY, setInitialY] = useState(false);

const [_scale, set_Scale] = useState([0.5,0.5,0.5]);


const [currentStored, setCurrentStored] = useState(false);
const [current, setCurrent] = useState(null);
// Function to calculate rotation based on touch or mouse movement
// Apply rotation to the model
useFrame(() => {
  if(rotateModel) {
    if(modelRef.current){
      if(rotateDirection === "left"){
      modelRef.current.rotation.y += THREE.MathUtils.degToRad(5);
      }
      else if(rotateDirection === "right"){
        modelRef.current.rotation.y -= THREE.MathUtils.degToRad(5);
      }
    }
  }
},[])



useFrame(() => {
  if(rotateModel) {
    if(modelRef.current && incDec === "decrease"){
      // if(initialY < currentY)
      set_Scale([0.99*_scale[0], 0.99*_scale[1], 0.99*_scale[2]]);
    }
    else if(modelRef.current && incDec === "increase"){
      set_Scale([1.01*_scale[0], 1.01*_scale[1], 1.01*_scale[2]]);
    }
  }
},[])

useThree(({camera}) => {
  if(!isPresenting){
    camera.position.z = 3; 
  }
})


useHitTest((hitMatrix, hit) => {
  hitMatrix.decompose(
    reticleRef.current.position,
    reticleRef.current.quaternion,
    reticleRef.current.scale
  );
  reticleRef.current.rotation.set(-Math.PI/2,0,0)
});

const palceModel = (e) => {
  let position = e.intersection.object.position.clone();
  // console.log(position)
  let id = Date.now();
  setModels([{position, id}])
  setCurrentPosition(position);
  reticleRef.current.visible = false;
  setInAr(true);
}


const releaseMouse = () => {
  setInitialX(0)
  setFinalX(0);
  setCurrentStored(false);
  setCurrent(0)
}
const {isModelSelect ,setIsModelSelect} = useConfigurator();
const modelSelected = () =>{
  // setRotateModel(false);
  setIsModelSelect(false);
  console.log("selected")
}
const ModelSelectedEnd = () =>{
  setIsModelSelect(false);
  // console.log("Select end")
}   

const ModelSelectMissed = () => {
  setIsModelSelect(true);
  setMissMouseDown(!missMouseDown);
  // console.log("Miss")
  setRotateModel(false);

}
const [useModel, setUseModel] = useState();

const MoveModel = (e) => {
  setUseModel(e);
  setRotateModel(false);
  if(modelRef.current){
  modelRef.current.position.x = e.intersection.point.x
  modelRef.current.position.z = e.intersection.point.z
}
}

  return (
    <>
        {/* <OrbitControls/> */}
        <ambientLight/>
        {isPresenting  &&
          models.map(({position, id})=>{
            return (
              <Interactive onMove={MoveModel} onSelectMissed={ModelSelectMissed} onSelect={modelSelected} onSelectEnd={ModelSelectedEnd}>
               {/* <Fragment key={id} > */}
                <mesh ref={modelRef} position={currentPosition} scale={_scale}>
                    <Experience/>
                    {/* <Table/> */}
                    {/* <Box/> */}
                </mesh>
                 {/* </Fragment> */}
               </Interactive>
          );
          })
        }

        {isPresenting &&
        (
         <Interactive onSelect={palceModel}>
        <mesh ref={reticleRef} rotation-x = {-Math.PI/2}>
            <ringGeometry args={[0.1, 0.25, 32]}/>
            <meshStandardMaterial color={"white"}/>
        </mesh>

        </Interactive>
        )        
      }
        {!isPresenting && currentModel === "table" &&  <Experience/> }

        {!isPresenting && currentModel === "bench" && <BenchExperience />}
    </>
  )
}

export default Gallery