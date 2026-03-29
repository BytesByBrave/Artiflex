import React from 'react'
import Navbar from './components/navbar.jsx'
import Hero from './components/Hero.jsx'

const App = () => {
  return (
    <main className="min-h-screen relative bg-background overflow-hidden flex flex-col">
      <Navbar />
      <Hero />
    </main>
  )
}

export default App