import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <main className="min-h-screen relative bg-background overflow-hidden text-white flex flex-col">
      <Navbar />
      <Hero />
    </main>
  )
}

export default App