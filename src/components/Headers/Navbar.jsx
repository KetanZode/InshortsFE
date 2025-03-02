import React from 'react'
import Hamburger from './Hamburger'
import { useDispatch, useSelector } from 'react-redux'
import { updatepanel } from '../../features/panel/switchPanelSlice'

function Navbar() {
  const dispatch = useDispatch()
  const panel = useSelector((state)=>state.panel.panel)
  return (
    <>
        <div className='h-20 px-7 py-5 shadow-lg shadow-gray-300 sticky top-0 z-50 bg-white'>
            <div className='flex flex-row justify-between'>
                <Hamburger/>
                <div className='flex flex-col absolute md:mx-[43%] mx-[35%]'>
                    <img src="../assets/logo.png" className='h-9 w-26' alt="" />
                    {/* {panel==='admin' && <p className='px-4 text-gray-500 font-bold'>Admin Panel</p>} */}
                </div>
                {/* <div className='flex'>
                  <div className={`cursor-pointer text-gray-700 hover:text-gray-600 hover:scale-105 ${panel==='admin'?"":"hidden"}`} onClick={()=>dispatch(updatepanel('user'))}>uSER?</div>
                  <div className={`cursor-pointer text-gray-700 hover:text-gray-600 hover:scale-105 ${panel==='user'?"":"hidden"}`}  onClick={()=>dispatch(updatepanel('admin'))}>aDMIN?</div>
                </div> */}
            </div>
        </div>
    </>
  )
}

export default Navbar
