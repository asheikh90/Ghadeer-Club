import { FaDiscord, FaTwitter, FaInstagram, FaEnvelope, FaGamepad } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 p-2 rounded-lg mr-3">
                <FaGamepad className="text-white text-xl" />
              </div>
              <span className="font-heading font-bold text-2xl">Ghadeer Club</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              A safe, moderated gaming community for Shia Muslims of all ages. Connect, play, and grow with like-minded gamers in an environment that respects our values.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 hover:bg-primary-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <FaDiscord />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-primary-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-primary-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-primary-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <FaEnvelope />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#waitlist" className="text-slate-400 hover:text-white transition-colors">Join Waitlist</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#games" className="text-slate-400 hover:text-white transition-colors">Games</a></li>
              <li><a href="#features" className="text-slate-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#faq" className="text-slate-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-slate-400 mb-4">
              Have questions or suggestions? Reach out to us after joining the waitlist.
            </p>
            <a href="#waitlist" className="inline-block px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors">
              Join Waitlist
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Ghadeer Club. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Community Guidelines</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
