import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGamepad, FaCheck, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { supabase } from '../lib/supabase'

const Quiz = ({ waitlistEntryId, userData }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [quizData, setQuizData] = useState({
    gamerType: '',
    ageGroup: '',
    playFrequency: '',
    preferredPlatform: '',
    interests: []
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [error, setError] = useState('')

  const questions = [
    {
      id: 'gamerType',
      question: 'What type of gamer are you?',
      options: [
        { value: 'casual', label: 'Casual Gamer', description: 'I play games occasionally for fun' },
        { value: 'moderate', label: 'Moderate Gamer', description: 'I play regularly but not competitively' },
        { value: 'hardcore', label: 'Hardcore Gamer', description: 'I play intensively and competitively' },
        { value: 'social', label: 'Social Gamer', description: 'I mainly play to connect with friends' },
        { value: 'parent', label: 'Parent Gamer', description: 'I play with my children' }
      ]
    },
    {
      id: 'ageGroup',
      question: 'Which age group do you belong to?',
      options: [
        { value: 'under18', label: 'Under 18' },
        { value: '18-24', label: '18-24' },
        { value: '25-34', label: '25-34' },
        { value: '35-44', label: '35-44' },
        { value: '45plus', label: '45+' }
      ]
    },
    {
      id: 'playFrequency',
      question: 'How often do you play games?',
      options: [
        { value: 'daily', label: 'Daily' },
        { value: 'weekly', label: 'A few times a week' },
        { value: 'monthly', label: 'A few times a month' },
        { value: 'rarely', label: 'Rarely' },
        { value: 'new', label: 'I\'m new to gaming' }
      ]
    },
    {
      id: 'preferredPlatform',
      question: 'What platform do you primarily play on?',
      options: [
        { value: 'pc', label: 'PC' },
        { value: 'playstation', label: 'PlayStation' },
        { value: 'xbox', label: 'Xbox' },
        { value: 'nintendo', label: 'Nintendo Switch' },
        { value: 'mobile', label: 'Mobile' }
      ]
    },
    {
      id: 'interests',
      question: 'What are you most interested in? (Select all that apply)',
      multiSelect: true,
      options: [
        { value: 'tournaments', label: 'Tournaments & Competitions' },
        { value: 'familyEvents', label: 'Family Gaming Events' },
        { value: 'learning', label: 'Learning New Games' },
        { value: 'socializing', label: 'Meeting Other Shia Gamers' },
        { value: 'streaming', label: 'Streaming & Content Creation' },
        { value: 'mentoring', label: 'Mentoring Younger Players' },
        { value: 'islamicContent', label: 'Islamic-Themed Games & Content' }
      ]
    }
  ]

  const handleOptionSelect = (questionId, value) => {
    if (questionId === 'interests') {
      // For multi-select questions
      const currentInterests = [...quizData.interests]
      if (currentInterests.includes(value)) {
        // Remove if already selected
        setQuizData({
          ...quizData,
          interests: currentInterests.filter(item => item !== value)
        })
      } else {
        // Add if not selected
        setQuizData({
          ...quizData,
          interests: [...currentInterests, value]
        })
      }
    } else {
      // For single-select questions
      setQuizData({
        ...quizData,
        [questionId]: value
      })
    }
  }

  const isCurrentQuestionAnswered = () => {
    const currentQuestion = questions[currentStep]
    if (currentQuestion.id === 'interests') {
      return quizData.interests.length > 0
    }
    return !!quizData[currentQuestion.id]
  }

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      submitQuiz()
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const submitQuiz = async () => {
    setIsSubmitting(true)
    setError('')

    try {
      const { data, error: supabaseError } = await supabase
        .from('quiz_responses')
        .insert([
          {
            waitlist_entry_id: waitlistEntryId,
            gamer_type: quizData.gamerType,
            age_group: quizData.ageGroup,
            play_frequency: quizData.playFrequency,
            preferred_platform: quizData.preferredPlatform,
            interests: quizData.interests
          }
        ])
        .select()

      if (supabaseError) {
        console.error('Error submitting quiz to Supabase:', supabaseError)
        setError('There was an error submitting your quiz. Please try again.')
        setIsSubmitting(false)
        return
      }

      console.log('Quiz submitted successfully:', data)
      setIsCompleted(true)
    } catch (err) {
      console.error('Error in quiz submission process:', err)
      setError('There was an error submitting your quiz. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const currentQuestion = questions[currentStep]
  const progress = ((currentStep + 1) / questions.length) * 100

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
          className="max-w-3xl mx-auto"
        >
          {!isCompleted ? (
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-8">
                <div className="bg-primary-100 p-3 rounded-full mr-4">
                  <FaGamepad className="text-primary-600 text-xl" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-heading">Gamer Profile Quiz</h2>
                  <p className="text-slate-600">Help us customize your experience</p>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex justify-between text-sm text-slate-500 mb-2">
                  <span>Question {currentStep + 1} of {questions.length}</span>
                  <span>{Math.round(progress)}% Complete</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
              
              {error && (
                <div className="mb-6 p-3 bg-red-50 rounded-lg border border-red-100 text-red-600">
                  {error}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-6">{currentQuestion.question}</h3>
                
                <div className="space-y-3">
                  {currentQuestion.options.map((option) => {
                    const isSelected = currentQuestion.multiSelect 
                      ? quizData.interests.includes(option.value)
                      : quizData[currentQuestion.id] === option.value
                    
                    return (
                      <div 
                        key={option.value}
                        onClick={() => handleOptionSelect(currentQuestion.id, option.value)}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          isSelected 
                            ? 'border-primary-500 bg-primary-50' 
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-3 ${
                            isSelected ? 'border-primary-500 bg-primary-500' : 'border-slate-300'
                          }`}>
                            {isSelected && <FaCheck className="text-white text-xs" />}
                          </div>
                          <div>
                            <h4 className="font-medium">{option.label}</h4>
                            {option.description && (
                              <p className="text-sm text-slate-500">{option.description}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              
              <div className="flex justify-between">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className={`btn flex items-center ${
                    currentStep === 0 ? 'opacity-50 cursor-not-allowed' : 'btn-secondary'
                  }`}
                >
                  <FaArrowLeft className="mr-2" />
                  Previous
                </button>
                
                <button
                  onClick={nextStep}
                  disabled={!isCurrentQuestionAnswered() || isSubmitting}
                  className={`btn btn-primary flex items-center ${
                    !isCurrentQuestionAnswered() || isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {currentStep < questions.length - 1 ? (
                    <>
                      Next
                      <FaArrowRight className="ml-2" />
                    </>
                  ) : isSubmitting ? (
                    'Submitting...'
                  ) : (
                    'Complete Quiz'
                  )}
                </button>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <FaCheck className="w-10 h-10 text-green-500" />
              </div>
              
              <h2 className="text-3xl font-bold mb-4 font-heading">Quiz Completed!</h2>
              
              <p className="text-lg text-slate-700 mb-8">
                Thank you for sharing your gaming preferences with us, {userData?.name}! We'll use this information to create the best possible experience for you when Ghadeer Club launches.
              </p>
              
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-xl mb-8">
                <h3 className="font-bold text-xl mb-4">What's Next?</h3>
                <p className="text-slate-700">
                  We'll notify you at <span className="font-medium">{userData?.email}</span> when Ghadeer Club is ready to launch. In the meantime, get ready for an amazing gaming experience with your Shia community!
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <a 
                  href="https://discord.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary flex items-center justify-center"
                >
                  <FaDiscord className="mr-2" />
                  Follow Us on Discord
                </a>
                
                <a 
                  href="/" 
                  className="btn btn-primary flex items-center justify-center"
                >
                  Return to Homepage
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

import { FaDiscord } from 'react-icons/fa'
export default Quiz
