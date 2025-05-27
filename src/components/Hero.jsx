import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaDiscord, FaGamepad, FaShieldAlt, FaUsers, FaCheck } from 'react-icons/fa'

const Hero = ({ isWaitlistSubmitted, setIsWaitlistSubmitted }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    wantsSmsUpdates: false,
    area: '',
    preferredGame: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [step, setStep] = useState(1)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const validateStep = () => {
    if (step === 1) {
      if (!formData.name.trim()) {
        setError('Please enter your name')
        return false
      }
      if (!formData.email.includes('@') || !formData.email.includes('.')) {
        setError('Please enter a valid email address')
        return false
      }
      return true
    }
    return true
  }

  const nextStep = () => {
    if (validateStep()) {
      setError('')
      setStep(2)
    }
  }

  const prevStep = () => {
    setError('')
    setStep(1)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Validate form
    if (!formData.name.trim() || !formData.email.includes('@') || !formData.email.includes('.')) {
      setError('Please fill in all required fields correctly')
      setIsLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsWaitlistSubmitted(true)
      // In a real app, you would send this data to your backend
      console.log('Submitted:', formData)
    }, 1500)
  }

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      wantsSmsUpdates: false,
      area: '',
      preferredGame: ''
    })
    setStep(1)
    setIsWaitlistSubmitted(false)
    setError('')
  }

  const gameOptions = [
    'Call of Duty',
    'FIFA',
    'Minecraft',
    'Roblox',
    'Fortnite',
    'Apex Legends',
    'Rocket League',
    'Madden NFL',
    'Other'
  ]

  const areaOptions = [
    'North America',
    'Europe',
    'Middle East',
    'Asia',
    'Africa',
    'Australia/Oceania',
    'South America',
    'Other'
  ]

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
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100"
              >
                <div className="flex items-center mb-6">
                  <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                      style={{ width: step === 1 ? '50%' : '100%' }}
                    ></div>
                  </div>
                  <div className="mx-4 text-sm font-medium text-slate-500">
                    Step {step}/2
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2 font-heading">Join Our Waitlist</h3>
                <p className="text-slate-600 mb-6">Be the first to know when we launch!</p>
                
                {error && (
                  <div className="mb-4 p-3 bg-red-50 rounded-lg border border-red-100 text-red-600 flex items-center">
                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                    </svg>
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="input-field"
                          placeholder="(Optional) For SMS updates"
                        />
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="wantsSmsUpdates"
                          name="wantsSmsUpdates"
                          checked={formData.wantsSmsUpdates}
                          onChange={handleChange}
                          className="w-4 h-4 text-primary-600 border-slate-300 rounded focus:ring-primary-500"
                        />
                        <label htmlFor="wantsSmsUpdates" className="ml-2 block text-sm text-slate-700">
                          I would like to receive SMS updates about Ghadeer Club
                        </label>
                      </div>
                      
                      <div className="pt-4">
                        <button
                          type="button"
                          onClick={nextStep}
                          className="btn btn-primary w-full flex justify-center items-center"
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="area" className="block text-sm font-medium text-slate-700 mb-1">
                          Where are you joining from?
                        </label>
                        <select
                          id="area"
                          name="area"
                          value={formData.area}
                          onChange={handleChange}
                          className="input-field"
                        >
                          <option value="">Select your region</option>
                          {areaOptions.map((area) => (
                            <option key={area} value={area}>{area}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="preferredGame" className="block text-sm font-medium text-slate-700 mb-1">
                          What game are you most interested in?
                        </label>
                        <select
                          id="preferredGame"
                          name="preferredGame"
                          value={formData.preferredGame}
                          onChange={handleChange}
                          className="input-field"
                        >
                          <option value="">Select a game</option>
                          {gameOptions.map((game) => (
                            <option key={game} value={game}>{game}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="pt-4 flex space-x-4">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="btn btn-secondary flex-1"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className={`btn btn-primary flex-1 flex justify-center items-center ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                          disabled={isLoading}
                        >
                          {isLoading ? 'Processing...' : 'Join Waitlist'}
                        </button>
                      </div>
                    </div>
                  )}

                  <p className="text-xs text-center text-slate-500 mt-4">
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center border border-green-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <FaCheck className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold mb-2 font-heading">You're on the list!</h3>
                <p className="text-slate-600 mb-6">
                  Thank you for joining our waitlist. We'll notify you when Ghadeer Club launches!
                </p>
                <div className="bg-slate-50 p-4 rounded-lg mb-6">
                  <div className="text-left mb-3">
                    <p className="text-sm text-slate-500">Your information:</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                    <div>
                      <p className="text-xs text-slate-500">Name</p>
                      <p className="font-medium">{formData.name}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Email</p>
                      <p className="font-medium">{formData.email}</p>
                    </div>
                    {formData.phone && (
                      <div>
                        <p className="text-xs text-slate-500">Phone</p>
                        <p className="font-medium">{formData.phone}</p>
                      </div>
                    )}
                    {formData.area && (
                      <div>
                        <p className="text-xs text-slate-500">Region</p>
                        <p className="font-medium">{formData.area}</p>
                      </div>
                    )}
                    {formData.preferredGame && (
                      <div className="md:col-span-2">
                        <p className="text-xs text-slate-500">Preferred Game</p>
                        <p className="font-medium">{formData.preferredGame}</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-center space-x-4">
                  <button 
                    onClick={resetForm}
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
