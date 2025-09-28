import React from 'react'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/sections/Hero'
import Features from '../components/sections/Features'
import HowItWorks from '../components/sections/HowItWorks'
import Statistics from '../components/sections/Statistics'
import Testimonials from '../components/sections/Testimonials'
import FAQ from '../components/sections/FAQ'
import ToolsSection from '../components/sections/ToolsSection'

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SafeMama - AI Pregnancy Safety Scanner | Food Safety App for Expecting Mothers</title>
        <meta 
          name="description" 
          content="AI-powered pregnancy safety scanner. Instantly check food, medicine & product safety during pregnancy. Trusted by 50,000+ expecting mothers worldwide. Download free." 
        />
        <meta 
          name="keywords" 
          content="pregnancy safety scanner, food safety pregnancy, pregnancy app, AI pregnancy assistant, SafeMama, pregnancy safety check, expecting mothers app" 
        />
        <link rel="canonical" href="https://safemama.co/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="SafeMama - AI Pregnancy Safety Scanner" />
        <meta property="og:description" content="Instantly check food, medicine & product safety during pregnancy. Trusted by 50,000+ expecting mothers." />
        <meta property="og:image" content="https://safemama.co/images/og-image.jpg" />
        <meta property="og:url" content="https://safemama.co/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SafeMama - AI Pregnancy Safety Scanner" />
        <meta name="twitter:description" content="Instantly check food, medicine & product safety during pregnancy." />
        <meta name="twitter:image" content="https://safemama.co/images/twitter-card.jpg" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "SafeMama",
            "description": "AI-powered pregnancy safety scanner app",
            "applicationCategory": "HealthApplication",
            "operatingSystem": ["iOS", "Android"],
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "10000"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section with Video Background */}
        <Hero />
        
        {/* Features Section */}
        <Features />
        
        {/* How It Works Section - NEW! */}
        <HowItWorks />
        
        {/* Tools Section */}
        <ToolsSection />
        
        {/* Statistics Section */}
        <Statistics />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* FAQ Section */}
        <FAQ />
      </div>
    </>
  )
}

export default Home
