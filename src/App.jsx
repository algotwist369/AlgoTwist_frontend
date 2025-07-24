import React, { createContext, useContext, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import BlogReadPage from './pages/BlogReadPage'
import Navebar from './components/common/Navebar'
import Footer from './components/common/Footer'
import OurTeam from './components/team/OurTeam'
import Projects from './components/Projects/Projects'
import About from './components/about/About'

// Pricing for the services
import WebDevelopment from './components/pricing/WebDevelopment'
import DigitalServicesTable from './components/pricing/DigitalServicesTable'
import AppDevelopment from './components/pricing/AppDevelopment'
import SeoServices from './components/pricing/SeoServices'
import SocialMediaMarketing from './components/pricing/SocialMediaMarketing'
import PerformanceMarketing from './components/pricing/PerformanceMarketing'
import DigitalPR from './components/pricing/DigitalPR'
import LeadGeneration from './components/pricing/LeadGeneration'

// Dark Mode Context
const DarkModeContext = createContext()

export const useDarkMode = () => {
  const context = useContext(DarkModeContext)
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider')
  }
  return context
}

const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for saved preference
    const saved = localStorage.getItem('darkMode')
    if (saved !== null) {
      return JSON.parse(saved)
    }
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode))

    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev)
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  )
}

const AppContent = () => {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark transition-colors duration-300">
      <Navebar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Home and Main Pages */}
          <Route path="/" element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          } />
          <Route path="/about-us" element={
            <PageTransition>
              <About />
            </PageTransition>
          } />
          <Route path="/our-team" element={
            <PageTransition>
              <OurTeam />
            </PageTransition>
          } />
          <Route path="/projects" element={
            <PageTransition>
              <Projects />
            </PageTransition>
          } />

          {/* Blog Pages */}
          <Route path="/blog" element={
            <PageTransition>
              <BlogPage />
            </PageTransition>
          } />
          <Route path="/blog/:slug" element={
            <PageTransition>
              <BlogReadPage />
            </PageTransition>
          } />
          <Route path="/blog/id/:id" element={
            <PageTransition>
              <BlogReadPage />
            </PageTransition>
          } />

          {/* Pricing/Service Pages (alphabetically) */}
          <Route path='/pricing/web-development' element={<WebDevelopment />} />
          <Route path='/pricing/app-development' element={<AppDevelopment />} />
          <Route path='/pricing/digital-pr' element={<DigitalPR />} />
          <Route path='/pricing/lead-generation' element={<LeadGeneration />} />
          <Route path='/pricing/performance-marketing' element={<PerformanceMarketing />} />
          <Route path='/pricing/seo-services' element={<SeoServices />} />
          <Route path='/pricing/social-media-marketing' element={<SocialMediaMarketing />} />
          <Route path='/pricing' element={<DigitalServicesTable />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

const App = () => {
  return (
    <DarkModeProvider>
      <Router>
        <AppContent />
      </Router>
    </DarkModeProvider>
  )
}

export default App
