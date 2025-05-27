import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Games from './components/Games'
import Features from './components/Features'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  const [isWaitlistSubmitted, setIsWaitlistSubmitted] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero 
          isWaitlistSubmitted={isWaitlistSubmitted} 
          setIsWaitlistSubmitted={setIsWaitlistSubmitted} 
        />
        <About />
        <Games />
        <Features />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
