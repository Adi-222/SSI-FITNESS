// ========================================
// SSI FITNESS — Data Constants
// ========================================

export const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "Training", href: "#training" },
  { name: "Plans", href: "#pricing" },
  { name: "Trainers", href: "#trainers" },
  { name: "Contact", href: "#contact" },
];

export const STATS = [
  { value: 5000, suffix: "+", label: "Active Members" },
  { value: 15, suffix: "+", label: "Specialized Services" },
  { value: 10, suffix: "+", label: "Years Excellence" },
  { value: 98, suffix: "%", label: "Client Results" },
];

export const SERVICES = [
  {
    id: "cupping-therapy",
    title: "Cupping Therapy",
    description:
      "Ancient healing technique that promotes blood flow, reduces muscle tension, and accelerates recovery through strategic suction cup placement.",
    icon: "CircleDot",
  },
  {
    id: "steam-bath",
    title: "Steam Bath",
    description:
      "Detoxify and rejuvenate with our premium steam rooms. Open pores, relieve stress, and enhance circulation in a controlled therapeutic environment.",
    icon: "CloudFog",
  },
  {
    id: "deep-tissue-massage",
    title: "Deep Tissue Massage",
    description:
      "Targeted pressure techniques that reach deep muscle layers to release chronic tension, break up scar tissue, and restore optimal function.",
    icon: "Hand",
  },
  {
    id: "relaxation-therapy",
    title: "Relaxation Massage",
    description:
      "Full-body Swedish massage techniques designed to calm the nervous system, reduce cortisol, and promote deep mental and physical relaxation.",
    icon: "Leaf",
  },
  {
    id: "sports-recovery",
    title: "Sports Recovery",
    description:
      "Comprehensive post-workout recovery programs including ice baths, compression therapy, and mobility work to minimize downtime.",
    icon: "Zap",
  },
  {
    id: "nutrition-counseling",
    title: "Nutrition Counseling",
    description:
      "Personalized meal planning and nutritional guidance from certified experts to fuel your performance and accelerate body composition goals.",
    icon: "Apple",
  },
];

export const TRAINING_PROGRAMS = [
  {
    id: "boxing",
    title: "Boxing",
    subtitle: "Strike with Purpose",
    description:
      "Master the sweet science with professional boxing training. Build explosive power, speed, and defensive skills under expert guidance.",
    features: ["Technique drills", "Sparring sessions", "Bag work", "Conditioning"],
  },
  {
    id: "mma",
    title: "MMA / Fighting",
    subtitle: "Unleash the Warrior",
    description:
      "Complete mixed martial arts training combining striking, grappling, and ground game. Develop well-rounded combat skills.",
    features: ["Stand-up striking", "Ground game", "Wrestling", "Self-defense"],
  },
  {
    id: "strength",
    title: "Pure Strength",
    subtitle: "Forge Raw Power",
    description:
      "Progressive overload training focused on compound lifts and functional strength. Build a powerful physique from the ground up.",
    features: ["Powerlifting", "Olympic lifts", "Functional strength", "Core stability"],
  },
  {
    id: "hiit",
    title: "Elite HIIT",
    subtitle: "Push Beyond Limits",
    description:
      "High-intensity interval training designed to torch fat, boost cardiovascular endurance, and build lean athletic muscle.",
    features: ["Circuit training", "Tabata", "Metabolic conditioning", "Fat burn"],
  },
  {
    id: "functional",
    title: "Zen Athletics",
    subtitle: "Mind-Body Mastery",
    description:
      "Fusion of yoga, calisthenics, and mobility work. Build flexibility, balance, and body control for total athletic performance.",
    features: ["Yoga flows", "Calisthenics", "Mobility drills", "Balance training"],
  },
];

export const PRICING_PLANS = [
  {
    id: "basic",
    name: "Basic",
    price: "2,999",
    period: "month",
    description: "Perfect for beginners starting their fitness journey",
    features: [
      { text: "Full gym access", included: true },
      { text: "Locker facility", included: true },
      { text: "2 trainer sessions/month", included: true },
      { text: "Basic fitness assessment", included: true },
      { text: "Recovery services", included: false },
      { text: "Nutrition counseling", included: false },
      { text: "Boxing/MMA classes", included: false },
      { text: "Personal training", included: false },
    ],
    popular: false,
  },
  {
    id: "elite",
    name: "Elite",
    price: "5,999",
    period: "month",
    description: "Most popular — for serious athletes seeking transformation",
    features: [
      { text: "Full gym access", included: true },
      { text: "Premium locker", included: true },
      { text: "8 trainer sessions/month", included: true },
      { text: "Advanced fitness assessment", included: true },
      { text: "Steam bath & recovery", included: true },
      { text: "Nutrition counseling", included: true },
      { text: "Boxing/MMA classes", included: false },
      { text: "1-on-1 personal training", included: false },
    ],
    popular: true,
  },
  {
    id: "champion",
    name: "Champion",
    price: "9,999",
    period: "month",
    description: "The ultimate package — unlimited everything, zero limits",
    features: [
      { text: "Full gym access", included: true },
      { text: "VIP locker & towel service", included: true },
      { text: "Unlimited trainer sessions", included: true },
      { text: "Complete body analysis", included: true },
      { text: "All recovery services", included: true },
      { text: "Personal nutrition plan", included: true },
      { text: "Boxing & MMA classes", included: true },
      { text: "1-on-1 personal training", included: true },
    ],
    popular: false,
  },
];

