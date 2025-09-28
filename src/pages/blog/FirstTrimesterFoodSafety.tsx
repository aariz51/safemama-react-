import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, Heart, Shield, CheckCircle } from 'lucide-react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'
import { getBlogPostBySlug } from '../../data/blogPosts'

const FirstTrimesterFoodSafety: React.FC = () => {
  const post = getBlogPostBySlug('first-trimester-food-safety')
  
  if (!post) {
    return <div>Post not found</div>
  }

  const tableOfContents = [
    { id: 'why-food-safety', title: 'Why Food Safety Matters Most in the First Trimester' },
    { id: 'foods-to-embrace', title: 'Foods to Embrace in Your First Trimester' },
    { id: 'foods-to-avoid', title: 'Foods to Avoid in the First Trimester' },
    { id: 'managing-challenges', title: 'Managing First Trimester Challenges' },
    { id: 'meal-planning', title: 'Meal Planning for First Trimester Success' },
    { id: 'food-safety-tips', title: 'Food Safety Tips for First Trimester' }
  ]

  const keyTakeaways = [
    'Prioritize Safety: Avoid high-risk foods that could harm your developing baby',
    'Focus on Nutrients: Emphasize folate, iron, calcium, and protein',
    'Listen to Your Body: Work with pregnancy symptoms, not against them',
    'Stay Flexible: Adapt your diet as needed while maintaining nutrition',
    'Plan Ahead: Meal planning helps ensure consistent nutrition'
  ]

  const relatedPosts = [
    { title: 'Foods to Avoid During Pregnancy', slug: 'foods-to-avoid-during-pregnancy' },
    { title: 'Pregnancy Nutrition Guide', slug: 'pregnancy-nutrition-guide' },
    { title: 'Safe Medications During Pregnancy', slug: 'safe-medications-pregnancy' }
  ]

  return (
    <>
      <Helmet>
        <title>{post.seoTitle}</title>
        <meta name="description" content={post.seoDescription} />
        <meta name="keywords" content={post.seoKeywords.join(', ')} />
        <link rel="canonical" href={`https://safemama.co/blog/${post.slug}/`} />
        
        {/* Article Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.featuredImage,
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "SafeMama",
              "logo": {
                "@type": "ImageObject",
                "url": "https://safemama.co/images/logo/safemama-logo.png"
              }
            },
            "datePublished": post.publishedAt,
            "dateModified": post.updatedAt
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Article Header */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {post.title}
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between flex-wrap gap-4 pb-8 border-b border-gray-200">
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {post.readTime} min read
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" icon={Share2}>
                    Share Article
                  </Button>
                </div>
              </motion.div>

              {/* Featured Image */}
              <motion.div
                className="mb-12 rounded-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </motion.div>

              {/* Key Takeaways */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                  <div className="flex items-center mb-6">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">Key Takeaways</h2>
                  </div>
                  <ul className="space-y-3">
                    {keyTakeaways.map((takeaway, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>

              {/* Article Content */}
              <motion.div
                className="prose prose-lg max-w-none mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                style={{ 
                  lineHeight: '1.8',
                  fontSize: '18px'
                }}
              >
                {/* Content sections would be rendered here */}
                <div className="space-y-12">
                  {/* Section 1 */}
                  <section id="why-food-safety">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <Shield className="w-8 h-8 text-primary-600 mr-3" />
                      Why Food Safety Matters Most in the First Trimester
                    </h2>
                    <p className="text-gray-700 mb-6">
                      During the first trimester of pregnancy, your baby's major organs are forming, making this period 
                      critical for proper nutrition and food safety. Your baby's neural tube, heart, and other vital 
                      organs are developing rapidly during weeks 1-12.
                    </p>
                    
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
                      <h3 className="font-semibold text-yellow-800 mb-3">Key Risks During Early Pregnancy:</h3>
                      <ul className="space-y-2 text-yellow-700">
                        <li><strong>Foodborne Illnesses:</strong> Your immune system is naturally suppressed during pregnancy</li>
                        <li><strong>Toxoplasmosis:</strong> Can cause serious birth defects</li>
                        <li><strong>Listeria:</strong> Particularly dangerous in the first trimester</li>
                        <li><strong>High Mercury Levels:</strong> Can affect brain development</li>
                      </ul>
                    </div>
                  </section>

                  {/* Section 2 */}
                  <section id="foods-to-embrace">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                      <Heart className="w-8 h-8 text-red-500 mr-3" />
                      Foods to Embrace in Your First Trimester
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <Card className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Folate-Rich Foods (Essential for Neural Tube Development)
                        </h3>
                        <ul className="space-y-2 text-gray-700">
                          <li><strong>Leafy Greens:</strong> Spinach, kale, romaine lettuce</li>
                          <li><strong>Legumes:</strong> Lentils, chickpeas, black beans</li>
                          <li><strong>Fortified Cereals:</strong> Choose whole grain options</li>
                          <li><strong>Avocados:</strong> Also rich in healthy fats</li>
                          <li><strong>Citrus Fruits:</strong> Oranges, grapefruit, lemons</li>
                        </ul>
                      </Card>
                      
                      <Card className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                          Iron-Rich Foods (Prevent Anemia)
                        </h3>
                        <ul className="space-y-2 text-gray-700">
                          <li><strong>Lean Red Meat:</strong> Well-cooked beef and lamb</li>
                          <li><strong>Poultry:</strong> Chicken and turkey (fully cooked)</li>
                          <li><strong>Fish:</strong> Salmon, sardines (low mercury)</li>
                          <li><strong>Plant Sources:</strong> Quinoa, pumpkin seeds, dried apricots</li>
                        </ul>
                      </Card>
                    </div>
                  </section>

                  {/* Sample Daily Menu */}
                  <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Sample Daily Menu</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Breakfast</h4>
                        <ul className="text-gray-700 space-y-1 text-sm mb-4">
                          <li>• Fortified cereal with pasteurized milk</li>
                          <li>• Sliced banana and berries</li>
                          <li>• Orange juice (fortified with calcium)</li>
                        </ul>
                        
                        <h4 className="font-semibold text-gray-900 mb-3">Lunch</h4>
                        <ul className="text-gray-700 space-y-1 text-sm mb-4">
                          <li>• Spinach salad with grilled chicken</li>
                          <li>• Chickpeas and avocado</li>
                          <li>• Whole grain roll</li>
                        </ul>
                        
                        <h4 className="font-semibold text-gray-900 mb-3">Dinner</h4>
                        <ul className="text-gray-700 space-y-1 text-sm">
                          <li>• Baked salmon with lemon</li>
                          <li>• Steamed broccoli</li>
                          <li>• Brown rice or quinoa</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Mid-Morning Snack</h4>
                        <ul className="text-gray-700 space-y-1 text-sm mb-4">
                          <li>• Greek yogurt with honey</li>
                          <li>• A few crackers if nauseous</li>
                        </ul>
                        
                        <h4 className="font-semibold text-gray-900 mb-3">Afternoon Snack</h4>
                        <ul className="text-gray-700 space-y-1 text-sm mb-4">
                          <li>• Apple slices with almond butter</li>
                          <li>• Prenatal vitamin</li>
                        </ul>
                        
                        <h4 className="font-semibold text-gray-900 mb-3">Evening Snack</h4>
                        <ul className="text-gray-700 space-y-1 text-sm">
                          <li>• Calcium-fortified smoothie</li>
                          <li>• Small handful of nuts</li>
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>

              {/* Related Posts */}
              <motion.div
                className="mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost, index) => (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                      <Link to={`/blog/${relatedPost.slug}`}>
                        <h3 className="font-semibold text-gray-900 hover:text-primary-600 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <div className="flex items-center mt-3 text-primary-600 text-sm font-medium">
                          Read more <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                        </div>
                      </Link>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Table of Contents */}
              <motion.div
                className="sticky top-32"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="p-6 mb-8">
                  <div className="flex items-center mb-4">
                    <BookOpen className="w-5 h-5 text-primary-600 mr-2" />
                    <h3 className="font-semibold text-gray-900">Table of Contents</h3>
                  </div>
                  <nav>
                    <ul className="space-y-3">
                      {tableOfContents.map((item, index) => (
                        <li key={index}>
                          <a
                            href={`#${item.id}`}
                            className="text-sm text-gray-600 hover:text-primary-600 transition-colors block"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </Card>

                {/* App Promotion */}
                <Card className="p-6 bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
                  <h3 className="font-bold text-lg mb-3">Get SafeMama App</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Scan any food instantly and get AI-powered safety recommendations for your pregnancy.
                  </p>
                  <div className="space-y-3">
                    <img
                      src="/images/badges/app-store-coming-soon.png"
                      alt="Download on App Store"
                      className="h-10 w-auto"
                    />
                    <img
                      src="/images/badges/google-play-coming-soon.png"
                      alt="Get it on Google Play"
                      className="h-10 w-auto"
                    />
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FirstTrimesterFoodSafety
