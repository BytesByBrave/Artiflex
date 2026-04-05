import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Pricing from './pages/Pricing.jsx'
import Portfolio from './pages/Portfolio.jsx'
import CustomCursor from './components/CustomCursor.jsx'

const AnimatedRoutes = () => {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
              <Home />
            </motion.div>
          } 
        />
        <Route 
          path="/services" 
          element={
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5 }}>
              <Services />
            </motion.div>
          } 
        />
        <Route 
          path="/pricing" 
          element={
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.5 }}>
              <Pricing />
            </motion.div>
          } 
        />
        <Route 
          path="/portfolio" 
          element={
            <motion.div initial={{ opacity: 0, filter: 'blur(10px)' }} animate={{ opacity: 1, filter: 'blur(0px)' }} exit={{ opacity: 0, filter: 'blur(10px)' }} transition={{ duration: 0.5 }}>
              <Portfolio />
            </motion.div>
          } 
        />
      </Routes>
    </AnimatePresence>
  )
}

const App = () => {
  return (
    <Router>
      <CustomCursor />
      <AnimatedRoutes />
    </Router>
  )
}

export default App