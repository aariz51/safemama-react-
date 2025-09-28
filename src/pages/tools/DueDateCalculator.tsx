import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Calendar, Baby, Clock, Heart, Calculator, ArrowRight } from 'lucide-react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'
import { calculateDueDate, formatDate, formatPregnancyWeek, getTrimesterInfo, isValidPregnancyDate } from '../../utils/calculations'

const DueDateCalculator: React.FC = () => {
  const [lastPeriodDate, setLastPeriodDate] = useState('')
  const [result, setResult] = useState<ReturnType<typeof calculateDueDate> | null>(null)
  const [error, setError] = useState('')

  const handleCalculate = () => {
    setError('')
    
    if (!lastPeriodDate) {
      setError('Please select your last menstrual period date.')
      return
    }

    const date = new Date(lastPeriodDate)
    
    if (!isValidPregnancyDate(date)) {
      setError('Please enter a valid date that is not in the future and within a reasonable pregnancy timeframe.')
      return
    }

    const calculationResult = calculateDueDate(date)
    setResult(calculationResult)
  }

  const trimesterInfo = result ? getTrimesterInfo(result.trimester) : null

  return (
    <>
      <Helmet>
        <title>Due Date Calculator | SafeMama - Pregnancy Due Date & Milestone Tracker</title>
        <meta 
          name="description" 
          content="Free due date calculator. Calculate your pregnancy due date, track baby development milestones, and get personalized pregnancy timeline. Accurate pregnancy week calculator." 
        />
        <meta 
          name="keywords" 
          content="due date calculator, pregnancy calculator, pregnancy weeks, due date estimation, pregnancy milestones, baby development tracker" 
        />
        <link rel="canonical" href="https://safemama.co/tools/due-date-calculator/" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Due Date Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate your pregnancy due date, track your baby's development, and get 
              personalized information about your pregnancy journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Calculator Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <Calculator className="w-6 h-6 text-primary-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Calculate Your Due Date</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="lastPeriod" className="block text-sm font-medium text-gray-700 mb-2">
                      First day of your last menstrual period (LMP)
                    </label>
                    <input
                      type="date"
                      id="lastPeriod"
                      value={lastPeriodDate}
                      onChange={(e) => setLastPeriodDate(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      max={new Date().toISOString().split('T')[0]}
                    />
                    <p className="text-sm text-gray-500 mt-2">
                      Enter the first day of your last menstrual period to calculate your due date.
                    </p>
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}

                  <Button
                    onClick={handleCalculate}
                    className="w-full"
                    size="lg"
                    icon={ArrowRight}
                  >
                    Calculate Due Date
                  </Button>
                </div>

                {/* Information Box */}
                <div className="mt-8 bg-blue-50 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-900 mb-2">How it works</h3>
                  <p className="text-blue-700 text-sm">
                    This calculator uses the standard method of adding 280 days (40 weeks) to your 
                    last menstrual period. This method is used by healthcare providers worldwide 
                    and is accurate for most women with regular 28-day cycles.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {result ? (
                <div className="space-y-6">
                  {/* Main Results */}
                  <Card className="p-8 bg-gradient-to-br from-primary-50 to-secondary-50">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-4">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Due Date</h2>
                      <div className="text-4xl font-bold text-gradient mb-2">
                        {formatDate(result.dueDate)}
                      </div>
                      <p className="text-gray-600">
                        {result.daysUntilDue > 0 
                          ? `${result.daysUntilDue} days to go!` 
                          : result.daysUntilDue === 0 
                          ? 'Your due date is today!' 
                          : 'Your baby is overdue'
                        }
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600">
                          {formatPregnancyWeek(result.currentWeek, result.currentDay)}
                        </div>
                        <p className="text-sm text-gray-600">Current Progress</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-secondary-600">
                          {trimesterInfo?.name}
                        </div>
                        <p className="text-sm text-gray-600">{trimesterInfo?.weeks}</p>
                      </div>
                    </div>
                  </Card>

                  {/* Baby Development */}
                  <Card className="p-8">
                    <div className="flex items-center mb-6">
                      <Baby className="w-6 h-6 text-primary-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">Baby Development</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-semibold text-gray-900">Baby Size</div>
                          <div className="text-sm text-gray-600">Approximately {result.babylengthMm}mm</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary-600 capitalize">
                            {result.babylengthDescription}
                          </div>
                          <div className="text-sm text-gray-500">Size comparison</div>
                        </div>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <div className="font-semibold text-gray-900 mb-2">This Trimester</div>
                        <p className="text-sm text-gray-600 mb-2">{trimesterInfo?.description}</p>
                        <div className="text-sm text-primary-600 font-medium">
                          Key Focus: {trimesterInfo?.keyFocus}
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Important Dates */}
                  <Card className="p-8">
                    <div className="flex items-center mb-6">
                      <Clock className="w-6 h-6 text-primary-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">Important Dates</h3>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-900">Conception Date</span>
                        <span className="text-primary-600">{formatDate(result.conceptionDate)}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-900">End of First Trimester</span>
                        <span className="text-primary-600">
                          {formatDate(new Date(result.conceptionDate.getTime() + (84 * 24 * 60 * 60 * 1000)))}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-900">End of Second Trimester</span>
                        <span className="text-primary-600">
                          {formatDate(new Date(result.conceptionDate.getTime() + (168 * 24 * 60 * 60 * 1000)))}
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-primary-50 rounded-lg border-2 border-primary-200">
                        <span className="font-bold text-gray-900">Due Date (40 weeks)</span>
                        <span className="font-bold text-primary-600">{formatDate(result.dueDate)}</span>
                      </div>
                    </div>
                  </Card>
                </div>
              ) : (
                <Card className="p-8 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Calculate?</h3>
                  <p className="text-gray-600">
                    Enter your last menstrual period date to see your personalized pregnancy timeline 
                    and baby development information.
                  </p>
                </Card>
              )}
            </motion.div>
          </div>

          {/* Additional Information */}
          <motion.div
            className="mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Understanding Your Due Date
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">How Accurate Is It?</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Due date calculations are estimates based on a 280-day pregnancy. Only about 5% 
                    of babies are born exactly on their due date. Most babies are born within 2 weeks 
                    before or after the estimated due date.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Factors That Affect Accuracy</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Irregular menstrual cycles</li>
                    <li>• Conception timing variations</li>
                    <li>• Individual pregnancy lengths</li>
                    <li>• Multiple pregnancies (twins, etc.)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">When to Consult Your Doctor</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    While this calculator provides a good estimate, your healthcare provider may 
                    adjust your due date based on ultrasound measurements, especially during 
                    early pregnancy.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Remember</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• This is an estimate, not a guarantee</li>
                    <li>• Regular prenatal care is essential</li>
                    <li>• Every pregnancy is unique</li>
                    <li>• Trust your healthcare provider's guidance</li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default DueDateCalculator
