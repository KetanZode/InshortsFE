import React, { useState } from 'react'


function Floater() {
  return (
    <div>
        <div className='grid grid-cols-2 justify-between bg-[#f44336] lg:my-8 lg:mx-64 min-h-14 text-white items-center px-10 shadow-xl'>
            <div className="lg:flex">
                <p className='text-sm lg:flex flex-row text-pretty font-mono font-medium'>For the best experience use <b> inshots </b> app on your smartphone</p>
            </div>
            <div className='lg:flex place-self-end mb-3'>
                <img  className='mx-2 hover:scale-105 transition ease-in-out' src="assets/appstore.png" alt="" width={"120"} />
                <img  className='mx-2 hover:scale-105 transition ease-in-out' src="assets/playstore.png" alt="" width={"120"} />
            </div>
        </div>      
    </div>
  )
}

export default Floater
