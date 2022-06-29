import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection/InfoSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { homeObjOne, homeObjTwo,homeObjThree } from '../components/InfoSection/Data'
import Services from '../components/Services/Services'
import Footer from '../components/Footer/Footer'

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
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Services/>
      <InfoSection {...homeObjThree}/>
      <Footer/>
      
    </>
  )
}

export default Home
