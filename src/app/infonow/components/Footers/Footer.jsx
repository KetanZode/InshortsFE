import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Footer() {
  return (
    <div className='lg:min-h-24 bg-slate-700'>
      <div className='flex md:justify-between lg:px-64 lg:py-5'>
            <div className='text-white '>
                <div className='flex'>
                <div className='flex flex-col justify-items-end text-right'>
                    {/* <img src="../assets/logo_footer.png" alt="" width={"200"} className='mb-10 px-[-100]'/> */}
                    <DotLottieReact  src="/assets/gifs/InfoNow.lottie" autoplay className="h-20"/> 
                    <p className='flex justify-center'>iNFONOW</p>

                    <p className='text-sm font-thin font-mono text-pretty'><b className='font-extrabold'>Inshorts</b> Pte, Ltd.</p>
                    <p className='text-sm'><b>&copy;</b>  COPYRIGHT 2024</p>
                </div>
                <div className='border-l border-gray-400 mx-5'></div>
                <div className='flex flex-col my-6'>
                    <p className='mb-5'>Contact Us</p>
                    <div className='cursor-pointer'>
                    <p>Term & Conditions</p>
                    <p>Privacy Policy</p>
                    </div>
                </div>
                </div>
            </div>
            <div className='md:flex mx-24 mt-10 p-2'>
                <img className='h-8 m-2 hover:scale-105 cursor-pointer' src="../assets/facebook.png" alt="" />
                <img className='h-8 m-2 hover:scale-105 cursor-pointer' src="../assets/twitter.png" alt="" />
                <img className='h-8 m-2 hover:scale-105 cursor-pointer' src="../assets/linkedin.png" alt="" />
            </div>
            
      </div>
    </div>
  )
}

export default Footer
