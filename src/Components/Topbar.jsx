import React from 'react'
import { MdOutlineContactSupport,MdOutlineSettings,MdApps } from "react-icons/md";
import { GoReport } from "react-icons/go";
import meet from '../assets/meet.png'
import Main from './Main';
const Topbar = () => {
  return (
    <>
    <div>
        <div className='flex justify-between'>
        <div className='flex items-center pl-5 pt-3'>
            <img src={meet} className="h-7"/>
            <p className='pl-2 text-xl tracking-tight'> <span className='font-semibold text-neutral-500'>Google</span> Meet</p>
        </div>
        <div className='flex items-center pr-5 pt-3'>
            <span className='pr-5 '>9:34PM.Fri,Jan 19</span>
            <div className='flex text-xl  cursor-pointer' >
             <span className='pr-5'>< MdOutlineContactSupport/></span>
             <span className='pr-5'>< GoReport/></span>
             <span className='pr-5'>< MdOutlineSettings/></span>
             <span className='pr-5'>< MdApps/></span>
            </div>  
        </div>
        </div>
    </div>


    <Main/>
    </>

    
  )
}


export default Topbar