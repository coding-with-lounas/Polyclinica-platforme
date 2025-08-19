import React from 'react';
// import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar';
function App() {

  return (
    <>
   <Navbar/>
 <div className="text-center mt-10 px-4">
  <h1 className="text-4xl lg:text-5xl font-bold leading-snug">
    Prenez votre <span className="text-[#0FDCBC]">rendez-vous</span> <br />
    <span className="text-[#0FDCBC]">médical</span> en quelques clics !
  </h1>
  <p className="mt-4 text-gray-600 text-lg">
    Trouvez votre clinique et réservez facilement en ligne, <br />
    où que vous soyez.
  </p>
</div>

    </>
  )
}

export default App
