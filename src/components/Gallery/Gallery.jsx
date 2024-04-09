import { OrbitControls} from "@react-three/drei";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { Fragment, useEffect, useRef, useState } from "react";
import {   useThree } from "@react-three/fiber";
import { Experience } from "../Experience";
import Table from "../Table";
// import * as THREE from 'three';

const Gallery = () => {
  const reticleRef = useRef();
  const modelRef = useRef();



 
const [models, setModels] = useState([]);

const {isPresenting} = useXR();
// const [currentModel, setCurrentModel] = useState(<Table/>);

// const [selected, setSelected] = useState();
// const [scale, setScale] = useState([1,1,1]);

// useEffect(() => {
//   setSelected(currentModel);
// }, [currentModel, setCurrentModel]);


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
}


// const [scale, setScale] = useState(1);

  return (
    <>
        <OrbitControls/>
        <ambientLight/>
        {isPresenting && 
          models.map(({position, id})=>{
            return (
                <mesh ref={modelRef} position={position}>
                    <Table/>
                </mesh>
          );

          })}
          
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

        {/* {!isPresenting && currentModel === "druid" && <Druid />} */}

        {!isPresenting &&  <Experience/> }

        {/* {!isPresenting && currentModel === "bench" && <Bench />} */}


    </>
  )
}

export default Gallery