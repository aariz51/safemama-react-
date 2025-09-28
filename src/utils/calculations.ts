// Due Date Calculator utilities
export interface DueDateResult {
  dueDate: Date
  currentWeek: number
  currentDay: number
  trimester: 1 | 2 | 3
  daysUntilDue: number
  conceptionDate: Date
  babylengthMm: number
  babylengthDescription: string
}

export interface BabySize {
  weeks: number
  lengthMm: number
  description: string
}

export const babySizes: BabySize[] = [
  { weeks: 4, lengthMm: 2, description: "poppy seed" },
  { weeks: 5, lengthMm: 5, description: "sesame seed" },
  { weeks: 6, lengthMm: 6, description: "lentil" },
  { weeks: 7, lengthMm: 10, description: "blueberry" },
  { weeks: 8, lengthMm: 16, description: "kidney bean" },
  { weeks: 9, lengthMm: 23, description: "grape" },
  { weeks: 10, lengthMm: 31, description: "kumquat" },
  { weeks: 11, lengthMm: 41, description: "fig" },
  { weeks: 12, lengthMm: 54, description: "lime" },
  { weeks: 13, lengthMm: 74, description: "pea pod" },
  { weeks: 14, lengthMm: 87, description: "lemon" },
  { weeks: 15, lengthMm: 101, description: "apple" },
  { weeks: 16, lengthMm: 116, description: "avocado" },
  { weeks: 17, lengthMm: 130, description: "turnip" },
  { weeks: 18, lengthMm: 143, description: "bell pepper" },
  { weeks: 19, lengthMm: 152, description: "tomato" },
  { weeks: 20, lengthMm: 166, description: "banana" },
  { weeks: 21, lengthMm: 267, description: "carrot" },
  { weeks: 22, lengthMm: 279, description: "spaghetti squash" },
  { weeks: 23, lengthMm: 287, description: "large mango" },
  { weeks: 24, lengthMm: 300, description: "corn" },
  { weeks: 25, lengthMm: 346, description: "acorn squash" },
  { weeks: 26, lengthMm: 350, description: "scallion" },
  { weeks: 27, lengthMm: 364, description: "cauliflower" },
  { weeks: 28, lengthMm: 375, description: "eggplant" },
  { weeks: 29, lengthMm: 386, description: "butternut squash" },
  { weeks: 30, lengthMm: 396, description: "large cabbage" },
  { weeks: 31, lengthMm: 406, description: "coconut" },
  { weeks: 32, lengthMm: 416, description: "jicama" },
  { weeks: 33, lengthMm: 435, description: "pineapple" },
  { weeks: 34, lengthMm: 450, description: "cantaloupe" },
  { weeks: 35, lengthMm: 464, description: "honeydew melon" },
  { weeks: 36, lengthMm: 476, description: "romaine lettuce" },
  { weeks: 37, lengthMm: 488, description: "Swiss chard" },
  { weeks: 38, lengthMm: 500, description: "leek" },
  { weeks: 39, lengthMm: 508, description: "mini watermelon" },
  { weeks: 40, lengthMm: 516, description: "small pumpkin" }
]

export const calculateDueDate = (lastPeriodDate: Date): DueDateResult => {
  const oneDay = 24 * 60 * 60 * 1000
  const today = new Date()
  
  // Calculate due date (280 days from LMP)
  const dueDate = new Date(lastPeriodDate.getTime() + (280 * oneDay))
  
  // Calculate conception date (approximately 14 days after LMP)
  const conceptionDate = new Date(lastPeriodDate.getTime() + (14 * oneDay))
  
  // Calculate current pregnancy week and day
  const daysSinceLastPeriod = Math.floor((today.getTime() - lastPeriodDate.getTime()) / oneDay)
  const currentWeek = Math.floor(daysSinceLastPeriod / 7)
  const currentDay = daysSinceLastPeriod % 7
  
  // Determine trimester
  let trimester: 1 | 2 | 3
  if (currentWeek <= 12) {
    trimester = 1
  } else if (currentWeek <= 27) {
    trimester = 2
  } else {
    trimester = 3
  }
  
  // Calculate days until due date
  const daysUntilDue = Math.ceil((dueDate.getTime() - today.getTime()) / oneDay)
  
  // Get baby size information
  const babySize = babySizes.find(size => size.weeks <= currentWeek) || babySizes[0]
  
  return {
    dueDate,
    currentWeek,
    currentDay,
    trimester,
    daysUntilDue,
    conceptionDate,
    babylengthMm: babySize.lengthMm,
    babylengthDescription: babySize.description
  }
}

// Nutrition Calculator utilities
export interface NutritionNeeds {
  calories: number
  protein: number
  folate: number
  iron: number
  calcium: number
  omega3: number
}

