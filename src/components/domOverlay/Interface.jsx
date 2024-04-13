import React, { forwardRef, useEffect, useState } from "react";
import { useConfigurator } from "../../context/Configurator";
import './index.css'

const Interface = forwardRef((props, ref) => {
  const { scale, setScale, rotateModel, setRotateModel, inAR, setInAr, rotateDirection, setRotateDirection } =useConfigurator();

  const [mouseDown, setMouseDown] = useState(false);

const [isInitialXStored, setIsInitialXStored] = useState(false);
const [InitialXStored, setInitialXStored] = useState(null);
useEffect(() => {
    if(mouseDown){
      // console.log(rotateModel)
    setRotateModel(!rotateModel);
    // console.log("dragging",e)
  }
},[mouseDown])

const showEnd = (e) => {
  setMouseDown(false)
  setRotateModel(!rotateModel);
}

const showStart = (e) => {
  setMouseDown(true);
  setIsInitialXStored(true);
  setInitialXStored(e.changedTouches[0].clientX)
}

const showMove = (e) => {
  if(isInitialXStored){
    if(InitialXStored - e.changedTouches[0].clientX > 0){
      setRotateDirection("right");
    }
    else if(InitialXStored - e.changedTouches[0].clientX < 0){
      setRotateDirection("left");
    }
    
  }
  // console.log(e.changedTouches[0].clientX)
}


  return (
    <div onTouchStart={showStart} onTouchMove={showMove} onTouchEnd={showEnd} className={`absolute w-[100%] h-[100%] bottom-[5rem] ${inAR ? 'pointer-events-all' : 'pointer-events-none'}`} ref={ref}>
       <div className=" absolute bottom-[8vh] w[100%]">
         <div className=" justify-center flex items-center w-[90%] gap-[1rem]  pointer-events-auto m-0 p-1">
        {/* <input style={{transform: 'rotate(270deg)'}} onChange={(e) => setScale(e.target.value)} id="myRange" type="range" min="1" max="100" step='10' value={scale} /> */}
        </div>
      </div>
    </div>
  );
});

export default Interface;