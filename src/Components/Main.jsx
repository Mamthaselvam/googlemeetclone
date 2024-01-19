import React from 'react'
import { MdOutlineVideoCall } from "react-icons/md";
import { LiaKeyboard } from "react-icons/lia";
const Main = () => {
  return (
    <div className='text-start font-sans '>
        <div className='grid grid-cols-2 gap-4 '>
           <div className='col-span-1 m-20 '>
             <div >
                <div className='mt-20 ml-10'>
                   <h5 className='font-bold text-3xl'>Premium video meetings.</h5>
                   <h5 className='font-bold text-3xl'>Now free for everyone.</h5>
                </div>   
                <div className='mt-10 ml-10' >
                    <p className=''>We're-engineered the service we build for secure business </p>
                    <p>meetings,Google Meet,to make it free and available for all. </p>
                </div>
                
                <div className='flex  items-center justify-between'>

                <button className=' flex items-center text-center cursor-pointer ml-10 mt-10 bg-blue-600 rounded text-white p-2' > 
                   <span className='text-2xl'> < MdOutlineVideoCall/></span> 
                    <span className='ml-2 text-sm'>New Meeting</span>
                </button>
                <button  >
                <div className=' flex items-center text-center  mt-10  rounded border-dashed border-red-500'>
                   <span> <LiaKeyboard/></span>
                 <input type='text'  placeholder='Enter a code or link ' className='ml-3'/>
                </div> 
                </button>
                <span className='mt-10 pr-5'>Join</span>
                 
               
                </div>
                
             </div>
           </div>
           <div className='col-span-1'>
                two
           </div>
        </div>
    </div>
  )
}

export default Main