export const calculateNutritionNeeds = (
  prePregnancyWeight: number,
  height: number,
  age: number,
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active',
  trimester: 1 | 2 | 3
): NutritionNeeds => {
  // Calculate BMR using Mifflin-St Jeor equation
  const bmr = 10 * prePregnancyWeight + 6.25 * height - 5 * age - 161
  
  // Activity multipliers
  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725
  }
  
  // Base calorie needs
  const baseCalories = bmr * activityMultipliers[activityLevel]
  
  // Pregnancy calorie additions by trimester
  const calorieAdditions = {
    1: 0,      // No additional calories needed
    2: 340,    // Second trimester
    3: 450     // Third trimester
  }
  
  const totalCalories = baseCalories + calorieAdditions[trimester]
  
  // Calculate nutrient needs based on pregnancy requirements
  const proteinGrams = Math.max(71, totalCalories * 0.175 / 4) // Minimum 71g for pregnancy
  const folateUg = 600 // 600 micrograms recommended
  const ironMg = 27    // 27mg recommended for pregnancy
  const calciumMg = 1000 // 1000mg recommended
  const omega3Mg = 200   // 200mg DHA recommended
  
  return {
    calories: Math.round(totalCalories),
    protein: Math.round(proteinGrams),
    folate: folateUg,
    iron: ironMg,
    calcium: calciumMg,
    omega3: omega3Mg
  }
}

// BMI Calculator
export interface BMIResult {
  bmi: number
  category: 'underweight' | 'normal' | 'overweight' | 'obese'
  weightGainRecommendation: {
    min: number
    max: number
  }
}

export const calculateBMI = (weightKg: number, heightCm: number): BMIResult => {
  const heightM = heightCm / 100
  const bmi = weightKg / (heightM * heightM)
  
  let category: 'underweight' | 'normal' | 'overweight' | 'obese'
  let weightGainRecommendation: { min: number; max: number }
  
  if (bmi < 18.5) {
    category = 'underweight'
    weightGainRecommendation = { min: 28, max: 40 } // 28-40 lbs
  } else if (bmi < 25) {
    category = 'normal'
    weightGainRecommendation = { min: 25, max: 35 } // 25-35 lbs
  } else if (bmi < 30) {
    category = 'overweight'
    weightGainRecommendation = { min: 15, max: 25 } // 15-25 lbs
  } else {
    category = 'obese'
    weightGainRecommendation = { min: 11, max: 20 } // 11-20 lbs
  }
  
  return {
    bmi: Math.round(bmi * 10) / 10,
    category,
    weightGainRecommendation
  }
}

// Date formatting utilities
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export const formatDateShort = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

// Pregnancy week formatter
export const formatPregnancyWeek = (weeks: number, days: number): string => {
  if (weeks === 0) {
    return `${days} day${days !== 1 ? 's' : ''}`
  }
  if (days === 0) {
    return `${weeks} week${weeks !== 1 ? 's' : ''}`
  }
  return `${weeks} week${weeks !== 1 ? 's' : ''}, ${days} day${days !== 1 ? 's' : ''}`
}

// Trimester information
export const getTrimesterInfo = (trimester: 1 | 2 | 3) => {
  const trimesterInfo = {
    1: {
      name: 'First Trimester',
      weeks: '1-12 weeks',
      description: 'Critical organ development period',
      keyFocus: 'Folic acid, avoiding harmful substances',
      commonSymptoms: ['Morning sickness', 'Fatigue', 'Breast tenderness']
    },
    2: {
      name: 'Second Trimester',
      weeks: '13-27 weeks',
      description: 'Often called the "golden period"',
      keyFocus: 'Protein, calcium, iron for growth',
      commonSymptoms: ['Increased energy', 'Visible belly growth', 'Baby movements']
    },
    3: {
      name: 'Third Trimester',
      weeks: '28-40 weeks',
      description: 'Final preparation for birth',
      keyFocus: 'Continued nutrition, preparing for breastfeeding',
      commonSymptoms: ['Back pain', 'Braxton Hicks contractions', 'Nesting instinct']
    }
  }
  
  return trimesterInfo[trimester]
}

// Validation utilities
export const isValidDate = (date: Date): boolean => {
  return date instanceof Date && !isNaN(date.getTime())
}

export const isValidPregnancyDate = (lastPeriodDate: Date): boolean => {
  const today = new Date()
  const oneYear = 365 * 24 * 60 * 60 * 1000
  
  // Check if date is valid
  if (!isValidDate(lastPeriodDate)) {
    return false
  }
  
  // Check if date is not in the future
  if (lastPeriodDate > today) {
    return false
  }
  
  // Check if date is not more than 42 weeks ago (reasonable pregnancy duration)
  if ((today.getTime() - lastPeriodDate.getTime()) > (294 * 24 * 60 * 60 * 1000)) {
    return false
  }
  
  return true
}
