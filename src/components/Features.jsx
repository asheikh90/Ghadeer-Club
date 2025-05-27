import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  FaDiscord, 
  FaCalendarAlt, 
  FaShieldAlt, 
  FaUserFriends, 
  FaTrophy, 
  FaComments,
  FaChevronRight
} from 'react-icons/fa'

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  const features = [
    {
      icon: <FaDiscord className="text-4xl text-white mb-4" />,
      title: "Discord Community",
      description: "A dedicated Discord server with organized channels for different games, age groups, and interests.",
      color: "from-indigo-500 to-indigo-700"
    },
    {
      icon: <FaCalendarAlt className="text-4xl text-white mb-4" />,
      title: "Regular Events",
      description: "Weekly gaming sessions, monthly tournaments, and special holiday events for the community.",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-white mb-4" />,
      title: "Moderated Environment",
      description: "Active moderation to ensure a safe, respectful, and appropriate gaming environment for all ages.",
      color: "from-green-500 to-green-700"
    },
    {
      icon: <FaUserFriends className="text-4xl text-white mb-4" />,
      title: "Age-Appropriate Sections",
      description: "Separate channels and events for different age groups to ensure appropriate interactions.",
      color: "from-yellow-500 to-yellow-700"
    },
    {
      icon: <FaTrophy className="text-4xl text-white mb-4" />,
      title: "Tournaments & Prizes",
      description: "Competitive tournaments with recognition and prizes for participants and winners.",
      color: "from-red-500 to-red-700"
    },
    {
      icon: <FaComments className="text-4xl text-white mb-4" />,
      title: "Voice Chat",
      description: "Moderated voice channels for in-game communication and social interaction.",
      color: "from-purple-500 to-purple-700"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="features" className="section bg-slate-50 overflow-hidden">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Community Features</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Ghadeer Club offers a comprehensive gaming experience with features designed to create 
            a safe, engaging, and value-aligned environment for the Shia community.
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="feature-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`bg-gradient-to-r ${feature.color} p-6 text-center`}>
                {feature.icon}
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-slate-600 mb-4">{feature.description}</p>
                <a href="#waitlist" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors">
                  Join Waitlist <FaChevronRight className="ml-1 text-sm" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 flex flex-col md:flex-row items-center bg-white p-8 rounded-2xl shadow-xl border border-slate-100"
        >
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-200 rounded-full opacity-50 blur-xl"></div>
              <img 
                src="https://images.pexels.com/photos/8111991/pexels-photo-8111991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Muslim family enjoying gaming together" 
                className="rounded-xl shadow-lg relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary-200 rounded-full opacity-50 blur-xl"></div>
            </div>
          </div>
          <div className="md:w-1/2">
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              Our Community
            </span>
            <h3 className="text-2xl font-bold mb-4 font-heading">Join Our Growing Community</h3>
            <p className="text-slate-700 mb-6">
              Ghadeer Club is more than just gaming—it's about building a community where Shia gamers can connect, 
              compete, and collaborate in a safe environment that respects our values and traditions.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-slate-700">Connect with fellow Shia gamers worldwide</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-slate-700">Participate in exclusive tournaments and events</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-slate-700">Enjoy a moderated, safe gaming environment</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-slate-700">Build lasting friendships with like-minded individuals</span>
              </li>
            </ul>
            <a href="#waitlist" className="btn btn-primary">Join the Waitlist</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
