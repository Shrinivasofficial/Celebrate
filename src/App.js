import React from 'react'
import Navbar from './Components/Navbar'
import { Hero } from './Components/Hero'
import { Featured } from './Components/Featured'

const App = () => {
  return (
    <div className='bg-[#fbf7f2]'>
      <Navbar/>
      <Hero />
      <Featured />
    </div>
  )
}

export default App