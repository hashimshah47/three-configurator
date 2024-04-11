import { OrbitControls} from "@react-three/drei";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { Fragment, useEffect, useRef, useState } from "react";
import {   useFrame, useThree } from "@react-three/fiber";
import { Experience } from "../Experience";
import Table from "../3dComponents/Table";
import {BenchExperience} from "../BenchExperience"
import { useModelContext } from "../../context/ModelContext";
import * as THREE from 'three';


const Gallery = () => {

  
  const reticleRef = useRef();
  const modelRef = useRef();
 
const [models, setModels] = useState([]);
const [currentPosition, setCurrentPosition] = useState();



const {isPresenting} = useXR();
const {currentModel, setCurrentModel} = useModelContext();



const [mouseDown, setMouseDown] = useState(false);
const [initialX, setInitialX] = useState(false);
const [finalX, setFinalX] = useState(false);

const [currentStored, setCurrentStored] = useState(false);
const [current, setCurrent] = useState(null);
// Function to calculate rotation based on touch or mouse movement
// Apply rotation to the model
useFrame(() => {
  if(mouseDown) {
    if(modelRef.current && initialX!== current){
      console.log(initialX, current)
      modelRef.current.rotation.y += THREE.MathUtils.degToRad(initialX/100);
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
  let id = Date.now();
  setModels([{position, id}])
  setCurrentPosition(position);
  reticleRef.current.visible = false;
}

const showStart = (e) => {
  setInitialX(0);
  if (!currentStored) {
    setMouseDown(true);
    const val = parseInt(e.intersection?.point.x * 100000/120);
    setCurrent(val)
    setInitialX(val);
    setCurrentStored(true);
  } else {
    setMouseDown(true)
    const val = parseInt(e.intersection?.point.x * 100000/120);
    setInitialX(val-current);
  }
};
const showEnd = (e) =>{
  setMouseDown(false)
  setInitialX(0)
  releaseMouse();
  console.log(initialX)
}

const releaseMouse = () => {
  setInitialX(0)
  setFinalX(0);
  setCurrentStored(false);
  setCurrent(0)
}

  return (
    <>
        {/* <OrbitControls/> */}
        <ambientLight/>
        {isPresenting && 
          models.map(({position, id})=>{
            return (
              <Interactive  onMove={showStart} onSelectEnd={showEnd} onSelectMissed={showEnd}>
              <Fragment key={id} >
                <mesh on ref={modelRef} position={position} scale={[0.5,0.5,0.5]}>
                    <Table/>
                </mesh>
                </Fragment>
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