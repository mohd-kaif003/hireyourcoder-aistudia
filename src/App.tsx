import React, { useState, useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { LeadCaptureModal } from './components/common/LeadCaptureModal';
import { FloatingWidgets } from './components/common/FloatingWidgets';
import { LeadDashboardModal } from './components/common/LeadDashboardModal';

// Home Page Sections
import { HeroSection } from './components/home/HeroSection';
import { ServicesSection } from './components/home/ServicesSection';
import { ProcessSection } from './components/home/ProcessSection';
import { TechStackSection } from './components/home/TechStackSection';
import { IndustriesSection } from './components/home/IndustriesSection';
import { WhyChooseUsSection } from './components/home/WhyChooseUsSection';
import { CaseStudiesSection } from './components/home/CaseStudiesSection';
import { FAQSection } from './components/home/FAQSection';
import { LeadGenerationSection } from './components/home/LeadGenerationSection';

// Tools
import { ProjectEstimateTool } from './components/tools/ProjectEstimateTool';
import { WebsiteAuditTool } from './components/tools/WebsiteAuditTool';

// Dedicated Pages
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { DedicatedDevelopersPage } from './pages/DedicatedDevelopersPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { IndustryDetailPage } from './pages/IndustryDetailPage';
import { LocationsPage } from './pages/LocationsPage';
import { LocationDetailPage } from './pages/LocationDetailPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { CaseStudyDetailPage } from './pages/CaseStudyDetailPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';

// Data
import { servicesData } from './data/servicesData';
import { industriesData } from './data/industriesData';
import { locationsData } from './data/locationsData';
import { caseStudiesData } from './data/caseStudiesData';
import { blogData } from './data/blogData';

// SEO helper
import { updateSEO } from './utils/seo';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isCRMOpen, setIsCRMOpen] = useState(false);
  const [modalDefaultService, setModalDefaultService] = useState<string | undefined>(undefined);

  // Router handler
  const navigate = (path: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Listen for browser forward/back buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync SEO metadata per route
  useEffect(() => {
    const path = currentPath;

    if (path === '/') {
      updateSEO({
        title: 'HireYourCoder – Technology & Growth Partner | Web, Apps, AI & Dedicated Developers',
        description: 'Build, automate, and scale with senior full-stack developers, mobile apps, AI automation agents, and performance marketing engineered for global scale.',
        path: '/'
      });
    } else if (path === '/services') {
      updateSEO({
        title: 'Digital Engineering & Growth Services | HireYourCoder',
        description: 'Explore our full spectrum of technology services: Next.js web applications, mobile apps, AI workflow automation, dedicated engineers, and performance marketing.',
        path: '/services'
      });
    } else if (path.startsWith('/services/')) {
      const slug = path.replace('/services/', '');
      const srv = servicesData.find(s => s.slug === slug);
      if (srv) {
        updateSEO({
          title: `${srv.title} Services | HireYourCoder`,
          description: srv.metaDescription || srv.shortDesc,
          path: `/services/${srv.slug}`
        });
      }
    } else if (path === '/dedicated-developers') {
      updateSEO({
        title: 'Hire Dedicated Senior Developers | 1-Week Trial | HireYourCoder',
        description: 'Hire pre-vetted full-stack, Next.js, React Native, Node.js, and AI engineers with guaranteed timezone overlap and 1-week risk-free trial.',
        path: '/dedicated-developers'
      });
    } else if (path === '/industries') {
      updateSEO({
        title: 'Tailored Software for 15+ Industry Verticals | HireYourCoder',
        description: 'Bespoke web applications, workflow automation, and custom platforms engineered for Real Estate, Healthcare, E-commerce, B2B Export, and SaaS.',
        path: '/industries'
      });
    } else if (path.startsWith('/industries/')) {
      const slug = path.replace('/industries/', '');
      const ind = industriesData.find(i => i.slug === slug);
      if (ind) {
        updateSEO({
          title: `${ind.name} Software & Web Solutions | HireYourCoder`,
          description: ind.tagline || ind.headline || `${ind.name} bespoke digital software and automation solutions`,
          path: `/industries/${ind.slug}`
        });
      }
    } else if (path === '/locations') {
      updateSEO({
        title: 'Global Delivery & Innovation Hubs | HireYourCoder',
        description: 'Headquartered in Moradabad with engineering centers in Delhi NCR and Bangalore, serving clients across the US, UK, UAE, Australia, and worldwide.',
        path: '/locations'
      });
    } else if (path.startsWith('/locations/')) {
      const slug = path.replace('/locations/', '');
      const loc = locationsData.find(l => l.slug === slug);
      if (loc) {
        updateSEO({
          title: `${loc.headline || loc.tagline || loc.name} | HireYourCoder`,
          description: loc.description || loc.deliveryModel || `${loc.name} technology engineering hub`,
          path: `/locations/${loc.slug}`
        });
      }
    } else if (path === '/case-studies') {
      updateSEO({
        title: 'Client Case Studies & Technical Architectures | HireYourCoder',
        description: 'Discover how we modernized B2B export platforms, clinic booking pipelines, multi-tenant SaaS billing, and high-velocity ecommerce brands.',
        path: '/case-studies'
      });
    } else if (path.startsWith('/case-studies/')) {
      const slug = path.replace('/case-studies/', '');
      const cs = caseStudiesData.find(c => c.slug === slug);
      if (cs) {
        updateSEO({
          title: `${cs.title} | Case Study | HireYourCoder`,
          description: cs.challenge,
          path: `/case-studies/${cs.slug}`
        });
      }
    } else if (path === '/pricing') {
      updateSEO({
        title: 'Transparent Engineering Pricing & Milestone Models | HireYourCoder',
        description: 'Clear, predictable pricing for web development, mobile apps, dedicated developers, and AI automations. Zero hidden costs or vendor lock-in.',
        path: '/pricing'
      });
    } else if (path === '/about') {
      updateSEO({
        title: 'About HireYourCoder – Engineering Craftsmanship & Commercial Growth',
        description: 'Learn about our roots in Moradabad, our distributed senior engineering team, core values, and non-negotiable code quality standards.',
        path: '/about'
      });
    } else if (path === '/blog') {
      updateSEO({
        title: 'Engineering & Growth Insights Blog | HireYourCoder',
        description: 'Practical guides on Next.js 15, PostgreSQL database scaling, WhatsApp Cloud API bots, Meta CAPI tracking, and remote team management.',
        path: '/blog'
      });
    } else if (path.startsWith('/blog/')) {
      const slug = path.replace('/blog/', '');
      const post = blogData.find(b => b.slug === slug);
      if (post) {
        updateSEO({
          title: `${post.title} | HireYourCoder Insights`,
          description: post.excerpt || post.summary || post.title,
          path: `/blog/${post.slug}`
        });
      }
    } else if (path === '/contact') {
      updateSEO({
        title: 'Contact HireYourCoder – Get Free Project Consultation & Quote',
        description: 'Speak directly with our principal solutions architect. Guaranteed 2-4 hour response time for qualified project inquiries.',
        path: '/contact'
      });
    } else if (path === '/free-project-estimate') {
      updateSEO({
        title: 'Instant Project Cost & Timeline Calculator | HireYourCoder',
        description: 'Calculate an accurate milestone budget and timeline estimate for your web application, mobile app, or dedicated developer team.',
        path: '/free-project-estimate'
      });
    } else if (path === '/free-website-audit') {
      updateSEO({
        title: 'Free Website Performance, SEO & Security Audit | HireYourCoder',
        description: 'Run our comprehensive diagnostic engine to evaluate your website’s Core Web Vitals, mobile responsiveness, SEO tags, and security headers.',
        path: '/free-website-audit'
      });
    }
  }, [currentPath]);

  const openConsultation = (serviceName?: string) => {
    setModalDefaultService(serviceName);
    setIsConsultationModalOpen(true);
  };

  // Render active view based on path
  const renderView = () => {
    // 1. Home Page
    if (currentPath === '/' || currentPath === '') {
      return (
        <main>
          <HeroSection 
            onOpenConsultation={() => openConsultation()} 
            onNavigate={navigate} 
          />
          <ServicesSection 
            onNavigate={navigate} 
            onOpenConsultation={openConsultation} 
          />
          <ProcessSection 
            onOpenConsultation={() => openConsultation()} 
          />
          <TechStackSection />
          <IndustriesSection 
            onNavigate={navigate} 
          />
          <WhyChooseUsSection 
            onOpenConsultation={() => openConsultation()} 
          />
          <CaseStudiesSection 
            onNavigate={navigate} 
            onOpenConsultation={() => openConsultation()} 
          />
          <FAQSection 
            onOpenConsultation={() => openConsultation()} 
          />
          <LeadGenerationSection />
        </main>
      );
    }

    // 2. Services List
    if (currentPath === '/services') {
      return (
        <ServicesPage 
          onNavigate={navigate} 
          onOpenConsultation={() => openConsultation()} 
        />
      );
    }

    // 3. Service Detail
    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '');
      const service = servicesData.find(s => s.slug === slug);
      if (service) {
        return (
          <ServiceDetailPage 
            service={service} 
            onNavigate={navigate} 
            onOpenConsultation={() => openConsultation(service.title)} 
          />
        );
      }
      return (
        <div className="pt-36 pb-20 text-center max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-heading">Service Specification Not Found</h2>
          <p className="text-slate-600 text-sm mt-2">The requested service specification does not exist.</p>
          <button 
            onClick={() => navigate('/services')} 
            className="mt-6 bg-blue-600 text-white font-bold px-6 py-2.5 rounded-xl text-xs"
          >
            Back to All Services
          </button>
        </div>
      );
    }

    // 4. Dedicated Developers
    if (currentPath === '/dedicated-developers') {
      return (
        <DedicatedDevelopersPage 
          onOpenConsultation={() => openConsultation('Dedicated Developers')} 
          onNavigate={navigate} 
        />
      );
    }

    // 5. Industries List
    if (currentPath === '/industries') {
      return (
        <IndustriesPage 
          onNavigate={navigate} 
          onOpenConsultation={() => openConsultation()} 
        />
      );
    }

    // 6. Industry Detail
    if (currentPath.startsWith('/industries/')) {
      const slug = currentPath.replace('/industries/', '');
      const industry = industriesData.find(i => i.slug === slug);
      if (industry) {
        return (
          <IndustryDetailPage 
            industry={industry} 
            onNavigate={navigate} 
            onOpenConsultation={() => openConsultation(`${industry.name} Industry Software`)} 
          />
        );
      }
      return (
        <div className="pt-36 pb-20 text-center max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-heading">Industry Specification Not Found</h2>
          <p className="text-slate-600 text-sm mt-2">The requested vertical could not be found.</p>
          <button 
            onClick={() => navigate('/industries')} 
            className="mt-6 bg-blue-600 text-white font-bold px-6 py-2.5 rounded-xl text-xs"
          >
            Back to All Industries
          </button>
        </div>
      );
    }

    // 7. Locations List
    if (currentPath === '/locations') {
      return (
        <LocationsPage 
          onNavigate={navigate} 
          onOpenConsultation={() => openConsultation()} 
        />
      );
    }

    // 8. Location Detail
    if (currentPath.startsWith('/locations/')) {
      const slug = currentPath.replace('/locations/', '');
      const location = locationsData.find(l => l.slug === slug);
      if (location) {
        return (
          <LocationDetailPage 
            location={location} 
            onNavigate={navigate} 
            onOpenConsultation={() => openConsultation(`Location Hub Inquiry: ${location.name}`)} 
          />
        );
      }
      return (
        <div className="pt-36 pb-20 text-center max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-heading">Location Hub Not Found</h2>
          <p className="text-slate-600 text-sm mt-2">The requested city or regional hub does not exist.</p>
          <button 
            onClick={() => navigate('/locations')} 
            className="mt-6 bg-blue-600 text-white font-bold px-6 py-2.5 rounded-xl text-xs"
          >
            Back to All Locations
          </button>
        </div>
      );
    }

    // 9. Case Studies List
    if (currentPath === '/case-studies') {
      return (
        <CaseStudiesPage 
          onNavigate={navigate} 
          onOpenConsultation={() => openConsultation()} 
        />
      );
    }

    // 10. Case Study Detail
    if (currentPath.startsWith('/case-studies/')) {
      const slug = currentPath.replace('/case-studies/', '');
      const study = caseStudiesData.find(c => c.slug === slug);
      if (study) {
        return (
          <CaseStudyDetailPage 
            caseStudy={study} 
            onNavigate={navigate} 
            onOpenConsultation={() => openConsultation(`Case Study Inquiry: ${study.title}`)} 
          />
        );
      }
      return (
        <div className="pt-36 pb-20 text-center max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-heading">Case Study Not Found</h2>
          <p className="text-slate-600 text-sm mt-2">The requested implementation story does not exist.</p>
          <button 
            onClick={() => navigate('/case-studies')} 
            className="mt-6 bg-blue-600 text-white font-bold px-6 py-2.5 rounded-xl text-xs"
          >
            Back to All Case Studies
          </button>
        </div>
      );
    }

    // 11. Pricing Page
    if (currentPath === '/pricing') {
      return (
        <PricingPage 
          onOpenConsultation={() => openConsultation()} 
          onNavigate={navigate} 
        />
      );
    }

    // 12. About Page
    if (currentPath === '/about') {
      return (
        <AboutPage 
          onOpenConsultation={() => openConsultation()} 
          onNavigate={navigate} 
        />
      );
    }

    // 13. Blog List
    if (currentPath === '/blog') {
      return (
        <BlogPage 
          onNavigate={navigate} 
        />
      );
    }

    // 14. Blog Post Detail
    if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.replace('/blog/', '');
      const post = blogData.find(b => b.slug === slug);
      if (post) {
        return (
          <BlogPostPage 
            post={post} 
            onNavigate={navigate} 
            onOpenConsultation={() => openConsultation(`Blog Inquiry: ${post.title}`)} 
          />
        );
      }
      return (
        <div className="pt-36 pb-20 text-center max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold font-heading">Article Not Found</h2>
          <p className="text-slate-600 text-sm mt-2">The requested engineering guide could not be located.</p>
          <button 
            onClick={() => navigate('/blog')} 
            className="mt-6 bg-blue-600 text-white font-bold px-6 py-2.5 rounded-xl text-xs"
          >
            Back to All Articles
          </button>
        </div>
      );
    }

    // 15. Contact Page
    if (currentPath === '/contact') {
      return <ContactPage />;
    }

    // 16. Free Project Estimate Tool Standalone Page
    if (currentPath === '/free-project-estimate') {
      return (
        <div className="pt-28 pb-20 bg-slate-50/60 min-h-screen">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectEstimateTool />
          </div>
        </div>
      );
    }

    // 17. Free Website Audit Tool Standalone Page
    if (currentPath === '/free-website-audit') {
      return (
        <div className="pt-28 pb-20 bg-slate-50/60 min-h-screen">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <WebsiteAuditTool />
          </div>
        </div>
      );
    }

    // Fallback 404
    return (
      <div className="pt-40 pb-28 text-center max-w-md mx-auto px-4">
        <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
          404 Not Found
        </span>
        <h1 className="text-3xl font-extrabold font-heading text-slate-950 mt-4">
          Page Does Not Exist
        </h1>
        <p className="text-sm text-slate-600 mt-2">
          The link you followed may be broken or the page has moved.
        </p>
        <button
          onClick={() => navigate('/')}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-xs transition-colors shadow-md shadow-blue-500/25"
        >
          Return to Homepage
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Sticky Top Header Navigation */}
      <Navbar 
        currentPath={currentPath}
        onNavigate={navigate} 
        onOpenConsultation={() => openConsultation()} 
        onOpenLeadHub={() => setIsCRMOpen(true)}
      />

      {/* Main Viewport Content */}
      <div className="flex-1">
        {renderView()}
      </div>

      {/* Global Multi-Column Footer */}
      <Footer 
        onNavigate={navigate} 
        onOpenConsultation={() => openConsultation()}
        onOpenCRM={() => setIsCRMOpen(true)}
      />

      {/* Floating CTA & WhatsApp & CRM Widgets */}
      <FloatingWidgets 
        onOpenConsultation={() => openConsultation()} 
        onOpenCRM={() => setIsCRMOpen(true)}
      />

      {/* Quick Consultation Modal */}
      <LeadCaptureModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        defaultService={modalDefaultService}
      />

      {/* Inbound CRM & Lead Management Hub */}
      <LeadDashboardModal
        isOpen={isCRMOpen}
        onClose={() => setIsCRMOpen(false)}
      />
    </div>
  );
}
