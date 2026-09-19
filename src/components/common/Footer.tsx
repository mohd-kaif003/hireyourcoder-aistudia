import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, Phone, MessageSquare, ArrowRight, 
  Globe, Shield, Heart, Linkedin, Twitter, Github
} from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenConsultation?: () => void;
  onOpenCRM?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation, onOpenCRM }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-12 sm:pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pre-Footer Action Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-blue-950 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border border-slate-800 mb-10 sm:mb-14 relative overflow-hidden">
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6">
            <div className="max-w-2xl">
              <span className="text-[11px] uppercase tracking-wider font-bold text-blue-400">
                Technical Discovery
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mt-1 font-heading">
                Turn your product roadmap into high-performance software.
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1.5 leading-relaxed">
                Schedule a 30-minute free architectural consultation. No sales fluff—just clear architecture guidance, honest timelines, and dedicated engineering pods.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full md:w-auto shrink-0">
              <motion.button
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenConsultation}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-3 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 text-xs sm:text-sm cursor-pointer"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
              <motion.button
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate('/free-project-estimate')}
                className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white font-medium px-4 py-3 rounded-xl border border-slate-700 transition-colors text-center text-xs sm:text-sm cursor-pointer"
              >
                Roadmap Estimator
              </motion.button>
            </div>
          </div>
        </div>

        {/* Multi-Column Agency Footer */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 pb-10 sm:pb-12 border-b border-slate-800/80 text-sm">
          
          {/* Col 1: Brand Info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div 
              onClick={() => onNavigate('/')}
              className="cursor-pointer mb-4 flex items-center hover:opacity-90 transition-opacity"
            >
              <Logo variant="dark" size="md" />
            </div>
            <p className="text-slate-400 text-xs leading-relaxed mb-4">
              HireYourCoder is a modern engineering and automation agency. We architect custom web applications, mobile platforms, AI automation systems, and high-velocity dedicated developer pods for high-growth businesses and enterprises worldwide.
            </p>

            <div className="space-y-1.5 text-xs text-slate-300 mb-5">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href="mailto:contact@hireyourcoder.com" className="hover:text-blue-400 transition-colors">
                  contact@hireyourcoder.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href="tel:+919568497688" className="hover:text-blue-400 transition-colors">
                  +91 95684 97688 (Global & India)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
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

            <div className="flex items-center gap-2 text-slate-400">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 hover:text-blue-400 hover:bg-slate-800 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 hover:text-blue-400 hover:bg-slate-800 transition-colors" aria-label="Twitter">
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 hover:text-blue-400 hover:bg-slate-800 transition-colors" aria-label="GitHub">
                <Github className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Core Services</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => onNavigate('/services/web-development')} className="hover:text-white transition-colors cursor-pointer">Website Development</button></li>
              <li><button onClick={() => onNavigate('/services/web-application-development')} className="hover:text-white transition-colors cursor-pointer">Web Applications</button></li>
              <li><button onClick={() => onNavigate('/services/mobile-app-development')} className="hover:text-white transition-colors cursor-pointer">Mobile App Dev</button></li>
              <li><button onClick={() => onNavigate('/services/ai-automation')} className="text-blue-400 hover:text-blue-300 transition-colors font-medium cursor-pointer">AI Automation & Agents</button></li>
              <li><button onClick={() => onNavigate('/services/performance-marketing')} className="hover:text-white transition-colors cursor-pointer">Performance Marketing</button></li>
              <li><button onClick={() => onNavigate('/services/api-integration')} className="hover:text-white transition-colors cursor-pointer">API & WhatsApp Integration</button></li>
              <li><button onClick={() => onNavigate('/dedicated-developers')} className="hover:text-white transition-colors cursor-pointer">Dedicated Developers</button></li>
              <li><button onClick={() => onNavigate('/services/saas-development')} className="hover:text-white transition-colors cursor-pointer">SaaS Platform MVP</button></li>
              <li><button onClick={() => onNavigate('/services/ecommerce-development')} className="hover:text-white transition-colors cursor-pointer">E-commerce Stores</button></li>
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Industries</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => onNavigate('/industries/real-estate')} className="hover:text-white transition-colors cursor-pointer">Real Estate & PropTech</button></li>
              <li><button onClick={() => onNavigate('/industries/healthcare')} className="hover:text-white transition-colors cursor-pointer">Healthcare & Clinics</button></li>
              <li><button onClick={() => onNavigate('/industries/education')} className="hover:text-white transition-colors cursor-pointer">Education & EdTech</button></li>
              <li><button onClick={() => onNavigate('/industries/restaurants')} className="hover:text-white transition-colors cursor-pointer">Restaurants & Food</button></li>
              <li><button onClick={() => onNavigate('/industries/ecommerce')} className="hover:text-white transition-colors cursor-pointer">E-commerce & D2C</button></li>
              <li><button onClick={() => onNavigate('/industries/finance')} className="hover:text-white transition-colors cursor-pointer">Finance & FinTech</button></li>
              <li><button onClick={() => onNavigate('/industries/manufacturing')} className="hover:text-white transition-colors cursor-pointer">Manufacturing & Export</button></li>
              <li><button onClick={() => onNavigate('/industries/saas')} className="hover:text-white transition-colors cursor-pointer">SaaS & Startups</button></li>
            </ul>
          </div>

          {/* Col 4: Locations */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Global Locations</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => onNavigate('/locations/moradabad')} className="hover:text-white transition-colors cursor-pointer">Moradabad (HQ & Hub)</button></li>
              <li><button onClick={() => onNavigate('/locations/delhi')} className="hover:text-white transition-colors cursor-pointer">Delhi NCR</button></li>
              <li><button onClick={() => onNavigate('/locations/noida')} className="hover:text-white transition-colors cursor-pointer">Noida & Gurgaon</button></li>
              <li><button onClick={() => onNavigate('/locations/bangalore')} className="hover:text-white transition-colors cursor-pointer">Bangalore (Bengaluru)</button></li>
              <li><button onClick={() => onNavigate('/locations/mumbai')} className="hover:text-white transition-colors cursor-pointer">Mumbai & Pune</button></li>
              <li className="pt-1 text-[10px] uppercase tracking-wider text-slate-500 font-bold">International</li>
              <li><button onClick={() => onNavigate('/locations/usa')} className="hover:text-white transition-colors cursor-pointer">United States (EST/PST)</button></li>
              <li><button onClick={() => onNavigate('/locations/uk')} className="hover:text-white transition-colors cursor-pointer">United Kingdom (GMT)</button></li>
              <li><button onClick={() => onNavigate('/locations/uae')} className="hover:text-white transition-colors cursor-pointer">UAE (GST)</button></li>
            </ul>
          </div>

          {/* Col 5: Resources & Company */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Resources & Company</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => onNavigate('/free-project-estimate')} className="text-emerald-400 hover:text-emerald-300 font-medium cursor-pointer">Scope & Roadmap Estimator</button></li>
              <li><button onClick={() => onNavigate('/free-website-audit')} className="text-amber-400 hover:text-amber-300 font-medium cursor-pointer">Free Website & SEO Audit</button></li>
              <li><button onClick={() => onNavigate('/case-studies')} className="hover:text-white transition-colors cursor-pointer">Client Case Studies</button></li>
              <li><button onClick={() => onNavigate('/pricing')} className="hover:text-white transition-colors cursor-pointer">Engagement Models</button></li>
              <li><button onClick={() => onNavigate('/blog')} className="hover:text-white transition-colors cursor-pointer">Engineering Blog</button></li>
              <li><button onClick={() => onNavigate('/faq')} className="hover:text-white transition-colors cursor-pointer">FAQs</button></li>
              <li><button onClick={() => onNavigate('/about')} className="hover:text-white transition-colors cursor-pointer">About Our Approach</button></li>
              <li><button onClick={() => onNavigate('/contact')} className="hover:text-white transition-colors cursor-pointer">Contact Engineering</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer, Trust Badges, Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3">
            <span>© {new Date().getFullYear()} HireYourCoder.com. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1 text-slate-400">
              <Shield className="w-3.5 h-3.5 text-blue-400" /> Enterprise-Grade Privacy & 100% IP Ownership
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hover:text-slate-400 cursor-pointer" onClick={() => onNavigate('/about')}>Terms</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer" onClick={() => onNavigate('/about')}>NDA</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer" onClick={() => onNavigate('/about')}>Security Compliance</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
