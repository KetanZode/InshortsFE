import React from 'react'

function HolderTile({data}) {
    return (
        <div>
            <div>
                    <div  className='lg:flex justify-between lg:my-8 lg:mx-72 shadow-md shadow-blue-200 m-10  shadow-gray-400 min-h-72 rounded-lg'>
                        
                        <div className='lg:h-60 lg:w-2/5 pt-5 p-2 my-3'>
                        <img className='w-full h-full rounded shadow' src={data.image_b64} alt=""/>
                        </div>

                        
                        <div className='lg:w-3/5 lg:h-full m-3 '>
                            <p className='text-gray-600 font-sans text-xl'>{data.title ? data.title.length >100 ? data.content.substring(0,100)+"...":data.title:""}</p>
                            <div className='text-gray-800 text-xs pb-2'><strong className='font-bold'>short</strong> by {data.uploaded_by?data.uploaded_by:'Anmol Shukla'}   </div>
                            <div className='text-gray-700  text pb-2'>
                                {data.content? data.content.length >500 ? data.content.substring(0,500)+"...":data.content : ""}
                            </div>
                            <div className='text-gray-800 text-xs font-bold relative top-full'> read more at <a href={data.src_link}>@here</a> </div>
                        </div>

                    </div>
            </div>
        
        </div>
    )
    }

export default HolderTile


