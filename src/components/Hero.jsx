import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaDiscord, FaGamepad, FaShieldAlt, FaUsers } from 'react-icons/fa'

const Hero = ({ isWaitlistSubmitted, setIsWaitlistSubmitted }) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Validate email
    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address')
      setIsLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsWaitlistSubmitted(true)
      // In a real app, you would send this data to your backend
      console.log('Submitted:', { name, email })
    }, 1500)
  }

  return (
    <section id="waitlist" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Decorative elements */}
      <div className="hero-decoration w-64 h-64 -top-20 -left-20 animate-float"></div>
      <div className="hero-decoration w-96 h-96 -bottom-40 -right-20 animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 mb-12 md:mb-0 md:pr-12"
          >
            <div className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full mb-6 font-medium text-sm">
              Coming Soon - Join Our Waitlist
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-heading">
              <span className="gradient-text">Gaming Community</span> for the Shia Family
            </h1>
            <p className="text-lg md:text-xl text-slate-700 mb-8">
              Join our exclusive Discord community where Shia gamers of all ages can connect, play, and grow together in a safe, supportive environment aligned with our values.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center bg-white p-4 rounded-xl shadow-md">
                <div className="bg-primary-100 p-3 rounded-full mr-3">
                  <FaDiscord className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-medium">Discord Community</h3>
                  <p className="text-sm text-slate-500">Private & moderated</p>
                </div>
              </div>
              <div className="flex items-center bg-white p-4 rounded-xl shadow-md">
                <div className="bg-primary-100 p-3 rounded-full mr-3">
                  <FaGamepad className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-medium">Gaming Events</h3>
                  <p className="text-sm text-slate-500">Tournaments & fun</p>
                </div>
              </div>
              <div className="flex items-center bg-white p-4 rounded-xl shadow-md">
                <div className="bg-primary-100 p-3 rounded-full mr-3">
                  <FaShieldAlt className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-medium">Safe Environment</h3>
                  <p className="text-sm text-slate-500">Family-friendly</p>
                </div>
              </div>
              <div className="flex items-center bg-white p-4 rounded-xl shadow-md">
                <div className="bg-primary-100 p-3 rounded-full mr-3">
                  <FaUsers className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-medium">All Ages Welcome</h3>
                  <p className="text-sm text-slate-500">Age-appropriate groups</p>
                </div>
              </div>
            </div>

            {!isWaitlistSubmitted ? (
              <motion.form 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
              >
                <h3 className="text-2xl font-bold mb-2 font-heading">Join Our Waitlist</h3>
                <p className="text-slate-600 mb-6">Be the first to know when we launch!</p>
                {error && <p className="text-red-500 mb-4 p-3 bg-red-50 rounded-lg">{error}</p>}
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input-field"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className={`btn btn-primary w-full flex justify-center items-center ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Processing...' : 'Join Waitlist'}
                </button>
                <p className="text-xs text-center text-slate-500 mt-4">
                  We respect your privacy and will never share your information.
                </p>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center border border-green-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 font-heading">You're on the list!</h3>
                <p className="text-slate-600 mb-6">
                  Thank you for joining our waitlist. We'll notify you when Ghadeer Club launches!
                </p>
                <div className="flex justify-center space-x-4">
                  <button 
                    onClick={() => setIsWaitlistSubmitted(false)}
                    className="text-primary-600 underline"
                  >
                    Add another email
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-200 rounded-full opacity-70 blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-200 rounded-full opacity-70 blur-xl"></div>
              
              {/* Main image with frame */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.pexels.com/photos/8112112/pexels-photo-8112112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Muslim family playing video games together" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -bottom-5 -left-5 bg-white p-3 rounded-xl shadow-lg flex items-center z-20 animate-float">
                <FaDiscord className="text-primary-600 text-xl mr-2" />
                <span className="font-medium">Discord Community</span>
              </div>
              
              <div className="absolute -top-5 -right-5 bg-white p-3 rounded-xl shadow-lg z-20 animate-float" style={{animationDelay: '1.5s'}}>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="font-medium">Family-Friendly Gaming</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
