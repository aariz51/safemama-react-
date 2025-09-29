import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

// Layout Components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// Page Components
import Home from './pages/Home'
import SafetyGuides from './pages/SafetyGuides'

// Safety Guide Pages
import FoodSafetyGuide from './pages/safety-guides/FoodSafetyGuide'
import MedicationSafetyGuide from './pages/safety-guides/MedicationSafetyGuide'
import ExerciseSafetyGuide from './pages/safety-guides/ExerciseSafetyGuide'
import TravelSafetyGuide from './pages/safety-guides/TravelSafetyGuide'
import WorkplaceSafetyGuide from './pages/safety-guides/WorkplaceSafetyGuide'
import HomeSafetyGuide from './pages/safety-guides/HomeSafetyGuide'
import FirstTrimesterSafetyGuide from './pages/safety-guides/FirstTrimesterSafetyGuide'
import MentalHealthGuide from './pages/safety-guides/MentalHealthGuide'

// Blog Pages
import BlogIndex from './pages/blog/BlogIndex'
import FirstTrimesterFoodSafety from './pages/blog/FirstTrimesterFoodSafety'
import FoodsToAvoidDuringPregnancy from './pages/blog/FoodsToAvoidDuringPregnancy'
import PregnancyNutritionGuide from './pages/blog/PregnancyNutritionGuide'
import SafeMedicationsPregnancy from './pages/blog/SafeMedicationsPregnancy'
import PregnancyFoodSafetyScanner from './pages/blog/PregnancyFoodSafetyScanner'
import PregnancyAppsComparison from './pages/blog/PregnancyAppsComparison'
import BestPregnancyApps2025 from './pages/blog/BestPregnancyApps2025.tsx'
import PregnancyDietGuide from './pages/blog/PregnancyDietGuide.tsx'
import PregnancyExerciseGuide from './pages/blog/PregnancyExerciseGuide.tsx'

// Tools Pages
import ToolsIndex from './pages/tools/ToolsIndex'
import DueDateCalculator from './pages/tools/DueDateCalculator'
import FoodSafetyChecker from './pages/tools/FoodSafetyChecker'
import NutritionCalculator from './pages/tools/NutritionCalculator'
import MedicationGuide from './pages/tools/MedicationGuide'

// Compare Pages
import CompareIndex from './pages/compare/CompareIndex'
import SafemamaVsOvia from './pages/compare/SafemamaVsOvia'
import SafemamaVsPregnancyPlus from './pages/compare/SafemamaVsPregnancyPlus'
import SafemamaVsWebMD from './pages/compare/SafemamaVsWebMD'
import SafemamaVsWhatToExpect from './pages/compare/SafemamaVsWhatToExpect.tsx'
import SafemamaVsBabycenter from './pages/compare/SafemamaVsBabycenter.tsx'
import SafemamaVsTheBump from './pages/compare/SafemamaVsTheBump'
import SafemamaVsGlowNurture from './pages/compare/SafemamaVsGlowNurture'

// Legal Pages
import PrivacyPolicy from './pages/legal/PrivacyPolicy.tsx'
import TermsOfService from './pages/legal/TermsOfService.tsx'
import DeleteAccount from './pages/legal/DeleteAccount.tsx'
import HelpCenter from './pages/legal/HelpCenter.tsx'
import ContactUs from './pages/legal/ContactUs.tsx'

// Country Pages
import USPage from './pages/country/USPage'
import UKPage from './pages/country/UKPage'

const App: React.FC = () => {
  return (
    <div className="App" style={{ margin: 0, padding: 0, width: '100%', minHeight: '100vh' }}>
      <Header />
      <main style={{ margin: 0, padding: 0, width: '100%' }}>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          
          {/* Safety Guides */}
          <Route path="safety-guides" element={<SafetyGuides />} />
          <Route path="safety-guides/food-safety" element={<FoodSafetyGuide />} />
          <Route path="safety-guides/medication-safety" element={<MedicationSafetyGuide />} />
          <Route path="safety-guides/exercise-safety" element={<ExerciseSafetyGuide />} />
          <Route path="safety-guides/travel-safety" element={<TravelSafetyGuide />} />
          <Route path="safety-guides/workplace-safety" element={<WorkplaceSafetyGuide />} />
          <Route path="safety-guides/home-safety" element={<HomeSafetyGuide />} />
          <Route path="safety-guides/first-trimester" element={<FirstTrimesterSafetyGuide />} />
          <Route path="safety-guides/mental-health" element={<MentalHealthGuide />} />

          {/* Blog Routes */}
          <Route path="blog" element={<BlogIndex />} />
          <Route path="blog/first-trimester-food-safety" element={<FirstTrimesterFoodSafety />} />
          <Route path="blog/foods-to-avoid-during-pregnancy" element={<FoodsToAvoidDuringPregnancy />} />
          <Route path="blog/pregnancy-nutrition-guide" element={<PregnancyNutritionGuide />} />
          <Route path="blog/safe-medications-pregnancy" element={<SafeMedicationsPregnancy />} />
          <Route path="blog/pregnancy-food-safety-scanner" element={<PregnancyFoodSafetyScanner />} />
          <Route path="blog/pregnancy-apps-comparison" element={<PregnancyAppsComparison />} />
          <Route path="blog/best-pregnancy-apps-2025" element={<BestPregnancyApps2025 />} />
          <Route path="blog/pregnancy-diet-guide" element={<PregnancyDietGuide />} />
          <Route path="blog/pregnancy-exercise-guide" element={<PregnancyExerciseGuide />} />

          {/* Tools Routes */}
          <Route path="tools" element={<ToolsIndex />} />
          <Route path="tools/due-date-calculator" element={<DueDateCalculator />} />
          <Route path="tools/food-safety-checker" element={<FoodSafetyChecker />} />
          <Route path="tools/nutrition-calculator" element={<NutritionCalculator />} />
          <Route path="tools/medication-guide" element={<MedicationGuide />} />

          {/* Compare Routes */}
          <Route path="compare" element={<CompareIndex />} />
          <Route path="compare/safemama-vs-ovia" element={<SafemamaVsOvia />} />
          <Route path="compare/safemama-vs-pregnancy-plus" element={<SafemamaVsPregnancyPlus />} />
          <Route path="compare/safemama-vs-webmd" element={<SafemamaVsWebMD />} />
          <Route path="compare/safemama-vs-what-to-expect" element={<SafemamaVsWhatToExpect />} />
          <Route path="compare/safemama-vs-babycenter" element={<SafemamaVsBabycenter />} />
          <Route path="compare/safemama-vs-the-bump" element={<SafemamaVsTheBump />} />
          <Route path="compare/safemama-vs-glow-nurture" element={<SafemamaVsGlowNurture />} />

          {/* Legal Routes */}
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsOfService />} />
          <Route path="delete-account" element={<DeleteAccount />} />
          <Route path="help" element={<HelpCenter />} />
          <Route path="contact" element={<ContactUs />} />

          {/* Country Routes */}
          <Route path="us" element={<USPage />} />
          <Route path="uk" element={<UKPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App