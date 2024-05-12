import React from 'react'
import { useModelContext } from '../../context/ModelContext';
import Table from "../../assets/images/table.jpg";
import DoubleTable  from "../../assets/images/DoubleTable.jpg";
// import Table from "../../assets/images/table.png";
// import Table from "../../assets/images/table.png";
// import Table from "../../assets/images/table.png";
// import Table from "../../assets/images/table.png";

// import Bench from "../../assets/images/bench.png";



const SelectModels = () => {
const {currentModel, setCurrentModel} = useModelContext();


const handleTable = () => {
    setCurrentModel('table');
    console.log(currentModel);
}
const handleHotel = () => {
  setCurrentModel('hotel');
  console.log(currentModel);
}

const handleDoubleTable = () => {
  setCurrentModel('doubletable');
  console.log(currentModel);
}



  return (
    <>
        <h2 className=' text-xl text-black'>Tables</h2>
    
    <div className='flex'>


        <div className=' rounded-xl'>
            <img className=' rounded-lg h-40 m-2'  src={Table} onClick={handleTable}/>
        </div>
        <br/>
        <div className=' rounded-xl'>
            <img className='rounded-lg h-40 m-2' src={DoubleTable} onClick={handleDoubleTable}/>
        </div>
               {/* <div className='  border-solid border-4 p-2'>
            <img src={Table} onClick={handleHotel}/>
        </div> */}
    </div>
    </>
  )
}

export default SelectModels