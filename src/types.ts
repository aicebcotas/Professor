export type PlanId = 'bronze' | 'prata' | 'ouro';

export interface PlanFeature {
  text: string;
  highlight?: boolean;
}

export interface PlanModuleSummary {
  name: string;
  count: number;
}

export interface Plan {
  id: PlanId;
  name: string;
  tagline: string;
  badge: string;
  badgeColor: string;
  themeColor: 'bronze' | 'silver' | 'gold';
  oldPrice?: number;
  price: number;
  installments: {
    count: number;
    value: number;
  };
  accessDuration: string;
  accessDurationMonths: number;
  isPopular?: boolean;
  targetAudience: string;
  modulesIncluded: string[];
  features: PlanFeature[];
  bonuses: string[];
  whatsappSupport: string;
  hasCertificate: boolean;
  certificateDetails?: string;
  ctaText: string;
}

export interface CourseModule {
  id: number;
  title: string;
  subtitle: string;
  badge?: string;
  topics: string[];
  practicalOutcome: string;
  icon: string;
  includedIn: PlanId[];
}

export interface CourseBonus {
  id: number;
  title: string;
  subtitle: string;
  value: string;
  tag: string;
  description: string;
  includedIn: PlanId[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  subject: string;
  avatar: string;
  text: string;
  hoursSaved: string;
  rating: number;
  highlight: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface SimulatorOption {
  subject: string;
  grade: string;
  objective: string;
  promptExample: string;
  resultTitle: string;
  resultOutput: string;
  timeSaved: string;
}
