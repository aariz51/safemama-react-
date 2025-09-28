import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

// Layout Components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// Page Components
import Home from './pages/Home'
import BlogIndex from './pages/blog/BlogIndex'
import FirstTrimesterFoodSafety from './pages/blog/FirstTrimesterFoodSafety'
import FoodsToAvoidDuringPregnancy from './pages/blog/FoodsToAvoidDuringPregnancy'
import PregnancyNutritionGuide from './pages/blog/PregnancyNutritionGuide'
import SafeMedicationsPregnancy from './pages/blog/SafeMedicationsPregnancy'
import PregnancyFoodSafetyScanner from './pages/blog/PregnancyFoodSafetyScanner'
import PregnancyAppsComparison from './pages/blog/PregnancyAppsComparison'

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
          
          {/* Blog Routes */}
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/first-trimester-food-safety" element={<FirstTrimesterFoodSafety />} />
          <Route path="/blog/foods-to-avoid-during-pregnancy" element={<FoodsToAvoidDuringPregnancy />} />
          <Route path="/blog/pregnancy-nutrition-guide" element={<PregnancyNutritionGuide />} />
          <Route path="/blog/safe-medications-pregnancy" element={<SafeMedicationsPregnancy />} />
          <Route path="/blog/pregnancy-food-safety-scanner" element={<PregnancyFoodSafetyScanner />} />
          <Route path="/blog/pregnancy-apps-comparison" element={<PregnancyAppsComparison />} />
          
          {/* Tools Routes */}
          <Route path="/tools" element={<ToolsIndex />} />
          <Route path="/tools/due-date-calculator" element={<DueDateCalculator />} />
          <Route path="/tools/food-safety-checker" element={<FoodSafetyChecker />} />
          <Route path="/tools/nutrition-calculator" element={<NutritionCalculator />} />
          <Route path="/tools/medication-guide" element={<MedicationGuide />} />
          
          {/* Compare Routes */}
          <Route path="/compare" element={<CompareIndex />} />
          <Route path="/compare/safemama-vs-ovia" element={<SafemamaVsOvia />} />
          <Route path="/compare/safemama-vs-pregnancy-plus" element={<SafemamaVsPregnancyPlus />} />
          <Route path="/compare/safemama-vs-webmd" element={<SafemamaVsWebMD />} />
          
          {/* Country Routes */}
          <Route path="/us" element={<USPage />} />
          <Route path="/uk" element={<UKPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
