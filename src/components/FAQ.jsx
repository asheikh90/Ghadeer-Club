import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: "What is Ghadeer Club?",
      answer: "Ghadeer Club is an exclusive Discord community created specifically for Shia Muslims who enjoy gaming. Our platform provides a safe, moderated environment where members can connect, play games together, participate in tournaments, and build friendships with others who share similar values."
    },
    {
      question: "When will Ghadeer Club launch?",
      answer: "We're currently in the pre-launch phase and building our waitlist. The official launch date will be announced soon to all waitlist members. By joining the waitlist, you'll be among the first to know when we launch and get early access to the community."
    },
    {
      question: "Is Ghadeer Club appropriate for all ages?",
      answer: "Yes! We've designed Ghadeer Club to be family-friendly with separate channels and events for different age groups. We have strict moderation policies to ensure all content is appropriate, and we organize age-specific gaming sessions to ensure everyone has a safe and enjoyable experience."
    },
    {
      question: "What games will be supported?",
      answer: "We support a wide variety of popular games across multiple platforms including PlayStation, Xbox, PC, and mobile. Some featured games include Call of Duty, FIFA, Minecraft, Roblox, Fortnite, and many more. We're also open to adding more games based on community interest."
    },
    {
      question: "How is the community moderated?",
      answer: "Our community is actively moderated by a team of dedicated volunteers who ensure all interactions remain respectful, appropriate, and aligned with Islamic values. We have clear community guidelines, and our moderation team is available to address any concerns or issues that may arise."
    },
    {
      question: "Do I need to pay to join?",
      answer: "Ghadeer Club is completely free to join! We believe in creating an accessible community for all Shia gamers. In the future, we may offer optional premium features or merchandise, but the core community access will always remain free."
    },
    {
      question: "How can I become a moderator or volunteer?",
      answer: "Once we launch, active and engaged community members will have opportunities to apply for volunteer positions including moderators, event organizers, and content creators. These opportunities will be announced within the community."
    }
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section bg-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Find answers to common questions about Ghadeer Club. If you don't see your question here, 
            feel free to reach out to us after joining the waitlist.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="faq-item"
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span>{faq.question}</span>
                <span className="text-primary-600">
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="faq-answer">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-8 rounded-2xl shadow-xl text-white max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 font-heading">Ready to Join Our Community?</h3>
            <p className="text-white/90 mb-6">
              Join our waitlist today and be the first to know when Ghadeer Club launches. 
              Connect with fellow Shia gamers in a safe, moderated environment.
            </p>
            <a href="#waitlist" className="btn bg-white text-primary-600 hover:bg-white/90">
              Join the Waitlist
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
