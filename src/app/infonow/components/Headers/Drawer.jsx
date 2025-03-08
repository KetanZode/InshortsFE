import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updatelang } from '/src/app/infonow/features/todo/language'
import { resetpage } from '../../features/paramslice'

function Drawer() {
    const [lang, setLang] =  useState("English")
    const dispatch = useDispatch()
    const handleLang = (event) =>{
        setLang(l=>  event.target.textContent)
    }
    
    const relan = useSelector((state) => state.lang.language)

    function uplang(lang){
        dispatch(updatelang(lang))
        dispatch(resetpage())
    }

    return (
        <div>
            <div className=' border-gray-500 rounded w-fit p-0 '>
                <div className=''>
                    <button className={`px-2 m-1 rounded border-gray-500 hover:bg-gray-500 ${relan=='English'?'bg-gray-500':''}`} onClick={()=>uplang('English')}>English</button>
                    <button className={`px-2 m-1 rounded border-gray-500 hover:bg-gray-500 ${relan=='Hindi'?'bg-gray-500':''}`} onClick={()=>uplang('Hindi')}>हिन्दी</button>
                    <button className={`px-2 m-1 rounded hover:bg-gray-500 ${relan=='Deutsch'?'bg-gray-500':''}`} onClick={()=>uplang('Deutsch')}>Deutsch</button>
                </div>
            </div>
            <hr className='mt-5 mb-5 border-gray-500 tracking-wider'/>
            <div>
                <p className='text-sm mb-3 text-gray-400'>Categories</p>(Currently inactive)
            </div>
            <div className='flex flex-col text-lg font-light justify-start tracking-wider'>
                <div><button className='py-1 flex justify-start pl-6 w-full hover:bg-gray-600'>India</button></div>
                <div><button className='py-1 flex justify-start pl-6 w-full hover:bg-gray-600'>Health</button></div>
                <div><button className='py-1 flex justify-start pl-6 w-full hover:bg-gray-600'>Business</button></div>
                <div><button className='py-1 flex justify-start pl-6 w-full hover:bg-gray-600'>Politics</button></div>
                <div><button className='py-1 flex justify-start pl-6 w-full hover:bg-gray-600'>Sports</button></div>
                <div><button className='py-1 flex justify-start pl-6 w-full hover:bg-gray-600'>Health</button></div>
                {/* <div><button className='py-1 flex justify-start pl-6 w-full hover:bg-gray-600'>India</button></div> */}
            </div>
        </div>
  )
}

export default Drawer
