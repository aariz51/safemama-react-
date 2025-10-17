import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Calendar, Baby, Clock, Heart, Calculator, ArrowRight, Smartphone, Star, Gift, Apple } from 'lucide-react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'
import { calculateDueDate, formatDate, formatPregnancyWeek, getTrimesterInfo, isValidPregnancyDate, type DueDateResult } from '../../utils/calculations'

const GEMINI_API_KEY = 'AIzaSyBWAG2FqzvAi93rDy1yAh5FZ7JPoPXngxE';

// Helper function to clean markdown formatting
const cleanMarkdown = (text: string): string => {
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold markdown
    .replace(/\*(.*?)\*/g, '$1')     // Remove italic markdown
    .replace(/#{1,6}\s*/g, '')       // Remove headers
    .replace(/`(.*?)`/g, '$1')       // Remove code formatting
    .replace(/\n\s*\n/g, '\n')       // Remove extra line breaks
    .trim();
};

const generateWeeklyInsights = async (currentWeek: number, trimester: number): Promise<string[]> => {
  try {
    console.log('Generating AI insights for week:', currentWeek);
    
    const prompt = `Generate 5 personalized weekly insights for pregnancy week ${currentWeek} (trimester ${trimester}):

1. Baby development this week
2. Mother's body changes
3. Prenatal care reminders
4. Nutrition/lifestyle tips
5. Encouraging message

Format as simple bullet points without any markdown formatting like ** or *.`;

    const requestBody = {
      contents: [{
        parts: [{
          text: prompt
        }]
      }]
    };

    const response = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent',
      {
        method: 'POST',
        headers: {
          'x-goog-api-key': GEMINI_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      }
    );

    if (!response.ok) {
      throw new Error('AI request failed');
    }

    const data = await response.json();
    
    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
      throw new Error('Invalid AI response');
    }

    const content = cleanMarkdown(data.candidates[0].content.parts[0].text);
    
    // Parse insights from AI response
    const insights = content
      .split('\n')
      .filter((line: string) => line.trim().length > 10)
      .map((line: string) => line.replace(/^\d+\.\s*/, '').replace(/^[•\-*]\s*/, '').trim())
      .filter((line: string) => line.length > 10)
      .slice(0, 5);

    return insights.length > 0 ? insights : getDefaultInsights(currentWeek, trimester);

  } catch (error) {
    console.error('AI insight generation failed:', error);
    return getDefaultInsights(currentWeek, trimester);
  }
};

const getDefaultInsights = (currentWeek: number, trimester: number): string[] => {
  if (trimester === 1) {
    return [
      "Your baby's major organs are forming during this crucial period",
      "Morning sickness may be at its peak - try small, frequent meals",
      "Prenatal vitamins are essential for neural tube development",
      "Rest when you need to - your body is working hard",
      "Every day brings you closer to meeting your little one!"
    ];
  } else if (trimester === 2) {
    return [
      "You might start feeling baby's first movements soon",
      "This is often called the 'golden trimester' - enjoy increased energy",
      "Consider starting prenatal yoga or gentle exercise",
      "Time for your anatomy scan - how exciting!",
      "Your baby can now hear your voice - talk or sing to them!"
    ];
  } else {
    return [
      "Your baby is gaining weight rapidly and preparing for birth",
      "Practice breathing techniques and prepare your birth plan",
      "Stock up on essentials and prepare your hospital bag",
      "Rest as much as possible - you'll need energy for labor",
      "You're in the home stretch - you're doing amazingly!"
    ];
  }
};

