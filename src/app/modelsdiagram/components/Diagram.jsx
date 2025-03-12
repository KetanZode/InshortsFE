import React, { useEffect } from 'react'
import Mermaid from './Mermaid'
import { fetchModels, fetchDiagram } from '../modelSlice';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import {motion, AnimatePresence} from 'framer-motion';

function Diagram() {
    const dispatch = useDispatch()
    // const model = useSelector((state) => state.models)
    const models    = useSelector((state) => state.models.models)
    let diagram   = useSelector((state)=>state.models.diagram) 
    const [selected, setSelected]  = useState(null)
    const [flowchart, setFlowchart] = useState(`erDiagram`)
    const [diagramopen, setDiagramopen] = useState(true)
    const [detailopen, setDetailopen] = useState(true)
    const theme = localStorage.getItem('theme')
    const handleSelection = (event) =>{
        setSelected(event.target.value)
    }
    useEffect(()=>{
        console.log(selected)
        if(selected==='SELECT'){
            diagram=null
        }else if(selected){
            dispatch(fetchDiagram({"app":selected}))
        }else{
            dispatch(fetchModels())
        }
    },[selected])

    return (
        <div>
            <Navbar/>

            <div className='flex items-center justify-center mt-5 text-theme '>
            <div className=''>
                    <select name="" id="" className='bg-theme shadow-sm shadow-gray-400 rounded-full px-3 p-2 mb-5' onChange={handleSelection}>
                        <option>SELECT</option>
                        {
                    
                            Array.isArray(models) && 
                                models.map((app) => (
                                    <option value={`${app}`}> {app.toUpperCase()} </option>
                                )) 
                        }
                    </select>
            </div>
            </div>
            <div className='md:flex md:w-full'>
                { diagram && (
                    <div className='flex flex-col m-5 text-theme md:w-1/2'>
                        <div onClick={()=>{setDiagramopen(!diagramopen)}} className='m-2 px-1 rounded-3xl flex justify-between items-center hover:scale-[1.01] transition shadow-gray-300 shadow-sm bg-theme'> 
                            <div className='pl-7 font-semibold'>Diagram</div> 
                            <img src={`${theme==='lightTheme'?'../assets/arrow_drop-b.png':'../assets/down_arrow-w.png'}`} className={`h-7 rotate-180 ${diagramopen?'rotate-0':'rotate-180'}`} alt="" />
                        </div>
                <AnimatePresence mode="wait">
                {diagramopen && <motion.div key={models}
                className={` diagram-bg rounded-2xl transition animate-in zoom-in duration-500  ${diagramopen?'opacity-100 scale-100':'opacity-0 scale-90'}`} >
                    <Mermaid chartString={diagram.mermaid_er}/>
                </motion.div>}
                </AnimatePresence>
            </div>)}
            { diagram && (
                    <div className='flex flex-col m-5 text-theme md:w-1/2'>
                        <div onClick={()=>{setDetailopen(!detailopen)}} className='m-2 px-1 rounded-3xl flex justify-between items-center hover:scale-[1.01] transition shadow-gray-300 shadow-sm bg-theme'> 
                            <div className='pl-7 font-semibold'>Details</div> 
                            <img src={`${theme==='lightTheme'?'../assets/arrow_drop-b.png':'../assets/down_arrow-w.png'}`} className={`h-7 rotate-180 ${detailopen?'rotate-0':'rotate-180'}`} alt="" />
                        </div>
                <motion.div key={models}
                className={` diagram-bg rounded-2xl transition animate-in zoom-in duration-500  ${detailopen?'opacity-100 scale-100 block':'opacity-0 scale-90 hidden'}`} >
                    {/* <Mermaid chartString={diagram.mermaid_er}/> */}
                </motion.div>
            </div>)}
        </div>
            
            
        </div>
    )
}

export default Diagram
