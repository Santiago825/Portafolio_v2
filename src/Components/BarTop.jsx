import React from 'react'
import { MaterialUISwitch } from './MaterialUISwitch'

export const BarTop = (props) => {
  return (
    <div className='bg-white fixed w-full h-16 border px-7  z-50'>
        <div className='flex flex-wrap font-bold  h-full items-center  justify-between   text-2xl'>
            <h2 className=' text-3xl text-gray-700'>JS</h2>
            <h2>Desarrollador Web</h2>
            <MaterialUISwitch onClick={props.Mode}/>
            
        </div>


    </div>
  )
}
