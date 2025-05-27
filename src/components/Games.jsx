import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPlaystation, FaXbox, FaSteam, FaMobile, FaDesktop, FaFilter, FaSearch } from 'react-icons/fa'

const Games = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  
  const games = [
    {
      title: "Call of Duty",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Competitive first-person shooter with various game modes including Warzone battle royale",
      platforms: [<FaPlaystation key="ps" />, <FaXbox key="xbox" />, <FaDesktop key="pc" />],
      category: "fps"
    },
    {
      title: "FIFA",
      image: "https://images.pexels.com/photos/3841262/pexels-photo-3841262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "The world's most popular football simulation game with realistic gameplay",
      platforms: [<FaPlaystation key="ps" />, <FaXbox key="xbox" />, <FaDesktop key="pc" />],
      category: "sports"
    },
    {
      title: "Minecraft",
      image: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Creative building and survival in a procedurally generated world",
      platforms: [<FaDesktop key="pc" />, <FaMobile key="mobile" />, <FaPlaystation key="ps" />, <FaXbox key="xbox" />],
      category: "creative"
    },
    {
      title: "Roblox",
      image: "https://images.pexels.com/photos/7360387/pexels-photo-7360387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Platform with thousands of user-created games for all ages",
      platforms: [<FaDesktop key="pc" />, <FaMobile key="mobile" />, <FaXbox key="xbox" />],
      category: "creative"
    },
    {
      title: "Madden NFL",
      image: "https://images.pexels.com/photos/159490/yale-soccer-football-goal-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "American football simulation with franchise mode and online leagues",
      platforms: [<FaPlaystation key="ps" />, <FaXbox key="xbox" />],
      category: "sports"
    },
    {
      title: "Fortnite",
      image: "https://images.pexels.com/photos/7915578/pexels-photo-7915578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Popular battle royale game with building mechanics and frequent updates",
      platforms: [<FaPlaystation key="ps" />, <FaXbox key="xbox" />, <FaDesktop key="pc" />, <FaMobile key="mobile" />],
      category: "battle-royale"
    },
    {
      title: "Apex Legends",
      image: "https://images.pexels.com/photos/7915509/pexels-photo-7915509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Team-based battle royale with unique character abilities",
      platforms: [<FaPlaystation key="ps" />, <FaXbox key="xbox" />, <FaDesktop key="pc" />],
      category: "battle-royale"
    },
    {
      title: "Rocket League",
      image: "https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Soccer with rocket-powered cars in various arena styles",
      platforms: [<FaPlaystation key="ps" />, <FaXbox key="xbox" />, <FaDesktop key="pc" />],
      category: "sports"
    }
  ]

  const filters = [
    { id: 'all', label: 'All Games' },
    { id: 'fps', label: 'FPS' },
    { id: 'sports', label: 'Sports' },
    { id: 'creative', label: 'Creative' },
    { id: 'battle-royale', label: 'Battle Royale' }
  ]

  const filteredGames = games.filter(game => {
    const matchesFilter = activeFilter === 'all' || game.category === activeFilter
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          game.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist')
    if (waitlistSection) {
      window.scrollTo({
        top: waitlistSection.offsetTop - 80,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="games" className="section bg-game-pattern bg-cover bg-center text-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Featured Games</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Join us for a variety of popular games across multiple platforms. From competitive shooters to 
            creative building games, we've got something for everyone in our community.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center bg-slate-800/50 p-4 rounded-xl">
            <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === filter.id 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-700 text-white border-none rounded-full py-2 pl-10 pr-4 focus:ring-2 focus:ring-primary-500 focus:outline-none"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            </div>
          </div>
        </motion.div>

        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredGames.map((game, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="game-card group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.title} 
                    className="game-card-image w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end">
                    <h3 className="text-xl font-bold text-white p-4">{game.title}</h3>
                  </div>
                  <div className="absolute top-3 right-3 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded uppercase">
                    {game.category.replace('-', ' ')}
                  </div>
                </div>
                <div className="p-4 bg-white text-slate-800">
                  <p className="text-sm mb-3">{game.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {game.platforms.map((platform, i) => (
                        <span key={i} className="text-primary-600">{platform}</span>
                      ))}
                    </div>
                    <button 
                      onClick={scrollToWaitlist}
                      className="text-xs font-medium text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      Join to Play →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">🎮</div>
            <h3 className="text-xl font-bold mb-2">No games found</h3>
            <p className="text-slate-300">Try adjusting your search or filter criteria</p>
          </div>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-slate-800/50 p-6 rounded-xl max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-3">Game Request</h3>
            <p className="text-slate-300 mb-6">
              Don't see your favorite game? Our community is constantly expanding! Join the waitlist and let us know what games you'd like to play.
            </p>
            <button 
              onClick={scrollToWaitlist}
              className="btn btn-primary"
            >
              Join the Waitlist
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Games
