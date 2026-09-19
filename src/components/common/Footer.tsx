import React from 'react';
import { 
  Terminal, Mail, Phone, MessageSquare, ArrowRight, 
  Globe, Shield, Heart, Linkedin, Twitter, Github
} from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenConsultation?: () => void;
  onOpenCRM?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation, onOpenCRM }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pre-Footer Action Banner */}
        <div className="bg-gradient-to-r from-blue-900/60 via-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-12 border border-blue-500/20 mb-16 relative overflow-hidden">
          <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-widest font-bold text-blue-400">
                Ready to build your next digital product?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 font-heading">
                Let's turn your vision into high-performance software and measurable revenue.
              </h3>
              <p className="text-slate-400 text-sm mt-2">
                Book a 30-minute free technical consultation. No high-pressure sales pitch—just clear architecture guidance, honest timelines, and estimated investment ranges.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('/free-project-estimate')}
                className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white font-medium px-5 py-3.5 rounded-xl border border-slate-700 transition-colors text-center text-sm"
              >
                Calculate Estimate
              </button>
            </div>
          </div>
        </div>

        {/* Multi-Column Agency Footer */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-14 border-b border-slate-800/80 text-sm">
          
          {/* Col 1: Brand Info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div 
              onClick={() => onNavigate('/')}
              className="flex items-center gap-2 cursor-pointer mb-4"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/30">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white font-heading">
                HireYourCoder<span className="text-blue-500">.</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-5">
              HireYourCoder is a premium international technology agency. We engineer custom web applications, mobile apps, AI automation systems, and high-velocity dedicated engineering teams for ambitious startups, agencies, and enterprises globally.
            </p>

            <div className="space-y-2 text-xs text-slate-300 mb-6">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:contact@hireyourcoder.com" className="hover:text-blue-400 transition-colors">
                  contact@hireyourcoder.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+919568497688" className="hover:text-blue-400 transition-colors">
                  +91 95684 97688 (India & Global)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href="https://wa.me/919568497688?text=Hi%20HireYourCoder%20team,%20I%20have%20a%20project%20inquiry." 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  WhatsApp: +91 95684 97688 (24/7 Priority)
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-400">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 hover:text-blue-400 hover:bg-slate-800 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 hover:text-blue-400 hover:bg-slate-800 transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 hover:text-blue-400 hover:bg-slate-800 transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Core Services</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><button onClick={() => onNavigate('/services/web-development')} className="hover:text-white transition-colors">Website Development</button></li>
              <li><button onClick={() => onNavigate('/services/web-application-development')} className="hover:text-white transition-colors">Web Applications</button></li>
              <li><button onClick={() => onNavigate('/services/mobile-app-development')} className="hover:text-white transition-colors">Mobile App Dev</button></li>
              <li><button onClick={() => onNavigate('/services/ai-automation')} className="text-blue-400 hover:text-blue-300 transition-colors font-medium">AI Automation & Agents</button></li>
              <li><button onClick={() => onNavigate('/services/performance-marketing')} className="hover:text-white transition-colors">Performance Marketing</button></li>
              <li><button onClick={() => onNavigate('/services/api-integration')} className="hover:text-white transition-colors">API & WhatsApp Integration</button></li>
              <li><button onClick={() => onNavigate('/dedicated-developers')} className="hover:text-white transition-colors">Dedicated Developers</button></li>
              <li><button onClick={() => onNavigate('/services/saas-development')} className="hover:text-white transition-colors">SaaS Platform MVP</button></li>
              <li><button onClick={() => onNavigate('/services/ecommerce-development')} className="hover:text-white transition-colors">E-commerce Stores</button></li>
              <li><button onClick={() => onNavigate('/services/seo-services')} className="hover:text-white transition-colors">Technical SEO</button></li>
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Industries</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><button onClick={() => onNavigate('/industries/real-estate')} className="hover:text-white transition-colors">Real Estate & PropTech</button></li>
              <li><button onClick={() => onNavigate('/industries/healthcare')} className="hover:text-white transition-colors">Healthcare & Clinics</button></li>
              <li><button onClick={() => onNavigate('/industries/education')} className="hover:text-white transition-colors">Education & EdTech</button></li>
              <li><button onClick={() => onNavigate('/industries/restaurants')} className="hover:text-white transition-colors">Restaurants & Food</button></li>
              <li><button onClick={() => onNavigate('/industries/ecommerce')} className="hover:text-white transition-colors">E-commerce & D2C</button></li>
              <li><button onClick={() => onNavigate('/industries/finance')} className="hover:text-white transition-colors">Finance & FinTech</button></li>
              <li><button onClick={() => onNavigate('/industries/manufacturing')} className="hover:text-white transition-colors">Manufacturing & Export</button></li>
              <li><button onClick={() => onNavigate('/industries/saas')} className="hover:text-white transition-colors">SaaS & Startups</button></li>
              <li><button onClick={() => onNavigate('/industries')} className="text-blue-400 hover:underline">View All 15+ Verticals →</button></li>
            </ul>
          </div>

          {/* Col 4: Locations */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Global Locations</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><button onClick={() => onNavigate('/locations/moradabad')} className="hover:text-white transition-colors">Moradabad (HQ & Hub)</button></li>
              <li><button onClick={() => onNavigate('/locations/delhi')} className="hover:text-white transition-colors">Delhi NCR</button></li>
              <li><button onClick={() => onNavigate('/locations/noida')} className="hover:text-white transition-colors">Noida & Gurgaon</button></li>
              <li><button onClick={() => onNavigate('/locations/bangalore')} className="hover:text-white transition-colors">Bangalore (Bengaluru)</button></li>
              <li><button onClick={() => onNavigate('/locations/mumbai')} className="hover:text-white transition-colors">Mumbai & Pune</button></li>
              <li className="pt-1 text-[11px] uppercase tracking-wider text-slate-500 font-bold">International</li>
              <li><button onClick={() => onNavigate('/locations/usa')} className="hover:text-white transition-colors">United States (EST/PST)</button></li>
              <li><button onClick={() => onNavigate('/locations/uk')} className="hover:text-white transition-colors">United Kingdom (GMT)</button></li>
              <li><button onClick={() => onNavigate('/locations/uae')} className="hover:text-white transition-colors">United Arab Emirates (GST)</button></li>
              <li><button onClick={() => onNavigate('/locations/australia')} className="hover:text-white transition-colors">Australia (AEST)</button></li>
              <li><button onClick={() => onNavigate('/locations/singapore')} className="hover:text-white transition-colors">Singapore (SGT)</button></li>
            </ul>
          </div>

          {/* Col 5: Resources & Company */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Resources & Company</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><button onClick={() => onNavigate('/free-project-estimate')} className="text-emerald-400 hover:text-emerald-300 font-medium">Free Project Cost Tool</button></li>
              <li><button onClick={() => onNavigate('/free-website-audit')} className="text-amber-400 hover:text-amber-300 font-medium">Free Website & SEO Audit</button></li>
              <li><button onClick={() => onNavigate('/case-studies')} className="hover:text-white transition-colors">Client Case Studies</button></li>
              <li><button onClick={() => onNavigate('/pricing')} className="hover:text-white transition-colors">Transparent Pricing</button></li>
              <li><button onClick={() => onNavigate('/blog')} className="hover:text-white transition-colors">Engineering Blog</button></li>
              <li><button onClick={() => onNavigate('/faq')} className="hover:text-white transition-colors">Frequently Asked Questions</button></li>
              <li><button onClick={() => onNavigate('/about')} className="hover:text-white transition-colors">About Our Approach</button></li>
              <li><button onClick={() => onNavigate('/contact')} className="hover:text-white transition-colors">Contact Engineering</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer, Trust Badges, Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} HireYourCoder.com. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-400">
              <Shield className="w-3.5 h-3.5 text-blue-400" /> Enterprise-Grade Privacy & 100% IP Ownership
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer" onClick={() => onNavigate('/about')}>Terms of Engagement</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer" onClick={() => onNavigate('/about')}>Non-Disclosure Agreement (NDA)</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer" onClick={() => onNavigate('/about')}>Security Compliance</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
