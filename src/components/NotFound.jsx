import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function NotFound() {
  return (
    <div className='bg-slate-800 h-screen'>
        {/* <div className='flex item-center justify-center'>
            <img className='h-1/4 w-1/3' src="/public/assets/gifs/404-  cactus.gif" alt="" />
        </div> */}
        <DotLottieReact 
            src="/public/assets/gifs/robo404.lottie"
            loop
            autoplay
            className=''
        />
        <div className='flex justify-center text-white'>
        </div>
    </div>
  )
}

export default NotFound
