import React from 'react'
import Navbar from '../components/navbar.jsx'
import Hero from '../components/Hero.jsx'
import Process from '../components/Process.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <main className="min-h-screen relative bg-background overflow-hidden flex flex-col">
      <Navbar />
      <Hero />
      <Process />
      <WhyChooseUs />
      <Footer />
    </main>
  )
}

export default Home
