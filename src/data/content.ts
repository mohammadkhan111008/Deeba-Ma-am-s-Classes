export const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeuA4SD59bQCzBc1FGpnpqFc5rieu0GObnIgy74Qp-V9zd22A/viewform?usp=header";

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  subjects: string[];
  description: string;
  iconName: string;
  badge: string;
  targetClass: string;
}

export interface Feature {
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const COURSES: Course[] = [
  {
    id: "classes-1-7",
    title: "Classes 1–7",
    subtitle: "All Subjects Foundation",
    targetClass: "Class 1 to 7",
    badge: "Primary & Middle School",
    subjects: [
      "Mathematics",
      "English",
      "Science",
      "Social Studies",
      "Language Development",
      "Homework Guidance"
    ],
    description: "Strong academic foundation and personalized support for young learners. We build curiosity, core literacy, and numeracy skills with gentle encouragement.",
    iconName: "BookOpen"
  },
  {
    id: "classes-8-10",
    title: "Classes 8–10",
    subtitle: "Advanced English Coaching",
    targetClass: "Class 8 to 10",
    badge: "High School & Board Prep",
    subjects: [
      "Grammar Mastery",
      "Writing Skills",
      "Literature",
      "Reading Comprehension",
      "Board Exam Preparation",
      "Vocabulary Development"
    ],
    description: "Focused English coaching designed for academic excellence and examination success. Thorough practice of textbook literature and formal writing formats.",
    iconName: "Award"
  },
  {
    id: "classes-11-12",
    title: "Classes 11–12",
    subtitle: "Advanced English Specialization",
    targetClass: "Class 11 & 12",
    badge: "Senior Secondary Mastery",
    subjects: [
      "Advanced Grammar",
      "Essay Writing",
      "Literature Analysis",
      "Communication Skills",
      "Board Exam Strategies",
      "Confidence Building"
    ],
    description: "Specialized coaching to help senior students excel in English board exams and prepare effectively for higher education university interviews and writing.",
    iconName: "GraduationCap"
  }
];

export const WHY_CHOOSE_US: Feature[] = [
  {
    title: "10+ Years Experience",
    description: "Proven teaching expertise with a deep understanding of CBSE and State Board curriculums and examination patterns.",
    iconName: "ShieldCheck"
  },
  {
    title: "Personalized Attention",
    description: "Small batches and individual 1-on-1 guidance ensuring no student is left behind.",
    iconName: "Users"
  },
  {
    title: "Strong English Expertise",
    description: "Specialized advanced English coaching from foundational grammar to nuanced literary analysis.",
    iconName: "Sparkles"
  },
  {
    title: "Exam-Focused Learning",
    description: "Effective preparation techniques, time-management drills, and board answer presentation strategies.",
    iconName: "Target"
  },
  {
    title: "Regular Assessments",
    description: "Continuous progress tracking with constructive feedback for students and regular updates for parents.",
    iconName: "FileText"
  },
  {
    title: "Supportive Environment",
    description: "Encouraging and confidence-building teaching style where asking questions is always celebrated.",
    iconName: "HeartHandshake"
  }
];

export const METHODOLOGY_STEPS = [
  {
    step: "01",
    title: "Concept Understanding",
    description: "Breaking down complex topics into intuitive, relatable concepts using real-world examples."
  },
  {
    step: "02",
    title: "Guided Practice",
    description: "Step-by-step problem solving and interactive writing exercises under direct teacher supervision."
  },
  {
    step: "03",
    title: "Regular Assessment",
    description: "Weekly topic quizzes and monthly chapter tests to identify strengths and areas needing reinforcement."
  },
  {
    step: "04",
    title: "Doubt Resolution",
    description: "Dedicated one-on-one doubt clearing sessions so foundational gaps are addressed immediately."
  },
  {
    step: "05",
    title: "Exam Preparation",
    description: "Solving past years' papers, sample mock tests, and mastering board answer formatting."
  },
  {
    step: "06",
    title: "Performance Improvement",
    description: "Visible boost in academic scores, eloquent articulation, and newfound classroom self-confidence."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Which classes do you teach?",
    answer: "We provide comprehensive tutoring for students from Class 1 through Class 12 with teaching priority exclusively focused on CBSE and State Boards."
  },
  {
    question: "Do you teach all subjects?",
    answer: "Yes! For Classes 1–7, we cover All Subjects including Mathematics, English, Science, Social Studies, and Language Development. For higher classes (8–12), we specialize exclusively in Advanced English coaching."
  },
  {
    question: "Do you provide English coaching for higher classes?",
    answer: "Absolutely. For Classes 8–10 and Classes 11–12, we offer specialized Advanced English programs focusing on Grammar Mastery, Literature Analysis, Essay Writing, Reading Comprehension, and Board Exam Presentation Strategies."
  },
  {
    question: "How can parents enquire?",
    answer: "Parents can easily enquire by clicking any 'Enquire Now' button on this website which links directly to our official Google Enquiry Form, or by calling/messaging us on WhatsApp at +91 95947 86116."
  },
  {
    question: "Are revision webinars conducted every exam season?",
    answer: "Yes, our Special Exam Revision Webinars (3-hour intensive sessions) are conducted prior to major examination periods. Note that this section is specifically organized for higher class tiers."
  },
  {
    question: "Is personalized attention provided?",
    answer: "Personalized attention is the cornerstone of our institute. We maintain small batch sizes to ensure individual interaction, customized worksheets, and one-on-one doubt clearing for every single child."
  }
];

export const ACHIEVEMENTS = [
  { label: "Years Experience", value: 10, suffix: "+", sub: "Dedicated Teaching" },
  { label: "Students Guided", value: 500, suffix: "+", sub: "Across All Grades" },
  { label: "Parent Satisfaction", value: 95, suffix: "%", sub: "Verified Reviews" },
  { label: "Success Stories", value: 1000, suffix: "+", sub: "Academic Triumphs" }
];

export const CONTACT_INFO = {
  phone: "+91 95947 86116",
  whatsapp: "+91 95947 86116",
  whatsappUrl: "https://wa.me/919594786116?text=Hello%20Deeba%20Ma'am,%20I%20would%20like%20to%20enquire%20about%20tutoring%20classes.",
  webinarWhatsappUrl: "https://wa.me/919594786116?text=Hello%20Deeba%20Ma'am,%20we%20are%20an%20educational%20institute%20interested%20in%20organizing%20a%20revision%20webinar.",
  timings: "Dependent based on the child's school time period"
};
