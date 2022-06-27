import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection/InfoSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        console.log("toggle")
        setIsOpen(!isOpen)
    }

  return (
    <>
      <Sidebar isOpen ={isOpen} toggle={toggle}/>
      <Navbar toogle={toggle}/>
      <HeroSection/>
      <InfoSection/>
    </>
  )
}

export default Home
