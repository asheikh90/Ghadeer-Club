import { motion } from 'framer-motion'
import { FaUsers, FaGamepad, FaShieldAlt } from 'react-icons/fa'

const About = () => {
  const stats = [
    { icon: <FaUsers />, value: '500+', label: 'Waitlist Members' },
    { icon: <FaGamepad />, value: '20+', label: 'Supported Games' },
    { icon: <FaShieldAlt />, value: '100%', label: 'Safe Environment' }
  ]

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12"
          >
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">Building a Safe Gaming Community for Shia Muslims</h2>
            <p className="text-lg text-slate-700 mb-6">
              Ghadeer Club was founded with a simple mission: to create a welcoming, safe, and value-aligned gaming community 
              for Shia Muslims of all ages. We understand the challenges of finding appropriate gaming environments that respect 
              our values and traditions.
            </p>
            <p className="text-lg text-slate-700 mb-8">
              Our community provides a space where members can enjoy popular games, participate in tournaments, and build 
              friendships with fellow gamers who share similar values and cultural understanding.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-slate-50 p-4 rounded-xl text-center"
                >
                  <div className="text-primary-600 text-2xl mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="#waitlist" className="btn btn-primary">
                Join Our Waitlist
              </a>
              <a href="#features" className="btn btn-secondary">
                Explore Features
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden shadow-lg transform translate-y-8">
                  <img 
                    src="https://images.pexels.com/photos/8111944/pexels-photo-8111944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Muslim family playing video games" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.pexels.com/photos/8111837/pexels-photo-8111837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Muslim gamer with controller" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.pexels.com/photos/8111904/pexels-photo-8111904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Muslim family enjoying games together" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg transform translate-y-8">
                  <img 
                    src="https://images.pexels.com/photos/8111834/pexels-photo-8111834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Muslim gamer with headset" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
