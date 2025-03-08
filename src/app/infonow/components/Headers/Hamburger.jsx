import React, { useState } from 'react'
import Drawer from './Drawer'
function Hamburger() {
    const [sidebar, setSidebar] = useState(true)
    const handleSidebar =()=>{
        setSidebar(!sidebar)
    }
    return (
        <>
        <div>
            <div className={`transition-all duration-500 ease-in-out cursor-pointer flex hover:scale-[102%] ${!sidebar?'opacity-0 translate-x-3 pointer-events-none':'-translate-x-0 opacity-100'}`}  onClick={handleSidebar}>
                <img src="../assets/Hamburger-w.png" alt="" width="30" height="" />
                <p className={`text-white hover:text-slate-200 px-3`}>Menu</p>
            </div>

        </div>
        <div className=''>
                <div className={`absolute transition-all duration-500 ease-in-out flex ${sidebar?'opacity-0 -translate-x-1/2 pointer-events-none':'opacity-100 translate-x-0 cursor-auto'}   left-0 top-0 h-screen w-1/4`}>
                    <div className='bg-[#1b1b1f] min-w-32 opacity-95 w-2/3 p-7 px-3 text-white top-0 left-0'>
                        <Drawer/>
                    </div>
                    <div className='cursor-pointer lg:flex' onClick={handleSidebar}>
                        <img className='w-5 h-5 my-8 mx-2'  src="../assets/close-w.png" alt="" />
                        <p className={`text-slate-600 transition ease-in-out hover:text-slate-500 p-7 px-1 sm:hidden`} ></p>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default Hamburger