export const TRAINERS = [
  {
    id: "trainer-1",
    name: "Coach Arjun",
    specialization: "Powerlifting & Strength",
    experience: "12+ Years",
    bio: "Former national powerlifting champion with a passion for building raw strength. Specializes in technique refinement and competition prep.",
    certifications: ["NSCA-CPT", "Powerlifting Coach Level 3"],
    image: "/images/trainers/trainer1.png",
  },
  {
    id: "trainer-2",
    name: "Coach Rohan",
    specialization: "Strength & Conditioning",
    experience: "8+ Years",
    bio: "Elite strength coach focused on progressive overload and functional movement. Has trained competitive athletes across multiple sports.",
    certifications: ["CSCS", "FMS Level 2", "Precision Nutrition"],
    image: "/images/trainers/trainer2.png",
  },
  {
    id: "trainer-3",
    name: "Coach Vikram",
    specialization: "HIIT & Conditioning",
    experience: "10+ Years",
    bio: "High-energy coach specializing in metabolic conditioning and fat loss. Known for intense, results-driven group sessions.",
    certifications: ["ACE-CPT", "CrossFit Level 2", "TRX Certified"],
    image: "/images/trainers/trainer3.png",
  },
];

export const TESTIMONIALS = [
  {
    id: "testimonial-1",
    name: "Rahul Mehta",
    role: "Member since 2022",
    quote:
      "SSI Fitness isn't just a gym — it's a sanctuary for growth. The trainers pushed me beyond what I thought was possible. Lost 25kg and gained a new perspective on life.",
    rating: 5,
  },
  {
    id: "testimonial-2",
    name: "Ananya Sharma",
    role: "Member since 2021",
    quote:
      "The combination of intense training and recovery services like cupping and steam bath is what sets SSI apart. My boxing skills have improved dramatically.",
    rating: 5,
  },
  {
    id: "testimonial-3",
    name: "Karthik Reddy",
    role: "Member since 2023",
    quote:
      "From the world-class equipment to the personalized nutrition plans, everything here is designed to help you succeed. The Champion plan is worth every rupee.",
    rating: 5,
  },
  {
    id: "testimonial-4",
    name: "Deepa Nair",
    role: "Member since 2022",
    quote:
      "The atmosphere here is electric. Everyone from the coaches to fellow members pushes you to be your best. The recovery services after intense workouts are incredible.",
    rating: 5,
  },
];

export const TRANSFORMATIONS = [
  {
    id: "transform-1",
    name: "Amit Patel",
    duration: "6 Months",
    result: "Lost 30kg, gained muscle definition",
    program: "Elite Plan + Boxing",
  },
  {
    id: "transform-2",
    name: "Neha Gupta",
    duration: "8 Months",
    result: "Complete body recomposition",
    program: "Champion Plan + Strength",
  },
  {
    id: "transform-3",
    name: "Rohan Singh",
    duration: "4 Months",
    result: "Athletic physique, competition ready",
    program: "Champion Plan + MMA",
  },
];

export const FAQ_ITEMS = [
  {
    question: "What are your operating hours?",
    answer:
      "SSI Fitness is open Monday to Saturday from 5:00 AM to 11:00 PM, and Sunday from 6:00 AM to 8:00 PM. Our recovery services (massage, cupping, steam bath) are available from 9:00 AM to 9:00 PM.",
  },
  {
    question: "Can I try a session before committing to a membership?",
    answer:
      "Absolutely! We offer a complimentary trial session for all new visitors. Book a call with us and we'll schedule a personalized gym tour and introductory workout with one of our trainers.",
  },
  {
    question: "What's included in the recovery services?",
    answer:
      "Our recovery services include cupping therapy, steam bath, deep tissue massage, relaxation massage, sports recovery protocols including ice baths, and compression therapy. Access depends on your subscription plan.",
  },
  {
    question: "Do I need prior experience for boxing or MMA classes?",
    answer:
      "Not at all! Our combat training programs cater to all levels — from complete beginners to advanced fighters. Our coaches will adapt training intensity and techniques to match your current skill level.",
  },
  {
    question: "Can I upgrade or downgrade my plan anytime?",
    answer:
      "Yes, you can change your subscription plan at any time. Upgrades take effect immediately, and downgrades will apply from your next billing cycle. There are no penalties for plan changes.",
  },
  {
    question: "Do you offer personal training sessions?",
    answer:
      "Yes! Personal training is included in our Champion plan with unlimited sessions. Elite plan members get 8 sessions per month, and Basic plan members get 2. Additional sessions can also be purchased separately.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes, we have ample free parking for both two-wheelers and four-wheelers. Our facility also has 24/7 CCTV surveillance for security.",
  },
];

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/strangestrengthindia/",
  facebook: "https://facebook.com/ssifitness",
  youtube: "https://youtube.com/@ssifitness",
  whatsapp: "https://wa.me/919163569889",
};
