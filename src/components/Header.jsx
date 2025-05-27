import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGamepad, FaBars, FaTimes, FaDiscord } from 'react-icons/fa'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('waitlist')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
      
      // Determine active section based on scroll position
      const sections = ['waitlist', 'about', 'games', 'features', 'faq']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'games', label: 'Games' },
    { id: 'features', label: 'Features' },
    { id: 'faq', label: 'FAQ' },
  ]

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center cursor-pointer"
          onClick={() => scrollToSection('waitlist')}
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-2 rounded-lg mr-3">
            <FaGamepad className="text-white text-xl" />
          </div>
          <span className="font-heading font-bold text-xl md:text-2xl text-slate-900">Ghadeer Club</span>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center space-x-1"
        >
          {navItems.map(item => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeSection === item.id
                  ? 'text-primary-600 bg-primary-50 font-medium'
                  : 'text-slate-700 hover:text-primary-600 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('waitlist')}
            className="ml-2 btn btn-primary flex items-center"
          >
            <FaDiscord className="mr-2" />
            Join Waitlist
          </button>
        </motion.nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-lg focus:outline-none ${
              isMobileMenuOpen ? 'bg-slate-100' : ''
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? 
              <FaTimes className="text-2xl text-primary-600" /> : 
              <FaBars className="text-2xl text-slate-900" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-slate-100 shadow-lg"
          >
            <div className="container py-4 flex flex-col space-y-1">
              {navItems.map(item => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-3 rounded-lg transition-colors text-left ${
                    activeSection === item.id
                      ? 'text-primary-600 bg-primary-50 font-medium'
                      : 'text-slate-700 hover:text-primary-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 mt-2 border-t border-slate-100">
                <button 
                  onClick={() => scrollToSection('waitlist')}
                  className="btn btn-primary w-full flex items-center justify-center"
                >
                  <FaDiscord className="mr-2" />
                  Join Waitlist
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
