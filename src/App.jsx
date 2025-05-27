import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Games from './components/Games'
import Features from './components/Features'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ThankYou from './components/ThankYou'
import Quiz from './components/Quiz'

function App() {
  const [isWaitlistSubmitted, setIsWaitlistSubmitted] = useState(false)
  const [showQuiz, setShowQuiz] = useState(false)
  const [waitlistEntryId, setWaitlistEntryId] = useState(null)
  const [userData, setUserData] = useState(null)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {!isWaitlistSubmitted && (
          <>
            <Hero 
              isWaitlistSubmitted={isWaitlistSubmitted} 
              setIsWaitlistSubmitted={setIsWaitlistSubmitted}
              setWaitlistEntryId={setWaitlistEntryId}
              setUserData={setUserData}
            />
            <About />
            <Games />
            <Features />
            <FAQ />
          </>
        )}
        
        {isWaitlistSubmitted && !showQuiz && (
          <ThankYou 
            userData={userData}
            onStartQuiz={() => setShowQuiz(true)}
          />
        )}
        
        {isWaitlistSubmitted && showQuiz && (
          <Quiz 
            waitlistEntryId={waitlistEntryId}
            userData={userData}
          />
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
