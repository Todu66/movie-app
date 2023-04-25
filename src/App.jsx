import { React, useState } from 'react'
import './App.css'
import Navigation from "./components/Navigation/Navigation";
import Section from "./components/Main/Section"
function App() {
  return (
    <div className='mainHome'>
      <Navigation />
      <Section />
    </div>
    
  )
  
}

export default App
