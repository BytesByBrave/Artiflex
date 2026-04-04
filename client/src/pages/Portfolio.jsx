import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <h1>Portfolio Page</h1>
      </main>
      <Footer />
    </div>
  )
}

export default Portfolio
