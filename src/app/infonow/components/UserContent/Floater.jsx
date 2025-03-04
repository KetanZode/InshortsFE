import React, { useState } from 'react'


function Floater() {
  return (
    <div className='m-5'>
        <div className='grid grid-cols-2 justify-between bg-[#366ff4] lg:my-8 lg:mx-64 min-h-14 text-white items-center px-10 shadow-xl rounded-lg'>
            <div className="lg:flex">
                <p className='text-sm lg:flex flex-row text-pretty font-mono font-medium'>For the best experience use <b> inshots </b> app on your smartphone</p>
            </div>
            <div className='lg:flex place-self-end m-3'>
                <img  className='mx-2 hover:scale-105 transition ease-in-out' src="/public/assets/appstore.png" alt="" width={"120"} />
                <img  className='mx-2 hover:scale-105 transition ease-in-out' src="/public/assets/playstore.png" alt="" width={"120"} />
            </div>
        </div>      
    </div>
  )
}

export default Floater
