import { motion } from 'framer-motion'
import { FaCheck, FaGamepad, FaArrowRight } from 'react-icons/fa'

const ThankYou = ({ userData, onStartQuiz }) => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Decorative elements */}
      <div className="hero-decoration w-64 h-64 -top-20 -left-20 animate-float"></div>
      <div className="hero-decoration w-96 h-96 -bottom-40 -right-20 animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <FaCheck className="w-10 h-10 text-green-500" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Thank You for Joining <span className="gradient-text">Ghadeer Club</span>!
          </h1>
          
          <p className="text-lg md:text-xl text-slate-700 mb-8">
            We're thrilled to have you as part of our growing Shia gaming community. Your spot on our waitlist is confirmed, and we'll notify you as soon as we launch!
          </p>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-10 border border-green-100">
            <div className="text-left mb-6">
              <h3 className="text-2xl font-bold mb-2 font-heading">Your Information</h3>
              <p className="text-slate-600">Here's what we've received from you:</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-6">
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-sm text-slate-500 mb-1">Name</p>
                <p className="font-medium text-lg">{userData?.name}</p>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-sm text-slate-500 mb-1">Email</p>
                <p className="font-medium text-lg">{userData?.email}</p>
              </div>
              
              {userData?.phone && (
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-500 mb-1">Phone</p>
                  <p className="font-medium text-lg">{userData?.phone}</p>
                </div>
              )}
              
              {userData?.area && (
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-500 mb-1">Region</p>
                  <p className="font-medium text-lg">{userData?.area}</p>
                </div>
              )}
              
              {userData?.preferredGame && (
                <div className="bg-slate-50 p-4 rounded-lg md:col-span-2">
                  <p className="text-sm text-slate-500 mb-1">Preferred Game</p>
                  <p className="font-medium text-lg">{userData?.preferredGame}</p>
                </div>
              )}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-2xl border border-primary-100"
          >
            <div className="flex items-center justify-center bg-white w-16 h-16 rounded-full shadow-md mx-auto mb-6">
              <FaGamepad className="text-primary-600 text-2xl" />
            </div>
            
            <h3 className="text-2xl font-bold mb-3 font-heading">Help Us Know You Better</h3>
            
            <p className="text-slate-700 mb-6">
              Take our quick quiz to help us understand your gaming preferences and create the best experience for you when we launch!
            </p>
            
            <button
              onClick={onStartQuiz}
              className="btn btn-primary mx-auto flex items-center justify-center"
            >
              Start Quick Quiz
              <FaArrowRight className="ml-2" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ThankYou
