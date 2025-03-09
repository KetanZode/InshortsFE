import React from 'react'
import Navbar from './components/Header/Navbar'
import ToggleTheme from '../../components/ToggleTheme'

function DashComp() {
  return (
    <div className=''>
      <Navbar/>

     <ToggleTheme/>

      <div className="bg-theme text-theme p-4 rounded-md" 
      // style={{ backgroundColor: "var(--bg_t)" }}
      >
        Themed Element
      </div>

      Element
    </div>
  )
}

export default DashComp
