import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  Heart, 
  Activity, 
  Shield, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Calendar,
  Zap,
  Target,
  Play,
  Pause
} from 'lucide-react'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'

const PregnancyExerciseGuide: React.FC = () => {
  const trimesterExercises = [
    {
      trimester: "First Trimester",
      weeks: "1-12 weeks",
      icon: Heart,
      color: "from-pink-500 to-rose-600",
      safeExercises: [
        "Walking: 30 minutes daily at moderate pace",
        "Swimming: Low-impact full body workout",
        "Prenatal yoga: Gentle stretching and breathing",
        "Stationary cycling: Cardiovascular fitness"
      ],
      avoidExercises: [
        "High-impact activities (running if not used to it)",
        "Contact sports (football, hockey)",
        "Activities with fall risk (skiing, horseback riding)",
        "Hot yoga or exercises in hot environments"
      ],
      modifications: [
        "Listen to your body and rest when needed",
        "Stay hydrated and avoid overheating",
        "Reduce intensity if experiencing morning sickness",
        "Focus on establishing consistent routine"
      ],
      duration: "20-30 minutes",
      frequency: "3-4 times per week"
    },
    {
      trimester: "Second Trimester",
      weeks: "13-26 weeks",
      icon: Activity,
      color: "from-blue-500 to-cyan-600",
      safeExercises: [
        "Brisk walking: Increase to 45 minutes",
        "Water aerobics: Joint-friendly exercise",
        "Modified strength training: Light weights",
        "Prenatal Pilates: Core strength and stability"
      ],
      avoidExercises: [
        "Supine exercises (lying on back after 16 weeks)",
        "Heavy weightlifting or straining",
        "Activities requiring precise balance",
        "Exercises causing shortness of breath"
      ],
      modifications: [
        "Use pregnancy support belt if needed",
        "Avoid exercises that cause doming of abs",
        "Monitor heart rate (talk test)",
        "Include pelvic floor strengthening"
      ],
      duration: "30-45 minutes",
      frequency: "4-5 times per week"
    },
    {
      trimester: "Third Trimester",
      weeks: "27-40 weeks",
      icon: Shield,
      color: "from-purple-500 to-pink-600",
      safeExercises: [
        "Gentle walking: Adjust pace as needed",
        "Swimming: Excellent for joint relief",
        "Prenatal yoga: Prepare for labor",
        "Pelvic floor exercises: Birth preparation"
      ],
      avoidExercises: [
        "Any exercise causing discomfort",
        "Twisting or sudden direction changes",
        "Exercises on back or stomach",
        "High-intensity or exhausting activities"
      ],
      modifications: [
        "Shorter, more frequent exercise sessions",
        "Focus on breathing and relaxation techniques",
        "Include birth preparation exercises",
        "Stop if experiencing contractions or pain"
      ],
      duration: "20-30 minutes",
      frequency: "3-4 times per week"
    }
  ]

  const exerciseBenefits = [
    {
      benefit: "Improved Energy",
      icon: Zap,
      description: "Regular exercise combats pregnancy fatigue and boosts energy levels",
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      benefit: "Better Sleep",
      icon: Clock,
      description: "Physical activity helps improve sleep quality during pregnancy",
      color: "bg-purple-100 text-purple-800"
    },
    {
      benefit: "Easier Labor",
      icon: Target,
      description: "Fit mothers often experience shorter labor and delivery",
      color: "bg-green-100 text-green-800"
    },
    {
      benefit: "Mood Enhancement",
      icon: Heart,
      description: "Exercise releases endorphins that improve mood and reduce stress",
      color: "bg-pink-100 text-pink-800"
    },
    {
      benefit: "Weight Management",
      icon: Activity,
      description: "Helps maintain healthy weight gain throughout pregnancy",
      color: "bg-blue-100 text-blue-800"
    },
    {
      benefit: "Faster Recovery",
      icon: CheckCircle,
      description: "Speeds up postpartum recovery and return to pre-pregnancy fitness",
      color: "bg-emerald-100 text-emerald-800"
    }
  ]

  const safetyGuidelines = [
    {
      category: "Before Starting",
      guidelines: [
        "Get medical clearance from healthcare provider",
        "Discuss exercise plans during prenatal visits",
        "Consider pre-pregnancy fitness level",
        "Join prenatal exercise classes when possible"
      ]
    },
    {
      category: "During Exercise",
      guidelines: [
        "Use the 'talk test' - you should be able to hold conversation",
        "Stay hydrated before, during, and after exercise",
        "Avoid exercising in hot, humid conditions",
        "Wear supportive athletic wear and proper footwear"
      ]
    },
    {
      category: "Warning Signs to Stop",
      guidelines: [
        "Vaginal bleeding or fluid leakage",
        "Chest pain or severe shortness of breath",
        "Headache, dizziness, or faintness",
        "Calf pain or swelling, contractions"
      ]
    }
  ]

  const weeklySchedule = {
    "Monday": {
      activity: "Prenatal Yoga",
      duration: "30 minutes",
      focus: "Flexibility & Relaxation",
      icon: "🧘‍♀️"
    },
    "Tuesday": {
      activity: "Walking",
      duration: "45 minutes",
      focus: "Cardiovascular Health",
      icon: "🚶‍♀️"
    },
    "Wednesday": {
      activity: "Swimming",
      duration: "30 minutes",
      focus: "Full Body Workout",
      icon: "🏊‍♀️"
    },
    "Thursday": {
      activity: "Prenatal Pilates",
      duration: "30 minutes",
      focus: "Core & Stability",
      icon: "💪"
    },
    "Friday": {
      activity: "Light Strength Training",
      duration: "25 minutes",
      focus: "Muscle Tone",
      icon: "🏋️‍♀️"
    },
    "Saturday": {
      activity: "Gentle Walking",
      duration: "30 minutes",
      focus: "Active Recovery",
      icon: "🌸"
    },
    "Sunday": {
      activity: "Rest or Gentle Stretching",
      duration: "15 minutes",
      focus: "Recovery",
      icon: "🛋️"
    }
  }

  // Exercise demonstration icons
  const ExerciseIcon: React.FC<{ type: 'cardio' | 'strength' | 'flexibility' | 'water' }> = ({ type }) => {
    const configs = {
      cardio: { color: 'from-red-400 to-pink-500', icon: '❤️' },
      strength: { color: 'from-purple-400 to-blue-500', icon: '💪' },
      flexibility: { color: 'from-green-400 to-emerald-500', icon: '🧘' },
      water: { color: 'from-blue-400 to-cyan-500', icon: '🏊' }
    }
    
    const config = configs[type]
    return (
      <div className={`w-12 h-12 bg-gradient-to-r ${config.color} rounded-full flex items-center justify-center text-white text-xl`}>
        {config.icon}
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>Safe Pregnancy Exercise Guide 2025 | SafeMama - Workout Plans for Every Trimester</title>
        <meta name="description" content="Complete pregnancy exercise guide with safe workouts, modifications, and fitness plans for each trimester. Expert-approved prenatal fitness advice." />
        <meta name="keywords" content="pregnancy exercise, prenatal fitness, pregnancy workout, safe exercise during pregnancy, trimester exercise guide" />
        <link rel="canonical" href="https://safemama.co/blog/pregnancy-exercise-guide/" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <motion.div 
            className="mb-8" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <Link to="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />Back to Blog
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div 
            className="text-center mb-16" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <ExerciseIcon type="cardio" />
              <ExerciseIcon type="strength" />
              <ExerciseIcon type="flexibility" />
              <ExerciseIcon type="water" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Safe Pregnancy <span className="text-gradient">Exercise Guide</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay fit and healthy during pregnancy with safe, effective exercises tailored for each trimester. Expert-approved workouts for expecting mothers.
            </p>
            <div className="flex items-center justify-center text-sm text-gray-500 space-x-4">
              <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />12 min read</span>
              <span>Last Updated: September 2025</span>
            </div>
          </motion.div>

          {/* Exercise Benefits */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Benefits of Exercise During Pregnancy</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exerciseBenefits.map((benefit, index) => (
                <Card key={benefit.benefit} className="hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{benefit.benefit}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Trimester Exercise Guides */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Exercise by Trimester</h2>
            <div className="space-y-8">
              {trimesterExercises.map((guide, index) => (
                <Card key={guide.trimester} className="overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${guide.color} rounded-full flex items-center justify-center mr-4`}>
                        <guide.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-gray-900">{guide.trimester}</h3>
                        <p className="text-gray-600">{guide.weeks}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">Duration</div>
                        <div className="font-semibold">{guide.duration}</div>
                        <div className="text-sm text-gray-600">Frequency</div>
                        <div className="font-semibold">{guide.frequency}</div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2" />Recommended
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          {guide.safeExercises.map((exercise, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {exercise}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                          <AlertTriangle className="w-5 h-5 mr-2" />Avoid
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          {guide.avoidExercises.map((exercise, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {exercise}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                          <Target className="w-5 h-5 mr-2" />Modifications
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          {guide.modifications.map((mod, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {mod}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Safety Guidelines */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Safety Guidelines</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {safetyGuidelines.map((section, index) => (
                <Card key={section.category} className="h-full">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mr-2">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      {section.category}
                    </h3>
                    <ul className="space-y-3">
                      {section.guidelines.map((guideline, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {guideline}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Weekly Schedule */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sample Weekly Schedule</h2>
            <Card className="overflow-hidden">
              <div className="p-8">
                <div className="grid lg:grid-cols-7 gap-4">
                  {Object.entries(weeklySchedule).map(([day, schedule]) => (
                    <div key={day} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-lg font-semibold text-gray-900 mb-2">{day}</div>
                      <div className="text-3xl mb-2">{schedule.icon}</div>
                      <div className="text-sm font-medium text-gray-800 mb-1">{schedule.activity}</div>
                      <div className="text-xs text-gray-600 mb-1">{schedule.duration}</div>
                      <div className="text-xs text-blue-600 font-medium">{schedule.focus}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">Track Your Pregnancy Fitness Journey</h2>
                <p className="text-xl mb-6">
                  Get personalized exercise recommendations and safety tips with SafeMama's pregnancy fitness tracker.
                </p>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  href="https://dub.sh/safemama"
                  className="bg-white text-purple-600 hover:bg-gray-100"
                >
                  Download SafeMama App
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default PregnancyExerciseGuide
