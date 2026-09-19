import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, Phone, MessageSquare, ArrowRight, 
  Terminal, ShieldCheck, Database
} from 'lucide-react';
import { servicesData } from '../../data/servicesData';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenConsultation: () => void;
  onOpenLeadHub: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenConsultation,
  onOpenLeadHub
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3' 
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div 
            id="navbar-brand-logo"
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
              <Terminal className="w-5 h-5 text-blue-100" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 flex items-center gap-1 font-heading">
                HireYourCoder<span className="text-blue-600 text-2xl leading-none">.</span>
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-500">
                Technology & Growth Partner
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                id="nav-link-services"
                onClick={() => handleNavClick('/services')}
                className={`px-3 py-2 text-sm font-medium rounded-lg flex items-center gap-1 transition-colors ${
                  currentPath.startsWith('/services') ? 'text-blue-600 bg-blue-50/60' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                Services
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 w-[580px] bg-white rounded-2xl shadow-xl border border-slate-100 p-5 grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold tracking-wide uppercase">
                    <span>Engineering, Automation & Growth Services</span>
                    <button 
                      onClick={() => handleNavClick('/services')}
                      className="text-blue-600 hover:underline flex items-center gap-1 font-medium lowercase"
                    >
                      view all 12 services <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  {servicesData.slice(0, 8).map(srv => (
                    <div 
                      key={srv.id}
                      onClick={() => handleNavClick(`/services/${srv.slug}`)}
                      className="p-2.5 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors group/item flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                        <span className="text-xs font-bold font-mono">{srv.title.substring(0, 2)}</span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 group-hover/item:text-blue-600 transition-colors">
                          {srv.title}
                        </div>
                        <div className="text-xs text-slate-500 line-clamp-1">
                          {srv.shortDesc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                id="nav-link-solutions"
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg flex items-center gap-1 transition-colors"
              >
                Solutions
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div 
                    onClick={() => handleNavClick('/services/ai-automation')}
                    className="p-3 rounded-xl hover:bg-blue-50/70 cursor-pointer transition-colors"
                  >
                    <div className="text-sm font-semibold text-slate-900 flex items-center gap-1.5">
                      <span>AI Automation & Agents</span>
                      <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full font-medium">Hot</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">Chatbots, RAG knowledge bases & WhatsApp bots</p>
                  </div>
                  <div 
                    onClick={() => handleNavClick('/services/performance-marketing')}
                    className="p-3 rounded-xl hover:bg-blue-50/70 cursor-pointer transition-colors"
                  >
                    <div className="text-sm font-semibold text-slate-900">Performance Marketing</div>
                    <p className="text-xs text-slate-500 mt-0.5">Google Ads, Meta CAPI & conversion funnels</p>
                  </div>
                  <div 
                    onClick={() => handleNavClick('/services/api-integration')}
                    className="p-3 rounded-xl hover:bg-blue-50/70 cursor-pointer transition-colors"
                  >
                    <div className="text-sm font-semibold text-slate-900">API & WhatsApp Integration</div>
                    <p className="text-xs text-slate-500 mt-0.5">Payment gateways, ERPs, CRM & webhooks</p>
                  </div>
                  <div 
                    onClick={() => handleNavClick('/services/saas-development')}
                    className="p-3 rounded-xl hover:bg-blue-50/70 cursor-pointer transition-colors"
                  >
                    <div className="text-sm font-semibold text-slate-900">SaaS Platform MVP</div>
                    <p className="text-xs text-slate-500 mt-0.5">Multi-tenant cloud architecture & Stripe billing</p>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Link */}
            <button 
              id="nav-link-industries"
              onClick={() => handleNavClick('/industries')}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                currentPath.startsWith('/industries') ? 'text-blue-600 bg-blue-50/60' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Industries
            </button>

            {/* Dedicated Developers */}
            <button 
              id="nav-link-developers"
              onClick={() => handleNavClick('/dedicated-developers')}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                currentPath === '/dedicated-developers' ? 'text-blue-600 bg-blue-50/60' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Developers
            </button>

            {/* Case Studies */}
            <button 
              id="nav-link-case-studies"
              onClick={() => handleNavClick('/case-studies')}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                currentPath === '/case-studies' ? 'text-blue-600 bg-blue-50/60' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Case Studies
            </button>

            {/* Locations */}
            <button 
              id="nav-link-locations"
              onClick={() => handleNavClick('/locations')}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                currentPath.startsWith('/locations') ? 'text-blue-600 bg-blue-50/60' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              Locations
            </button>

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                id="nav-link-resources"
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg flex items-center gap-1 transition-colors"
              >
                Resources
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              {activeDropdown === 'resources' && (
                <div className="absolute top-full right-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div 
                    onClick={() => handleNavClick('/free-project-estimate')}
                    className="p-2.5 rounded-xl hover:bg-slate-50 cursor-pointer text-sm font-medium text-slate-800 hover:text-blue-600 flex items-center justify-between"
                  >
                    <span>Free Project Estimate</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-semibold">Calculator</span>
                  </div>
                  <div 
                    onClick={() => handleNavClick('/free-website-audit')}
                    className="p-2.5 rounded-xl hover:bg-slate-50 cursor-pointer text-sm font-medium text-slate-800 hover:text-blue-600 flex items-center justify-between"
                  >
                    <span>Free Website & SEO Audit</span>
                    <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-semibold">Tool</span>
                  </div>
                  <div 
                    onClick={() => handleNavClick('/pricing')}
                    className="p-2.5 rounded-xl hover:bg-slate-50 cursor-pointer text-sm font-medium text-slate-800 hover:text-blue-600"
                  >
                    Transparent Pricing
                  </div>
                  <div 
                    onClick={() => handleNavClick('/blog')}
                    className="p-2.5 rounded-xl hover:bg-slate-50 cursor-pointer text-sm font-medium text-slate-800 hover:text-blue-600"
                  >
                    Engineering Blog
                  </div>
                  <div 
                    onClick={() => handleNavClick('/faq')}
                    className="p-2.5 rounded-xl hover:bg-slate-50 cursor-pointer text-sm font-medium text-slate-800 hover:text-blue-600"
                  >
                    Frequently Asked Questions
                  </div>
                </div>
              )}
            </div>

            {/* About */}
            <button 
              id="nav-link-about"
              onClick={() => handleNavClick('/about')}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                currentPath === '/about' ? 'text-blue-600 bg-blue-50/60' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              About
            </button>
          </nav>

          {/* Desktop Right CTA Section */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Quick CRM Lead Hub Trigger (Demonstrating backend lead management) */}
            <button
              id="navbar-lead-hub-btn"
              onClick={onOpenLeadHub}
              title="View Inbound Leads & CRM Dashboard"
              className="p-2 text-slate-500 hover:text-blue-600 hover:bg-slate-100 rounded-lg transition-colors text-xs flex items-center gap-1.5 border border-slate-200"
            >
              <Database className="w-3.5 h-3.5 text-blue-600" />
              <span className="font-semibold">Leads CRM</span>
            </button>

            {/* Primary Action Button */}
            <button
              id="navbar-cta-consultation"
              onClick={onOpenConsultation}
              className="bg-slate-900 hover:bg-blue-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-blue-500/25 flex items-center gap-2"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenLeadHub}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg border border-slate-200 text-xs flex items-center gap-1"
            >
              <Database className="w-3.5 h-3.5 text-blue-600" />
              <span className="hidden sm:inline font-medium">CRM</span>
            </button>

            <button
              id="mobile-hamburger-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-slate-200 shadow-2xl p-5 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            
            <button 
              onClick={() => handleNavClick('/')}
              className="text-left px-3 py-2.5 rounded-xl font-semibold text-slate-900 hover:bg-slate-50"
            >
              Home
            </button>

            <div className="border-t border-slate-100 pt-2 pb-1">
              <div className="text-xs uppercase font-bold text-slate-400 px-3 py-1">Services & Solutions</div>
              <button 
                onClick={() => handleNavClick('/services')}
                className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-800 hover:bg-slate-50 font-medium"
              >
                All 12 Core Services
              </button>
              <button 
                onClick={() => handleNavClick('/services/ai-automation')}
                className="w-full text-left px-3 py-2 rounded-lg text-sm text-blue-600 hover:bg-blue-50 font-semibold flex items-center justify-between"
              >
                <span>AI Automation & Agents</span>
                <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">Featured</span>
              </button>
              <button 
                onClick={() => handleNavClick('/services/performance-marketing')}
                className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-800 hover:bg-slate-50 font-medium"
              >
                Performance Marketing (Google & Meta)
              </button>
              <button 
                onClick={() => handleNavClick('/services/api-integration')}
                className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-800 hover:bg-slate-50 font-medium"
              >
                API & WhatsApp Integration
              </button>
            </div>

            <div className="border-t border-slate-100 pt-2 pb-1">
              <div className="text-xs uppercase font-bold text-slate-400 px-3 py-1">Explore</div>
              <button 
                onClick={() => handleNavClick('/dedicated-developers')}
                className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-800 hover:bg-slate-50 font-medium"
              >
                Hire Dedicated Developers
              </button>
              <button 
                onClick={() => handleNavClick('/industries')}
                className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-800 hover:bg-slate-50 font-medium"
              >
                Industries Served (15+ Verticals)
              </button>
              <button 
                onClick={() => handleNavClick('/case-studies')}
                className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-800 hover:bg-slate-50 font-medium"
              >
                Case Studies & Portfolio
              </button>
              <button 
                onClick={() => handleNavClick('/locations')}
                className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-800 hover:bg-slate-50 font-medium"
              >
                Global & Indian Locations
              </button>
              <button 
                onClick={() => handleNavClick('/pricing')}
                className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-800 hover:bg-slate-50 font-medium"
              >
                Transparent Pricing
              </button>
              <button 
                onClick={() => handleNavClick('/about')}
                className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-800 hover:bg-slate-50 font-medium"
              >
                About HireYourCoder
              </button>
              <button 
                onClick={() => handleNavClick('/faq')}
                className="w-full text-left px-3 py-2 rounded-lg text-sm text-slate-800 hover:bg-slate-50 font-medium"
              >
                FAQs
              </button>
            </div>

            {/* Free tools highlight on mobile */}
            <div className="bg-slate-50 p-3 rounded-xl flex flex-col gap-2 my-2 border border-slate-200/60">
              <div className="text-xs font-semibold text-slate-600">Free Growth Calculators</div>
              <button 
                onClick={() => handleNavClick('/free-project-estimate')}
                className="text-left text-xs text-blue-700 font-semibold hover:underline flex items-center justify-between"
              >
                <span>6-Step Project Cost Estimator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={() => handleNavClick('/free-website-audit')}
                className="text-left text-xs text-emerald-700 font-semibold hover:underline flex items-center justify-between"
              >
                <span>Instant Website & SEO Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Action CTA Buttons */}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-center text-sm shadow-md shadow-blue-500/20"
              >
                Get Free Consultation
              </button>
              <a
                href="https://wa.me/919568497688?text=Hi%20HireYourCoder%20team,%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
                className="w-full bg-emerald-50 text-emerald-700 border border-emerald-200 py-2.5 rounded-xl font-semibold text-center text-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
