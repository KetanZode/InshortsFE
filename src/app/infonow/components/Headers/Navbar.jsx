import React from 'react'
import Hamburger from './Hamburger'
import { useDispatch, useSelector } from 'react-redux'
import { updatepanel } from '../../features/panel/switchPanelSlice'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


function Navbar() {
  const dispatch = useDispatch()
  const panel = useSelector((state)=>state.panel.panel)
  return (
    <>
        <div className='h-20 px-7 py-5 shadow shadow-blue-300 sticky top-0 z-50 bg-white'>
            <div className='flex flex-row justify-between'>
                <Hamburger/>
                <div className='flex flex-col absolute md:mx-[43%] mx-[35%] md:-my-7'>
                    {/* <img src="/public/assets/gifs/infoNow.lottie" className='h-9 w-26' alt="" /> */}
                     <DotLottieReact  src="assets/gifs/infoNow.lottie" autoplay/>
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
