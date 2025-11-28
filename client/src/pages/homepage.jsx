import React from 'react'
import { useEffect, useState } from 'react'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Products from "../components/Products"
import About from "../components/About"
import Footer from "../components/Footer"

const Homepage = () => {
    const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    function handleScroll () {
     setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div>
        <Navbar scrolled={scrolled}/>
        <Hero/>
        <Services/>
        <Products/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Homepage