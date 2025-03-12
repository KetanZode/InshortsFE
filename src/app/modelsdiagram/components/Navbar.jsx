import React from 'react'
import ToggleTheme from '../../../components/ToggleTheme'

function Navbar() {
  return (
    <div className='bg-white rounded-b-2xl sticky top-0 z-50'>
     {/* <div className='bg-[#366ff4]  '> */}
      <div className='shadow  h-20 flex justify-between px-5 pt-6'>
        <div className='text-2xl font-semibold tracking-widest'>ER DIAGRAM</div>
        <div></div>
        <div> 
          <ToggleTheme/>
        </div>
      </div>


 
    </div>
  )
}

export default Navbar
