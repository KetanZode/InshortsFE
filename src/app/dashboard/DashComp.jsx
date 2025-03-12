import React from 'react'
import Navbar from './components/Header/Navbar'
import ToggleTheme from '../../components/ToggleTheme'
import ScaleScroll from './components/Body/ScaleScroll'
import SmoothScaleOnScroll from './components/Body/SmoothScaleOnScroll'

function DashComp() {
  return (
    <div className='bg-theme'>
      <Navbar/>
      <SmoothScaleOnScroll/>
      <ScaleScroll/>

    </div>
  )
}

export default DashComp
