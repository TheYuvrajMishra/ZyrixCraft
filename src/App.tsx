import React from 'react'
import  Navbar  from './Components/Navbar'
import HeroSection from './Pages/HeroSection'
import Services from './Pages/Services'
function App() {
  return (
    <div className='bg-[#090909]'>
      <Navbar/>
      <HeroSection/>
      <Services/>
    </div>
  )
}

export default App
