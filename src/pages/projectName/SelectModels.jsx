import React, { useState } from 'react'
import { useModelContext } from '../../context/ModelContext';
import Table from "../../assets/images/Table.png";
import Bench from "../../assets/images/bench.png";



const SelectModels = () => {
const {currentModel, setCurrentModel} = useModelContext();
const handleTable = () => {
    setCurrentModel('table');
    console.log(currentModel);
}

const handleBench = () => {
    setCurrentModel('bench');
    console.log(currentModel);
}

  return (
    <div>
        <h2 className=' text-xl text-black'>Select Models</h2>
        <div className='  border-solid border-4 p-2'>
            <img  src={Table} onClick={handleTable}/>
        </div>
        <br/>
        {/* <div className='  border-solid border-4 p-2'>
            <img src={Bench} onClick={handleBench}/>
        </div> */}
    </div>
  )
}

export default SelectModels