import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle= () =>{
        console.log("toggle")
        setIsOpen(!isOpen)
    }

  return (
    <>
      <Sidebar isOpen ={isOpen} toggle={toggle}/>
      <Navbar toogle={toggle}/>

    </>
  )
}

export default Home
