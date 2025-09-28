import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  Trash2, 
  AlertTriangle, 
  CheckCircle, 
  Mail, 
  Shield, 
  Clock,
  Lock,
  Download,
  User
} from 'lucide-react'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'

const DeleteAccount: React.FC = () => {
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [email, setEmail] = useState('')
  const [reason, setReason] = useState('')
  
  const deleteReasons = [
    "No longer pregnant/need the app",
    "Privacy concerns",
    "Technical issues with the app",
    "Found a different app",
    "Too many notifications",
    "App doesn't meet my needs",
    "Other"
  ]

  const beforeDeletingSteps = [
    {
      icon: Download,
      title: "Download Your Data",
      description: "Export your scan history, pregnancy journey, and personal data before deletion.",
      action: "Download Data"
    },
    {
      icon: Shield,
      title: "Cancel Active Subscriptions",
      description: "Make sure to cancel any active premium subscriptions to avoid future charges.",
      action: "Manage Subscription"
    },
    {
      icon: Clock,
      title: "Consider Temporary Deactivation",
      description: "You can temporarily deactivate your account instead of permanent deletion.",
      action: "Deactivate Instead"
    }
  ]

  const whatHappensWhenDeleted = [
    "All personal information permanently removed",
    "Scan history and pregnancy data deleted",
    "Account access immediately revoked",
    "Premium subscriptions cancelled",
    "Data removed from AI training datasets",
    "Email unsubscribed from all communications"
  ]

  const handleDeleteRequest = () => {
    // This would typically send an API request to initiate account deletion
    setShowConfirmation(true)
  }

  return (
    <>
      <Helmet>
        <title>Delete Account - SafeMama | Account Deletion Request</title>
        <meta name="description" content="Request deletion of your SafeMama account and personal data. Learn about the account deletion process, what data is removed, and your options." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://safemama.co/delete-account/" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-gray-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <motion.div 
            className="mb-8" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />Back to Home
            </Link>
          </motion.div>

          {!showConfirmation ? (
            <>
              {/* Header */}
              <motion.div 
                className="text-center mb-16" 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mb-6">
                  <Trash2 className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Delete Your Account
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  We're sorry to see you go. Before you delete your account, please review the information below and consider your alternatives.
                </p>
              </motion.div>

              {/* Warning Banner */}
              <motion.div 
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Card className="bg-red-50 border-red-200">
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <AlertTriangle className="w-8 h-8 text-red-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-red-800 mb-2">
                          Account Deletion is Permanent
                        </h3>
                        <p className="text-red-700 mb-4">
                          Once your account is deleted, all your data will be permanently removed and cannot be recovered. 
                          This includes your pregnancy journey, scan history, personalized settings, and any premium subscription benefits.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            <Lock className="w-3 h-3 mr-1" />Irreversible
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            <Clock className="w-3 h-3 mr-1" />Immediate Effect
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Before You Delete */}
              <motion.div 
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Before You Delete</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {beforeDeletingSteps.map((step, index) => (
                    <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                      <div className="p-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-gray-600 mb-4 text-sm">{step.description}</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                        >
                          {step.action}
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </motion.div>

              {/* What Happens When Deleted */}
              <motion.div 
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Happens When You Delete</h2>
                <Card>
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      {whatHappensWhenDeleted.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600">
                        <strong>Data Retention:</strong> We may retain some anonymous, aggregated data for service improvement and legal compliance, 
                        but this data cannot be traced back to you personally.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Delete Form */}
              <motion.div 
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Request Account Deletion</h2>
                <Card className="max-w-2xl mx-auto">
                  <div className="p-8">
                    <form onSubmit={(e) => { e.preventDefault(); handleDeleteRequest(); }} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address (must match your account)
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Reason for Deletion (optional)
                        </label>
                        <select
                          value={reason}
                          onChange={(e) => setReason(e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        >
                          <option value="">Select a reason (optional)</option>
                          {deleteReasons.map((reasonOption) => (
                            <option key={reasonOption} value={reasonOption}>
                              {reasonOption}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="confirm-delete"
                          className="mt-1 mr-3"
                          required
                        />
                        <label htmlFor="confirm-delete" className="text-sm text-gray-700">
                          I understand that deleting my account is permanent and irreversible. 
                          All my data will be permanently removed and cannot be recovered.
                        </label>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button
                          type="submit"
                          variant="secondary" // Changed from "destructive" to "secondary"
                          className="flex-1 bg-red-600 hover:bg-red-700 text-white" // Added red styling manually
                          icon={Trash2}
                        >
                          Delete My Account
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          className="flex-1"
                          onClick={() => window.history.back()}
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </div>
                </Card>
              </motion.div>

              {/* Alternative Options */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1 }}
              >
                <Card className="bg-blue-50 border-blue-200">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">Need Help Instead?</h3>
                    <p className="text-blue-700 mb-6">
                      If you're having issues with the app, our support team is here to help. 
                      Many problems can be resolved without deleting your account.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                      <Button 
                        variant="primary" 
                        href="/help"
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Get Support
                      </Button>
                      <Button 
                        variant="outline" 
                        href="/contact"
                        className="border-blue-300 text-blue-700 hover:bg-blue-100"
                      >
                        Contact Us
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </>
          ) : (
            /* Confirmation Screen */
            <motion.div 
              className="text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-green-50 border-green-200">
                <div className="p-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-green-900 mb-4">
                    Deletion Request Received
                  </h2>
                  <p className="text-green-700 mb-6">
                    Your account deletion request has been submitted. We'll process this request within 7 business days 
                    and send you a confirmation email once completed.
                  </p>
                  <div className="bg-green-100 p-4 rounded-lg mb-6">
                    <p className="text-sm text-green-800">
                      <strong>Request ID:</strong> DEL-{Date.now()}<br/>
                      <strong>Submitted:</strong> {new Date().toLocaleDateString()}<br/>
                      <strong>Email:</strong> {email}
                    </p>
                  </div>
                  <p className="text-green-700 text-sm mb-6">
                    If you change your mind, please contact us within 7 days using the request ID above.
                  </p>
                  <Button 
                    variant="primary" 
                    href="/"
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Return to Home
                  </Button>
                </div>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </>
  )
}

export default DeleteAccount
