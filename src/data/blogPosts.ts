export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  updatedAt: string
  readTime: number
  category: string
  tags: string[]
  featuredImage: string
  seoTitle: string
  seoDescription: string
  seoKeywords: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'First Trimester Food Safety: Essential Guide for Early Pregnancy',
    slug: 'first-trimester-food-safety',
    excerpt: 'Navigate the crucial first 12 weeks of pregnancy with confidence. Learn which foods are safe, what to avoid, and essential nutrition tips for early pregnancy.',
    content: `
# First Trimester Food Safety: Essential Guide for Early Pregnancy

The first trimester of pregnancy is a critical time for your developing baby. During weeks 1-12, your baby's major organs are forming, making proper nutrition and food safety more important than ever. This comprehensive guide will help you navigate food choices with confidence during this crucial period.

## Why Food Safety Matters Most in the First Trimester

During the first trimester, your baby's neural tube, heart, and other vital organs are developing rapidly. Certain foods and substances can interfere with this development or pose risks to both you and your baby.

### Key Risks During Early Pregnancy:
- **Foodborne Illnesses**: Your immune system is naturally suppressed during pregnancy
- **Toxoplasmosis**: Can cause serious birth defects
- **Listeria**: Particularly dangerous in the first trimester
- **High Mercury Levels**: Can affect brain development

## Foods to Embrace in Your First Trimester

### Folate-Rich Foods (Essential for Neural Tube Development)
- **Leafy Greens**: Spinach, kale, romaine lettuce
- **Legumes**: Lentils, chickpeas, black beans
- **Fortified Cereals**: Choose whole grain options
- **Avocados**: Also rich in healthy fats
- **Citrus Fruits**: Oranges, grapefruit, lemons

### Iron-Rich Foods (Prevent Anemia)
- **Lean Red Meat**: Well-cooked beef and lamb
- **Poultry**: Chicken and turkey (fully cooked)
- **Fish**: Salmon, sardines (low mercury)
- **Plant Sources**: Quinoa, pumpkin seeds, dried apricots

### Calcium Sources (Bone Development)
- **Dairy Products**: Pasteurized milk, cheese, yogurt
- **Fortified Plant Milks**: Almond, soy, oat milk
- **Leafy Greens**: Bok choy, collard greens
- **Canned Fish with Bones**: Salmon, sardines

## Foods to Avoid in the First Trimester

### High-Risk Foods for Foodborne Illness
- **Raw or Undercooked Eggs**: Risk of salmonella
- **Raw or Rare Meat**: Including sushi, rare steaks
- **Unpasteurized Dairy**: Soft cheeses, raw milk
- **Deli Meats**: Unless heated to steaming
- **Raw Sprouts**: Alfalfa, mung bean, clover

### High Mercury Fish
- Shark, swordfish, king mackerel, tilefish
- Limit tuna to 6 oz per week
- Choose low-mercury alternatives: salmon, shrimp, pollock

### Other Substances to Avoid
- **Alcohol**: No safe amount during pregnancy
- **High Caffeine**: Limit to 200mg per day
- **Artificial Sweeteners**: Some are not recommended

## Managing First Trimester Challenges

### Dealing with Morning Sickness
- **Eat Small, Frequent Meals**: Every 2-3 hours
- **Bland Foods**: Crackers, toast, rice
- **Ginger**: Natural nausea relief
- **Stay Hydrated**: Sip fluids throughout the day

### Food Aversions and Cravings
- **Listen to Your Body**: Aversions may protect against harmful foods
- **Find Alternatives**: If you can't tolerate meat, try plant proteins
- **Don't Force It**: Focus on foods you can keep down

## Weekly Nutrition Focus (Weeks 1-12)

### Weeks 1-4: Foundation Building
- Start prenatal vitamins with folic acid
- Focus on whole, unprocessed foods
- Establish safe food handling practices

### Weeks 5-8: Managing Symptoms
- Adapt diet to manage nausea
- Maintain nutrition despite food aversions
- Stay hydrated with safe beverages

### Weeks 9-12: Strengthening Habits
- Expand variety as symptoms improve
- Plan balanced meals and snacks
- Continue safe food practices

## Meal Planning for First Trimester Success

### Sample Daily Menu

**Breakfast:**
- Fortified cereal with pasteurized milk
- Sliced banana and berries
- Orange juice (fortified with calcium)

**Mid-Morning Snack:**
- Greek yogurt with honey
- A few crackers if nauseous

**Lunch:**
- Spinach salad with grilled chicken
- Chickpeas and avocado
- Whole grain roll

**Afternoon Snack:**
- Apple slices with almond butter
- Prenatal vitamin

**Dinner:**
- Baked salmon with lemon
- Steamed broccoli
- Brown rice or quinoa

**Evening Snack:**
- Calcium-fortified smoothie
- Small handful of nuts

## Food Safety Tips for First Trimester

### Safe Food Handling
1. **Wash Hands**: Before and after handling food
2. **Clean Surfaces**: Sanitize cutting boards and counters
3. **Separate Raw and Cooked**: Prevent cross-contamination
4. **Cook Thoroughly**: Use food thermometer
5. **Refrigerate Promptly**: Don't leave food out over 2 hours

### Restaurant and Eating Out Safety
- Choose reputable establishments
- Avoid buffets and salad bars
- Order meat well-done
- Skip raw fish and unpasteurized items
- Ask about ingredients in sauces and dressings

## When to Consult Your Healthcare Provider

Contact your doctor or midwife if you experience:
- Severe or persistent nausea and vomiting
- Signs of foodborne illness (fever, severe diarrhea)
- Concerns about weight loss or inability to keep food down
- Questions about specific foods or supplements

## Key Takeaways

1. **Prioritize Safety**: Avoid high-risk foods that could harm your developing baby
2. **Focus on Nutrients**: Emphasize folate, iron, calcium, and protein
3. **Listen to Your Body**: Work with pregnancy symptoms, not against them
4. **Stay Flexible**: Adapt your diet as needed while maintaining nutrition
5. **Plan Ahead**: Meal planning helps ensure consistent nutrition

Remember, every pregnancy is unique. What works for one person may not work for another. The key is finding safe, nutritious foods that you can tolerate and enjoy during this exciting time.

Your first trimester sets the foundation for a healthy pregnancy. By making informed food choices and following safe practices, you're giving your baby the best possible start in life.
    `,
    author: 'Dr. Sarah Johnson, OB/GYN',
    publishedAt: '2024-12-15',
    updatedAt: '2024-12-15',
    readTime: 8,
    category: 'Nutrition',
    tags: ['first trimester', 'food safety', 'nutrition', 'pregnancy diet', 'early pregnancy'],
    featuredImage: '/images/blog/first-trimester-foods.jpg',
    seoTitle: 'First Trimester Food Safety Guide 2025 | Safe Foods During Early Pregnancy',
    seoDescription: 'Complete first trimester food safety guide for expecting mothers. Learn which foods are safe, what to avoid, and essential nutrition tips for weeks 1-12 of pregnancy. Doctor-verified advice.',
    seoKeywords: ['first trimester food safety', 'early pregnancy nutrition', 'safe foods first trimester', 'what to eat first trimester pregnancy', 'foods to avoid early pregnancy', '12 weeks pregnant diet']
  },
  {
    id: '2',
    title: 'Foods to Avoid During Pregnancy: Complete Safety Guide 2025',
    slug: 'foods-to-avoid-during-pregnancy',
    excerpt: 'Comprehensive guide to foods and beverages to avoid during pregnancy. Learn about potential risks and safe alternatives to protect your baby.',
    content: `
# Foods to Avoid During Pregnancy: Complete Safety Guide 2025

Pregnancy is a time of excitement and anticipation, but it also comes with important dietary considerations. Knowing which foods to avoid during pregnancy is crucial for protecting both your health and your baby's development. This comprehensive guide covers everything you need to know about pregnancy food safety.

## Why Certain Foods Are Risky During Pregnancy

During pregnancy, your immune system is naturally suppressed to prevent your body from rejecting the baby. This makes you more susceptible to foodborne illnesses that could harm both you and your developing child. Additionally, some foods contain substances that can directly affect fetal development.

### Main Risks Include:
- **Foodborne Bacteria**: Listeria, Salmonella, E. coli
- **Parasites**: Toxoplasmosis
- **Chemical Contaminants**: Mercury, pesticides
- **Alcohol and Toxins**: Direct harm to fetal development

## Raw and Undercooked Foods to Avoid

### Raw or Undercooked Meat
**Risks**: Toxoplasmosis, Salmonella, E. coli
**Avoid**:
- Rare or medium-rare steaks and burgers
- Raw or undercooked poultry
- Raw or undercooked pork
- Game meats (venison, rabbit)

**Safe Alternative**: Always cook meat to safe internal temperatures:
- Beef, pork, lamb: 145°F (63°C)
- Ground meats: 160°F (71°C)  
- Poultry: 165°F (74°C)

### Raw Fish and Seafood
**Risks**: Parasites, bacteria, high mercury
**Avoid**:
- Sushi and sashimi
- Raw oysters, clams, mussels
- Smoked seafood (unless canned)
- Ceviche and other raw fish dishes

**Safe Alternatives**:
- Cooked fish low in mercury (salmon, shrimp, pollock)
- Canned fish (tuna in moderation)
- Fully cooked seafood dishes

### Raw or Undercooked Eggs
**Risks**: Salmonella poisoning
**Avoid**:
- Raw cookie dough or cake batter
- Homemade mayonnaise
- Caesar salad dressing
- Eggnog (homemade)
- Soft-boiled or runny eggs

**Safe Alternatives**:
- Pasteurized eggs for recipes requiring raw eggs
- Fully cooked eggs (hard-boiled, scrambled)
- Store-bought mayonnaise and dressings

## High-Mercury Fish to Limit or Avoid

Mercury can damage your baby's developing nervous system. The bigger and older the fish, the more mercury it typically contains.

### Fish to Completely Avoid:
- **Shark**: Extremely high mercury
- **Swordfish**: Very high mercury
- **King Mackerel**: High mercury
- **Tilefish**: High mercury
- **Bigeye Tuna**: High mercury

### Fish to Limit:
- **Albacore Tuna**: Limit to 6 oz per week
- **Yellowfin Tuna**: Limit to 6 oz per week

### Safe Fish Options (Low Mercury):
- Salmon, sardines, anchovies
- Shrimp, crab, lobster (cooked)
- Pollock, catfish, tilapia
- Light canned tuna (limit to 12 oz per week)

## Unpasteurized Products

Unpasteurized products can contain harmful bacteria like Listeria, which is particularly dangerous during pregnancy.

### Dairy Products to Avoid:
- Raw milk
- Soft cheeses made from raw milk:
  - Brie, Camembert
  - Feta (unless pasteurized)
  - Blue cheese
  - Queso fresco, panela

### Safe Alternatives:
- Pasteurized milk and dairy products
- Hard cheeses (cheddar, mozzarella, Swiss)
- Pasteurized soft cheeses
- Greek yogurt and regular yogurt

### Other Unpasteurized Products:
- Fresh apple cider
- Unpasteurized fruit juices
- Raw honey (rare risk of botulism)

## Deli Meats and Processed Foods

### Deli and Lunch Meats
**Risk**: Listeria contamination
**Avoid**:
- Cold deli meats and hot dogs
- Refrigerated pâtés and spreads
- Refrigerated smoked seafood

**Safe Preparation**:
- Heat deli meats until steaming hot (165°F/74°C)
- Choose shelf-stable or canned versions
- Eat immediately after heating

## Raw Sprouts and Unwashed Produce

### Raw Sprouts
**Risk**: Salmonella and E. coli
**Avoid**:
- Alfalfa sprouts
- Mung bean sprouts
- Clover sprouts
- Radish sprouts

**Safe Alternatives**:
- Cooked sprouts
- Other crunchy vegetables (carrots, bell peppers)

### Unwashed Fruits and Vegetables
**Risk**: Toxoplasmosis, pesticides, bacteria
**Safety Tips**:
- Wash all produce thoroughly
- Use a brush for firm produce
- Remove outer leaves from lettuce and cabbage
- Buy organic when possible for the "Dirty Dozen"

## Beverages to Avoid or Limit

### Alcohol
**Risk**: Fetal Alcohol Spectrum Disorders
**Recommendation**: Complete avoidance
- No "safe" amount has been established
- Avoid all types: wine, beer, spirits, cocktails
- Check medications and foods for alcohol content

### Caffeine
**Risk**: Miscarriage, low birth weight (high amounts)
**Safe Limit**: 200mg per day (about 1 cup of coffee)

**Caffeine Content Guide**:
- Coffee (8 oz): 95mg
- Tea (8 oz): 25-50mg
- Cola (12 oz): 35mg
- Energy drinks: 50-300mg (avoid)
- Dark chocolate (1 oz): 12mg

### Herbal Teas and Supplements
**Risk**: Unknown effects on pregnancy
**Avoid**:
- Herbal supplements without medical approval
- Teas with unknown ingredients
- High doses of any herb

**Generally Safe Herbal Teas**:
- Ginger tea (for nausea)
- Peppermint tea
- Chamomile tea (in moderation)

## Foods with Additives and Preservatives

### Artificial Sweeteners
**Generally Safe**:
- Aspartame (avoid if you have PKU)
- Sucralose (Splenda)
- Acesulfame potassium

**Avoid**:
- Saccharin (crosses placenta)
- High amounts of any artificial sweetener

### Processed Foods High in:
- Nitrates and nitrites (processed meats)
- High sodium content
- Trans fats
- Excessive preservatives

## Special Considerations by Trimester

### First Trimester (Weeks 1-12)
- Critical organ development period
- Highest risk for birth defects
- Strict adherence to food safety guidelines

### Second Trimester (Weeks 13-28)
- Continue safe practices
- May have more food tolerance
- Focus on nutrient-dense foods

### Third Trimester (Weeks 29-40)
- Increased risk of foodborne illness complications
- Maintain safe food practices
- Prepare for breastfeeding nutrition

## International and Cultural Foods

### Sushi and Japanese Cuisine
- Avoid raw fish sushi
- Choose cooked options (tempura, teriyaki)
- California rolls with cooked crab are generally safe

### Mexican Cuisine
- Avoid unpasteurized queso fresco
- Choose pasteurized cheese options
- Be cautious with raw vegetables and fruits

### Italian Cuisine
- Avoid raw or undercooked eggs in tiramisu
- Choose pasteurized cheese options
- Fully cooked pasta dishes are safe

## Food Safety Practices

### Shopping Tips
1. Check expiration dates
2. Choose pasteurized products
3. Inspect packaging for damage
4. Shop for refrigerated items last
5. Use insulated bags for transport

### Storage Guidelines
1. Refrigerate promptly (within 2 hours)
2. Keep refrigerator at 40°F (4°C) or below
3. Use leftovers within 3-4 days
4. Follow "first in, first out" rule

### Preparation Safety
1. Wash hands frequently
2. Use separate cutting boards for raw meat
3. Cook to proper temperatures
4. Don't leave food at room temperature
5. When in doubt, throw it out

## Emergency Signs and When to Call Your Doctor

Contact your healthcare provider immediately if you experience:
- Fever over 100.4°F (38°C)
- Severe nausea and vomiting
- Diarrhea lasting more than 24 hours
- Signs of dehydration
- Severe headache or vision changes
- Stomach cramping or abdominal pain

## Healthy Alternatives and Substitutions

Instead of avoiding entire food groups, focus on safe alternatives:

**Instead of raw fish** → Cooked fish low in mercury  
**Instead of soft cheese** → Hard pasteurized cheeses  
**Instead of deli meat** → Heated deli meat or other proteins  
**Instead of raw eggs** → Pasteurized eggs or egg substitutes  
**Instead of alcohol** → Sparkling water with fruit  
**Instead of high-caffeine drinks** → Herbal teas or decaf options

## Conclusion

While the list of foods to avoid during pregnancy might seem overwhelming, remember that most foods are safe when properly prepared and consumed in moderation. The key is being informed and making conscious choices that protect both you and your baby.

Focus on:
- Eating a variety of safe, nutritious foods
- Following proper food safety practices  
- Consulting with your healthcare provider about any concerns
- Enjoying your pregnancy while making safe choices

Remember, these dietary restrictions are temporary, and following them helps ensure the healthiest possible outcome for you and your baby. When in doubt, ask your healthcare provider or use a trusted pregnancy app like SafeMama to check food safety.
    `,
    author: 'Dr. Maria Rodriguez, Maternal Health Specialist',
    publishedAt: '2024-12-10',
    updatedAt: '2024-12-10',
    readTime: 12,
    category: 'Food Safety',
    tags: ['foods to avoid', 'pregnancy safety', 'food safety', 'pregnancy diet', 'harmful foods'],
    featuredImage: '/images/blog/foods-avoid-pregnancy.jpg',
    seoTitle: 'Foods to Avoid During Pregnancy 2025 | Complete Pregnancy Food Safety Guide',
    seoDescription: 'Comprehensive guide to foods to avoid during pregnancy. Learn about raw foods, high-mercury fish, unpasteurized products, and safe alternatives for expecting mothers.',
    seoKeywords: ['foods to avoid pregnancy', 'pregnancy food safety', 'what not to eat pregnant', 'unsafe foods pregnancy', 'pregnancy diet restrictions', 'harmful foods pregnancy']
  },
  // Additional blog posts would continue here...
]

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug)
}

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category)
}

export const getFeaturedBlogPosts = (limit: number = 3): BlogPost[] => {
  return blogPosts.slice(0, limit)
}
