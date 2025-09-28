export interface FoodItem {
  id: string
  name: string
  category: 'fruits' | 'vegetables' | 'proteins' | 'dairy' | 'grains' | 'seafood' | 'beverages' | 'herbs_spices' | 'processed'
  safetyLevel: 'safe' | 'caution' | 'avoid'
  trimester?: 'all' | 'first' | 'second' | 'third' | 'first_second' | 'second_third'
  description: string
  benefits?: string[]
  risks?: string[]
  recommendations: string
  alternatives?: string[]
  nutrients?: string[]
  servingSize?: string
  maxPerWeek?: number
}

export const foodDatabase: FoodItem[] = [
  // FRUITS - SAFE
  {
    id: 'apple',
    name: 'Apples',
    category: 'fruits',
    safetyLevel: 'safe',
    trimester: 'all',
    description: 'Excellent source of fiber, vitamin C, and antioxidants. Safe throughout pregnancy.',
    benefits: ['High in fiber', 'Rich in vitamin C', 'Contains antioxidants', 'Helps with digestion'],
    recommendations: 'Wash thoroughly before eating. Organic preferred to reduce pesticide exposure.',
    nutrients: ['Vitamin C', 'Fiber', 'Potassium', 'Antioxidants'],
    servingSize: '1 medium apple (182g)'
  },
  {
    id: 'banana',
    name: 'Bananas',
    category: 'fruits',
    safetyLevel: 'safe',
    trimester: 'all',
    description: 'Rich in potassium, vitamin B6, and natural sugars. Excellent for energy and nausea relief.',
    benefits: ['High potassium content', 'Natural energy boost', 'May help reduce nausea', 'Easy to digest'],
    recommendations: 'Perfect snack for morning sickness. Choose ripe bananas for easier digestion.',
    nutrients: ['Potassium', 'Vitamin B6', 'Fiber', 'Natural sugars'],
    servingSize: '1 medium banana (118g)'
  },
  {
    id: 'oranges',
    name: 'Oranges',
    category: 'fruits',
    safetyLevel: 'safe',
    trimester: 'all',
    description: 'Excellent source of vitamin C, folate, and fiber. Important for immune system and baby development.',
    benefits: ['High vitamin C', 'Contains folate', 'Supports immune system', 'Good fiber content'],
    recommendations: 'Fresh oranges preferred over juice. Wash peel thoroughly if using zest.',
    nutrients: ['Vitamin C', 'Folate', 'Fiber', 'Calcium'],
    servingSize: '1 medium orange (154g)'
  },

  // FRUITS - CAUTION
  {
    id: 'pineapple',
    name: 'Pineapple',
    category: 'fruits',
    safetyLevel: 'caution',
    trimester: 'first',
    description: 'Contains bromelain enzyme which may cause uterine contractions in large amounts.',
    benefits: ['Rich in vitamin C', 'Contains digestive enzymes', 'Anti-inflammatory properties'],
    risks: ['Bromelain may trigger contractions', 'High acidity may cause heartburn'],
    recommendations: 'Safe in normal food amounts (1-2 servings per day). Avoid large quantities, especially in first trimester.',
    alternatives: ['Mango', 'Papaya (ripe)', 'Orange'],
    nutrients: ['Vitamin C', 'Manganese', 'Bromelain', 'Fiber'],
    servingSize: '1 cup diced (165g)',
    maxPerWeek: 7
  },
  {
    id: 'grapes',
    name: 'Grapes',
    category: 'fruits',
    safetyLevel: 'caution',
    trimester: 'all',
    description: 'High in natural sugars and may contain pesticide residues. Wash thoroughly.',
    benefits: ['Contains antioxidants', 'Good source of vitamin K', 'Natural hydration'],
    risks: ['High sugar content', 'Potential pesticide residues', 'Choking hazard for older children'],
    recommendations: 'Choose organic when possible. Wash thoroughly. Consume in moderation due to high sugar.',
    alternatives: ['Berries', 'Apples', 'Pears'],
    nutrients: ['Vitamin K', 'Antioxidants', 'Natural sugars'],
    servingSize: '1 cup (92g)',
    maxPerWeek: 5
  },

  // SEAFOOD - SAFE
  {
    id: 'salmon',
    name: 'Salmon (Cooked)',
    category: 'seafood',
    safetyLevel: 'safe',
    trimester: 'all',
    description: 'Low-mercury fish rich in omega-3 fatty acids, essential for baby\'s brain development.',
    benefits: ['High in omega-3 DHA', 'Low mercury content', 'Excellent protein source', 'Supports brain development'],
    recommendations: 'Choose wild-caught when possible. Cook to 145°F internal temperature.',
    nutrients: ['Omega-3 fatty acids', 'Protein', 'Vitamin D', 'B vitamins'],
    servingSize: '3.5 oz (100g)',
    maxPerWeek: 3
  },
  {
    id: 'shrimp',
    name: 'Shrimp (Cooked)',
    category: 'seafood',
    safetyLevel: 'safe',
    trimester: 'all',
    description: 'Low-mercury shellfish high in protein and nutrients.',
    benefits: ['Very low mercury', 'High protein', 'Rich in iodine', 'Contains selenium'],
    recommendations: 'Must be fully cooked. Avoid raw or undercooked shrimp.',
    nutrients: ['Protein', 'Iodine', 'Selenium', 'Vitamin B12'],
    servingSize: '3 oz (85g)',
    maxPerWeek: 3
  },

  // SEAFOOD - AVOID
  {
    id: 'shark',
    name: 'Shark',
    category: 'seafood',
    safetyLevel: 'avoid',
    trimester: 'all',
    description: 'Very high mercury content that can damage baby\'s developing nervous system.',
    risks: ['Extremely high mercury levels', 'Potential nervous system damage', 'Developmental delays'],
    recommendations: 'Completely avoid during pregnancy and while breastfeeding.',
    alternatives: ['Salmon', 'Sardines', 'Anchovies', 'Shrimp'],
    nutrients: ['Protein'],
    servingSize: 'AVOID'
  },
  {
    id: 'swordfish',
    name: 'Swordfish',
    category: 'seafood',
    safetyLevel: 'avoid',
    trimester: 'all',
    description: 'High mercury content poses risks to fetal brain development.',
    risks: ['High mercury levels', 'Potential brain development issues', 'Nervous system damage'],
    recommendations: 'Avoid completely during pregnancy.',
    alternatives: ['Salmon', 'Pollock', 'Catfish', 'Tilapia'],
    nutrients: ['Protein'],
    servingSize: 'AVOID'
  },

  // DAIRY - SAFE
  {
    id: 'pasteurized_milk',
    name: 'Pasteurized Milk',
    category: 'dairy',
    safetyLevel: 'safe',
    trimester: 'all',
    description: 'Excellent source of calcium, protein, and vitamin D for bone development.',
    benefits: ['High calcium content', 'Complete protein', 'Fortified with vitamin D', 'Supports bone development'],
    recommendations: 'Choose pasteurized varieties only. Low-fat or skim recommended.',
    nutrients: ['Calcium', 'Protein', 'Vitamin D', 'Vitamin B12'],
    servingSize: '1 cup (240ml)'
  },
  {
    id: 'greek_yogurt',
    name: 'Greek Yogurt (Pasteurized)',
    category: 'dairy',
    safetyLevel: 'safe',
    trimester: 'all',
    description: 'High-protein dairy product with probiotics for digestive health.',
    benefits: ['Very high protein', 'Contains probiotics', 'Rich in calcium', 'Supports digestive health'],
    recommendations: 'Choose plain varieties to avoid added sugars. Ensure pasteurized.',
    nutrients: ['Protein', 'Calcium', 'Probiotics', 'B vitamins'],
    servingSize: '1 cup (245g)'
  },

  // DAIRY - AVOID
  {
    id: 'raw_milk_cheese',
    name: 'Raw Milk Soft Cheeses',
    category: 'dairy',
    safetyLevel: 'avoid',
    trimester: 'all',
    description: 'Unpasteurized soft cheeses may contain Listeria bacteria.',
    risks: ['Listeria contamination', 'Potential miscarriage', 'Stillbirth risk', 'Severe illness'],
    recommendations: 'Avoid all unpasteurized dairy products. Choose pasteurized alternatives.',
    alternatives: ['Pasteurized soft cheeses', 'Hard cheeses', 'Cottage cheese'],
    nutrients: ['Protein', 'Calcium'],
    servingSize: 'AVOID'
  },

  // VEGETABLES - SAFE
  {
    id: 'spinach',
    name: 'Spinach (Washed)',
    category: 'vegetables',
    safetyLevel: 'safe',
    trimester: 'all',
    description: 'Excellent source of folate, iron, and other essential nutrients.',
    benefits: ['Very high in folate', 'Good iron source', 'Rich in antioxidants', 'Supports neural tube development'],
    recommendations: 'Wash thoroughly to remove potential bacteria. Cook when possible to reduce oxalates.',
    nutrients: ['Folate', 'Iron', 'Vitamin K', 'Antioxidants'],
    servingSize: '1 cup raw (30g) or 1/2 cup cooked'
  },
  {
    id: 'broccoli',
    name: 'Broccoli',
    category: 'vegetables',
    safetyLevel: 'safe',
    trimester: 'all',
    description: 'Nutrient-dense vegetable rich in folate, vitamin C, and fiber.',
    benefits: ['High in folate', 'Excellent vitamin C source', 'Good fiber content', 'Contains antioxidants'],
    recommendations: 'Steam or lightly cook to preserve nutrients. Wash thoroughly.',
    nutrients: ['Folate', 'Vitamin C', 'Fiber', 'Vitamin K'],
    servingSize: '1 cup chopped (91g)'
  },

  // BEVERAGES - AVOID
  {
    id: 'alcohol',
    name: 'Alcoholic Beverages',
    category: 'beverages',
    safetyLevel: 'avoid',
    trimester: 'all',
    description: 'No safe level of alcohol consumption during pregnancy.',
    risks: ['Fetal Alcohol Spectrum Disorders', 'Birth defects', 'Developmental delays', 'Miscarriage risk'],
    recommendations: 'Complete avoidance recommended. No safe amount established.',
    alternatives: ['Sparkling water with fruit', 'Herbal teas', 'Fresh fruit juices'],
    nutrients: ['None beneficial'],
    servingSize: 'AVOID'
  },

  // PROTEINS - CAUTION
  {
    id: 'deli_meats',
    name: 'Deli Meats',
    category: 'proteins',
    safetyLevel: 'caution',
    trimester: 'all',
    description: 'May contain Listeria bacteria. Safe when heated to steaming.',
    benefits: ['High protein content', 'Convenient protein source'],
    risks: ['Listeria contamination', 'High sodium content', 'Nitrate/nitrite preservatives'],
    recommendations: 'Heat until steaming hot (165°F) before eating. Choose nitrate-free options when possible.',
    alternatives: ['Freshly cooked meats', 'Canned meats', 'Plant-based proteins'],
    nutrients: ['Protein', 'B vitamins', 'Iron'],
    servingSize: '2-3 oz (57-85g) heated'
  }
]

// Helper functions
export const getFoodById = (id: string): FoodItem | undefined => {
  return foodDatabase.find(food => food.id === id)
}

export const getFoodsByCategory = (category: string): FoodItem[] => {
  return foodDatabase.filter(food => food.category === category)
}

export const getFoodsBySafetyLevel = (safetyLevel: 'safe' | 'caution' | 'avoid'): FoodItem[] => {
  return foodDatabase.filter(food => food.safetyLevel === safetyLevel)
}

export const searchFoods = (query: string): FoodItem[] => {
  const lowercaseQuery = query.toLowerCase()
  return foodDatabase.filter(food => 
    food.name.toLowerCase().includes(lowercaseQuery) ||
    food.description.toLowerCase().includes(lowercaseQuery) ||
    food.category.toLowerCase().includes(lowercaseQuery)
  )
}
