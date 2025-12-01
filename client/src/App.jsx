import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"

import CollectionPage from "./pages/CollectionPage"
import Homepage from "./pages/homepage"
import NavBar from "./components/Navbar-2"
import AddCollectionPage from "./pages/AddCollectionPage"


function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/collections" element={
          <>
          <NavBar/>
            <CollectionPage/>
            </>    
            }/>
            
          <Route path="/admin/add-collection" element={
          <>
          <NavBar/>
            <AddCollectionPage/>
            </>    
            }/>
        </Routes>
      </div>
  )
}

export default App
