import React, { forwardRef, useEffect, useState } from "react";
import { useConfigurator } from "../../context/Configurator";
import './index.css'

const Interface = forwardRef((props, ref) => {
  const { scale, setScale } =useConfigurator();

  return (
    <div  className=" absolute w-[100%] h-[100%] bottom-[5rem] pointer-events-none" ref={ref}>
       <div className=" absolute bottom-[8vh] w[100%]">
         <div className=" justify-center flex items-center w-[90%] gap-[1rem]  pointer-events-auto m-0 p-1">

        <input style={{transform: 'rotate(270deg)'}} onChange={(e) => setScale(e.target.value)} id="myRange" type="range" min="1" max="100" step='10' value={scale} />
        </div>
      </div>
    </div>
  );
});

export default Interface;