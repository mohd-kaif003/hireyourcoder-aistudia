export type ServiceId = 
  | 'web-development'
  | 'web-application'
  | 'mobile-app-development'
  | 'ai-automation'
  | 'digital-marketing'
  | 'performance-marketing'
  | 'api-integration'
  | 'dedicated-developers'
  | 'seo-services'
  | 'ecommerce-development'
  | 'saas-development'
  | 'crm-business-automation';

export interface ServiceItem {
  id: ServiceId;
  slug: string;
  title: string;
  shortDesc: string;
  category: 'Development' | 'Automation' | 'Marketing' | 'Talent';
  icon: string;
  heroH1: string;
  problemStatement: string;
  ourSolution: string;
  servicesIncluded: string[];
  features: { title: string; desc: string }[];
  benefits: string[];
  techStack: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  relatedServices: ServiceId[];
  relatedIndustries: string[];
  relatedLocations: string[];
  startingPrice: string;
  pricingModel?: string;
  metaDescription?: string;
}

export interface IndustryItem {
  id: string;
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  headline?: string;
  industryProblems: string[];
  painPoints?: string[];
  digitalSolutions: string[];
  solutions?: string[];
  recommendedServices: string[];
  features: string[];
  automationOpportunities: string[];
  technology: string[];
  exampleUseCases: { title: string; outcome: string }[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

export interface LocationItem {
  id: string;
  slug: string;
  name: string;
  type: 'India' | 'International';
  country: string;
  flag: string;
  tagline: string;
  headline?: string;
  description?: string;
  timeZone?: string;
  timeZoneOverlap?: string;
  popularServices?: string[];
  localBusinessChallenges: string[];
  servicesOffered: string[];
  industriesServed: string[];
  deliveryModel: string;
  highlights: string[];
  faqs: { question: string; answer: string }[];
}


export interface DeveloperCategory {
  id: string;
  title: string;
  icon: string;
  experienceLevels: string[];
  hourlyStarting: string;
  monthlyStarting: string;
  keySkills: string[];
  availability: 'Available Immediately' | 'Within 1 Week' | 'Within 2 Weeks';
  description: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  technology: string[];
  implementation: string;
  results: string[];
  metrics?: { label: string; value: string }[];
  featuredImage: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  tags: string[];
  readTime: string;
  publishedDate: string;
  publishedAt?: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  } | string;
  summary: string;
  excerpt?: string;
  image?: string;
  content: string[] | string;
}


export interface LeadSubmission {
  id: string;
  createdAt: string;
  name: string;
  company?: string;
  email: string;
  phone: string;
  country: string;
  service: string;
  projectType?: string;
  budget: string;
  timeline: string;
  message: string;
  source: string;
  status: 'New' | 'Contacted' | 'Qualified' | 'Proposal Sent' | 'Won' | 'Lost';
  notes?: string;
  utm?: {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    landing_page?: string;
  };
}

export interface ProjectEstimateResult {
  estimatedCostRange: string;
  estimatedWeeks: string;
  recommendedTeam: string;
  architectureNotes: string;
}

export type Service = ServiceItem;
export type Industry = IndustryItem;
export type Location = LocationItem;