const DueDateCalculator: React.FC = () => {
  const [lastPeriodDate, setLastPeriodDate] = useState('')
  const [result, setResult] = useState<DueDateResult | null>(null)
  const [weeklyInsights, setWeeklyInsights] = useState<string[]>([])
  const [error, setError] = useState('')
  const [showAppPromo, setShowAppPromo] = useState(false)
  const [loadingInsights, setLoadingInsights] = useState(false)

  const handleCalculate = async () => {
    setError('')
    
    if (!lastPeriodDate) {
      setError('Please select your last menstrual period date.')
      return
    }
    
    const date = new Date(lastPeriodDate)
    
    if (!isValidPregnancyDate(date)) {
      setError('Please enter a valid date that is not in the future and not more than 10 months ago.')
      return
    }
    
    try {
      const calculationResult = calculateDueDate(date)
      setResult(calculationResult)
      
      // Generate AI insights for current week
      setLoadingInsights(true)
      const insights = await generateWeeklyInsights(calculationResult.currentWeek, calculationResult.trimester)
      setWeeklyInsights(insights)
      setLoadingInsights(false)
      
      // Show app promotion after calculation
      setTimeout(() => setShowAppPromo(true), 2000)
    } catch (err) {
      setError('An error occurred while calculating your due date. Please try again.')
      console.error(err)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCalculate()
    }
  }

  // Get today's date in YYYY-MM-DD format for max date
  const today = new Date()
  const maxDate = today.toISOString().split('T')[0]
  
  // Get minimum date (10 months ago)
  const minDate = new Date()
  minDate.setMonth(minDate.getMonth() - 10)
  const minDateString = minDate.toISOString().split('T')[0]

  // Helper function to calculate trimester end dates
  const getFirstTrimesterEnd = (lastPeriodDate: Date): Date => {
    const firstTrimesterEnd = new Date(lastPeriodDate);
    firstTrimesterEnd.setDate(firstTrimesterEnd.getDate() + (12 * 7)); // 12 weeks
    return firstTrimesterEnd;
  }

  const getSecondTrimesterEnd = (lastPeriodDate: Date): Date => {
    const secondTrimesterEnd = new Date(lastPeriodDate);
    secondTrimesterEnd.setDate(secondTrimesterEnd.getDate() + (27 * 7)); // 27 weeks
    return secondTrimesterEnd;
  }

  return (
    <>
      <Helmet>
        <title>Free Due Date Calculator | SafeMama - Calculate Your Pregnancy Due Date</title>
        <meta 
          name="description" 
          content="Free pregnancy due date calculator. Calculate your expected delivery date, track pregnancy weeks, and get personalized weekly insights." 
        />
        <meta 
          name="keywords" 
          content="due date calculator, pregnancy calculator, expected delivery date, pregnancy weeks calculator, pregnancy tracker" 
        />
        <link rel="canonical" href="https://safemama.co/tools/due-date-calculator" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Due Date Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate your expected delivery date and get personalized weekly insights powered by AI.
            </p>
            
            <div className="flex justify-center space-x-8 mt-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                <span>4.9/5 Rating</span>
              </div>
              <div>50K+ calculations</div>
              <div>AI insights</div>
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 mb-8">
                <div className="flex items-center mb-6">
                  <Calculator className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Calculate Your Due Date</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="lmp" className="block text-sm font-medium text-gray-700 mb-2">
                      First day of your last menstrual period (LMP)
                    </label>
                    <input
                      id="lmp"
                      type="date"
                      value={lastPeriodDate}
                      onChange={(e) => setLastPeriodDate(e.target.value)}
                      onKeyPress={handleKeyPress}
                      min={minDateString}
                      max={maxDate}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Enter the first day of your last period to calculate your due date.
                    </p>
                  </div>
                  
                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}
                  
                  <Button 
                    onClick={handleCalculate}
                    disabled={!lastPeriodDate || loadingInsights}
                    size="lg"
                    icon={loadingInsights ? undefined : ArrowRight}
                    className="w-full"
                  >
                    {loadingInsights ? 'Calculating & Generating Insights...' : 'Calculate Due Date'}
                  </Button>
                </div>
              </Card>
            </motion.div>

            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Main Results */}
                <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                      <Baby className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {formatDate(result.dueDate)}
                    </h2>
                    <p className="text-lg text-gray-600">Your estimated due date</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-3">
                        <Clock className="w-6 h-6 text-blue-500 mr-2" />
                        <span className="font-semibold text-gray-900">Current Week</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">
                        {formatPregnancyWeek(result.currentWeek, result.currentDay)}
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-3">
                        <Heart className="w-6 h-6 text-purple-500 mr-2" />
                        <span className="font-semibold text-gray-900">Days to Go</span>
                      </div>
                      <div className="text-2xl font-bold text-purple-600">
                        {result.daysUntilDue > 0 ? result.daysUntilDue : 0}
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-3">
                        <Gift className="w-6 h-6 text-pink-500 mr-2" />
                        <span className="font-semibold text-gray-900">Trimester</span>
                      </div>
                      <div className="text-2xl font-bold text-pink-600">
                        {result.trimester}
                      </div>
                    </div>
                  </div>

                  {/* Baby Size Information */}
                  <div className="mt-8 text-center p-4 bg-white rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Baby Size This Week</h3>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Length</p>
                        <p className="text-lg font-bold text-blue-600 break-words">{result.babylengthMm}mm</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Size of a</p>
                        <p className="text-lg font-bold text-pink-600 capitalize break-words">{result.babylengthDescription}</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Weekly Insights */}
                <Card className="p-8">
                  <div className="flex items-center mb-6">
                    <Star className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      Week {result.currentWeek} Insights - Powered by AI
                    </h3>
                  </div>
                  
                  {loadingInsights ? (
                    <div className="text-center py-8">
                      <div className="animate-pulse">
                        <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
                        <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-4">
                      {weeklyInsights.map((insight, index) => (
                        <div key={index} className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                          <div className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <p className="text-gray-700 text-sm break-words">{insight}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </Card>

                {/* Pregnancy Timeline */}
                <Card className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Important Milestones</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                      <span className="font-medium text-gray-900">Conception Date</span>
                      <span className="text-green-700 font-semibold">{formatDate(result.conceptionDate)}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                      <span className="font-medium text-gray-900">End of First Trimester</span>
                      <span className="text-blue-700 font-semibold">{formatDate(getFirstTrimesterEnd(new Date(lastPeriodDate)))}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                      <span className="font-medium text-gray-900">End of Second Trimester</span>
                      <span className="text-purple-700 font-semibold">{formatDate(getSecondTrimesterEnd(new Date(lastPeriodDate)))}</span>
                    </div>
                  </div>
                </Card>

                {/* Trimester Info */}
                <Card className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    {getTrimesterInfo(result.trimester).name} Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Duration</h4>
                      <p className="text-gray-700">{getTrimesterInfo(result.trimester).weeks}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Focus</h4>
                      <p className="text-gray-700">{getTrimesterInfo(result.trimester).keyFocus}</p>
                    </div>
                    <div className="md:col-span-2">
                      <h4 className="font-semibold text-gray-900 mb-2">Common Symptoms</h4>
                      <div className="flex flex-wrap gap-2">
                        {getTrimesterInfo(result.trimester).commonSymptoms.map((symptom, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            {symptom}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}

            {/* App Promotion */}
            {showAppPromo && (
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center">
                  <Smartphone className="w-16 h-16 mx-auto mb-4 opacity-90" />
                  <h3 className="text-2xl font-bold mb-4">Track Your Entire Pregnancy Journey</h3>
                  <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                    Get daily updates, personalized insights, and comprehensive pregnancy tracking with the SafeMama app!
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="text-center">
                      <Calendar className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm">Daily pregnancy tracking</p>
                    </div>
                    <div className="text-center">
                      <Baby className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm">Baby development updates</p>
                    </div>
                    <div className="text-center">
                      <Heart className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm">Health & wellness tips</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <a
                      href="https://apps.apple.com/us/app/safemama-pregnancy-app/id6748413103"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-black text-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
                    >
                      <Apple className="w-5 h-5 mr-2" />
                      Download on App Store
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.safemama.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      Get it on Google Play
                    </a>
                  </div>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default DueDateCalculator
