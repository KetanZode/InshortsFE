import React from 'react'
import Hamburger from './Hamburger'
import { useDispatch, useSelector } from 'react-redux'
import { updatepanel } from '../../features/panel/switchPanelSlice'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import ToggleTheme from '../../../../components/ToggleTheme';


function Navbar() {
  const dispatch = useDispatch()
  const panel = useSelector((state)=>state.panel.panel)
  return (
    <>
        <div className='h-20 px-7 py-5 shadow shadow-blue-300 sticky top-0 z-50 nav-theme'>
            <div className='flex flex-row justify-between'>
                <Hamburger/>
                <div className='flex -my-5 md:flex-col md:absolute  md:mx-[43%] md:mx-[35%] md:-my-8'>
                    {/* <img src="/public/assets/gifs/infoNow.lottie" className='h-9 w-26' alt="" /> */}
                     <DotLottieReact  src="/assets/gifs/InfoNow.lottie" autoplay/>
                    {/* {panel==='admin' && <p className='px-4 text-gray-500 font-bold'>Admin Panel</p>} */}
                </div>
                {/* <div className='flex'>
                  <div className={`cursor-pointer text-gray-700 hover:text-gray-600 hover:scale-105 ${panel==='admin'?"":"hidden"}`} onClick={()=>dispatch(updatepanel('user'))}>uSER?</div>
                  <div className={`cursor-pointer text-gray-700 hover:text-gray-600 hover:scale-105 ${panel==='user'?"":"hidden"}`}  onClick={()=>dispatch(updatepanel('admin'))}>aDMIN?</div>
                </div> */}
              <ToggleTheme/>
            </div>
        </div>
    </>
  )
}

export default Navbar
