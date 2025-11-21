import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Homepage from "./components/Homepage"

function App() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    function handleScroll () {
     setScrolled(window.screenY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
      <div>
        <Navbar scrolled={scrolled}/>
        <Homepage/>
      </div>
  )
}

export default App
