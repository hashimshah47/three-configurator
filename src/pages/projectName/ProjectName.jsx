import React from 'react'
import GalleryContainer from  '../../components/Gallery/GalleryContainer'
import SelectModels from './SelectModels'

const ProjectName = () => {
  return (
    <div>        
        <div className=' flex'>
          <div className=' w-[25%] border-r-2'>
            <SelectModels/>
          </div>
          <div className=' w-[75%] h-[100vh]'>
            <GalleryContainer/>
          </div>
        </div>
    </div>
  )
}

export default ProjectName