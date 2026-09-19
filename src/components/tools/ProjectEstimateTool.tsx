import React, { useState } from 'react';
import { 
  Calculator, Check, ArrowRight, ArrowLeft, Send, Sparkles, 
  Clock, DollarSign, Users, Layers, MessageSquare, ShieldCheck, CheckCircle2
} from 'lucide-react';
import { saveNewLead } from '../../utils/leadsStorage';

export const ProjectEstimateTool: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Step 1: Service
  const [selectedService, setSelectedService] = useState('Website Development');
  // Step 2: Project Type
  const [projectType, setProjectType] = useState('New Product MVP from Scratch');
  // Step 3: Features Selected
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'Responsive Mobile-First UI',
    'Custom CMS & Admin Panel',
    'SEO Semantic Architecture'
  ]);
  // Step 4: Target Budget
  const [budgetRange, setBudgetRange] = useState('$2,500 - $5,000 (₹1.75L - ₹3.5L)');
  // Step 5: Timeline
  const [timeline, setTimeline] = useState('3 - 5 Weeks (Standard Velocity)');
  // Step 6: Contact Info
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: 'India',
    notes: ''
  });

  const [isCalculated, setIsCalculated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const servicesList = [
    { title: 'Website Development', baseCost: 1200, baseWeeks: 3, desc: 'High-speed Next.js or headless marketing site' },
    { title: 'Web Application / SaaS', baseCost: 3200, baseWeeks: 6, desc: 'Custom portals, cloud databases & auth' },
    { title: 'Mobile App Development', baseCost: 3500, baseWeeks: 7, desc: 'Cross-platform iOS & Android React Native / Flutter' },
    { title: 'AI Automation & Agents', baseCost: 1800, baseWeeks: 4, desc: 'AI Chatbots, RAG knowledge bases & WhatsApp bots' },
    { title: 'E-commerce Storefront', baseCost: 1800, baseWeeks: 4, desc: 'Headless Next.js or custom Shopify Plus' },
    { title: 'Dedicated Developers', baseCost: 2200, baseWeeks: 2, desc: 'Full-time senior remote software engineers' }
  ];

  const projectTypes = [
    'New Product MVP from Scratch',
    'Redesign & Complete Codebase Modernization',
    'Add Specific Features / Integrate APIs',
    'Ongoing Sprint Team Augmentation'
  ];

  const availableFeatures = [
    { name: 'Responsive Mobile-First UI', cost: 300, weeks: 0.5 },
    { name: 'Custom CMS & Admin Panel', cost: 500, weeks: 1 },
    { name: 'SEO Semantic Architecture & Schema', cost: 350, weeks: 0.5 },
    { name: 'Payment Gateway (Stripe/Razorpay)', cost: 450, weeks: 0.5 },
    { name: 'WhatsApp Cloud API Automation', cost: 600, weeks: 1 },
    { name: 'AI Chatbot with Private RAG Knowledge', cost: 850, weeks: 1.5 },
    { name: 'User Authentication & RBAC Roles', cost: 400, weeks: 0.5 },
    { name: 'ERP or CRM Bi-Directional Sync', cost: 750, weeks: 1 },
    { name: 'Multi-Language / International i18n', cost: 400, weeks: 0.5 },
    { name: 'Push Notifications (FCM / OneSignal)', cost: 350, weeks: 0.5 }
  ];

  const toggleFeature = (featureName: string) => {
    if (selectedFeatures.includes(featureName)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== featureName));
    } else {
      setSelectedFeatures([...selectedFeatures, featureName]);
    }
  };

  // Calculation logic
  const calculateEstimates = () => {
    const srv = servicesList.find(s => s.title === selectedService) || servicesList[0];
    let totalFeatureCost = 0;
    let extraWeeks = 0;

    selectedFeatures.forEach(featName => {
      const feat = availableFeatures.find(f => f.name === featName);
      if (feat) {
        totalFeatureCost += feat.cost;
        extraWeeks += feat.weeks;
      }
    });

    const baseMin = srv.baseCost + totalFeatureCost;
    const baseMax = Math.round(baseMin * 1.35);

    const minWeeks = Math.max(2, Math.round(srv.baseWeeks + extraWeeks));
    const maxWeeks = minWeeks + 2;

    const inrMin = (baseMin * 85).toLocaleString('en-IN');
    const inrMax = (baseMax * 85).toLocaleString('en-IN');

    return {
      usdRange: `$${baseMin.toLocaleString()} - $${baseMax.toLocaleString()} USD`,
      inrRange: `₹${inrMin} - ₹${inrMax} INR`,
      timelineWeeks: `${minWeeks} to ${maxWeeks} Weeks`,
      recommendedTeam: minWeeks > 5 ? 'Senior Lead Architect + 2 Full-Stack Engineers + QA' : 'Senior Full-Stack Engineer + UI/UX Specialist'
    };
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!contactInfo.name.trim()) {
      setErrorMsg('Please provide your name.');
      return;
    }
    if (!contactInfo.email.trim() || !contactInfo.email.includes('@')) {
      setErrorMsg('Please provide a valid work email.');
      return;
    }
    if (!contactInfo.phone.trim()) {
      setErrorMsg('Please provide a contact phone or WhatsApp number.');
      return;
    }

    setIsSubmitting(true);

    try {
      const estimates = calculateEstimates();

      saveNewLead({
        name: contactInfo.name.trim(),
        company: contactInfo.company.trim() || undefined,
        email: contactInfo.email.trim(),
        phone: contactInfo.phone.trim(),
        country: contactInfo.country,
        service: selectedService,
        projectType,
        budget: `${estimates.usdRange} (${estimates.inrRange})`,
        timeline: estimates.timelineWeeks,
        message: `Project Estimate Submission: Selected ${selectedFeatures.length} features (${selectedFeatures.join(', ')}). Target user budget: ${budgetRange}. Additional notes: ${contactInfo.notes}`,
        source: 'Free Project Estimate Tool',
        utm: {
          utm_source: 'website_tool',
          landing_page: '/free-project-estimate'
        }
      });

      setIsSubmitting(false);
      setIsCalculated(true);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
      setErrorMsg('Submission failed. Please message us on WhatsApp.');
    }
  };

  const estimates = calculateEstimates();

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
      
      {/* Top Wizard Indicator */}
      <div className="bg-slate-900 text-white p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
              <Calculator className="w-4 h-4" />
              <span>Interactive Scope & Investment Estimator</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              Instant Project Cost & Timeline Calculator
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Transparent, itemized pricing models based on modern architectural parameters.
            </p>
          </div>

          {!isCalculated && (
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs text-slate-400 font-medium">Step {currentStep} of 6</span>
              <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500 transition-all duration-300"
                  style={{ width: `${(currentStep / 6) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Body */}
      <div className="p-6 sm:p-10">
        
        {isCalculated ? (
          /* Step 7: Final Result Breakdown */
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="p-6 bg-emerald-50/80 border border-emerald-200 rounded-3xl text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-600 text-white mx-auto flex items-center justify-center mb-3 shadow-md shadow-emerald-600/30">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-800">
                Estimate Calculated & Saved
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 font-heading">
                Estimated Project Scope: {selectedService}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
                Based on your selected parameters, here is your estimated engineering investment range and delivery timeline. A copy has been logged to our solutions team.
              </p>
            </div>

            {/* Estimates Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-blue-700 mb-1">
                  <DollarSign className="w-4 h-4" />
                  <span>Estimated Investment</span>
                </div>
                <div className="text-xl font-extrabold text-slate-900">{estimates.usdRange}</div>
                <div className="text-xs font-semibold text-blue-800 mt-1">{estimates.inrRange}</div>
              </div>

              <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-200">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-indigo-700 mb-1">
                  <Clock className="w-4 h-4" />
                  <span>Development Velocity</span>
                </div>
                <div className="text-xl font-extrabold text-slate-900">{estimates.timelineWeeks}</div>
                <div className="text-xs text-slate-500 mt-1">2-week agile sprint cycles</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-600 mb-1">
                  <Users className="w-4 h-4" />
                  <span>Recommended Pod</span>
                </div>
                <div className="text-sm font-bold text-slate-900">{estimates.recommendedTeam}</div>
                <div className="text-xs text-slate-500 mt-1">Managed delivery & code reviews</div>
              </div>
            </div>

            {/* Included Features Summary */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Selected Architecture Modules ({selectedFeatures.length})
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedFeatures.map(f => (
                  <span key={f} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 flex items-center gap-1.5 shadow-2xs">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{f}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href={`https://wa.me/919568497688?text=Hello%20HireYourCoder,%20I%20just%20ran%20the%20estimate%20calculator%20for%20${encodeURIComponent(selectedService)}%20(${encodeURIComponent(estimates.usdRange)}).%20My%20name%20is%20${encodeURIComponent(contactInfo.name)}.`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl text-center text-sm shadow-md shadow-emerald-600/25 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Discuss on WhatsApp Now</span>
              </a>

              <button
                onClick={() => {
                  setIsCalculated(false);
                  setCurrentStep(1);
                }}
                className="w-full sm:w-auto px-6 py-3.5 border border-slate-300 hover:bg-slate-50 rounded-xl text-slate-700 font-semibold text-sm transition-colors"
              >
                Recalculate Estimate
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Step 1: Select Service */}
            {currentStep === 1 && (
              <div className="space-y-4 animate-in fade-in">
                <h3 className="text-lg font-bold text-slate-900">Step 1: Select Primary Service Needed</h3>
                <p className="text-slate-500 text-xs">Choose the primary technology domain you require.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {servicesList.map(srv => (
                    <div
                      key={srv.title}
                      onClick={() => setSelectedService(srv.title)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                        selectedService === srv.title
                          ? 'border-blue-600 bg-blue-50/50 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-slate-900">{srv.title}</span>
                        {selectedService === srv.title && (
                          <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center">
                            <Check className="w-3 h-3" />
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 mt-1">{srv.desc}</p>
                      <div className="mt-2 text-[11px] font-semibold text-blue-700">
                        Base starting from ${srv.baseCost}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Project Type */}
            {currentStep === 2 && (
              <div className="space-y-4 animate-in fade-in">
                <h3 className="text-lg font-bold text-slate-900">Step 2: Project Lifecycle & Scope Type</h3>
                <p className="text-slate-500 text-xs">Are we building fresh or augmenting an existing system?</p>
                <div className="space-y-2.5 pt-2">
                  {projectTypes.map(pt => (
                    <div
                      key={pt}
                      onClick={() => setProjectType(pt)}
                      className={`p-4 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                        projectType === pt
                          ? 'border-blue-600 bg-blue-50/50 font-semibold'
                          : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <span className="text-sm text-slate-800">{pt}</span>
                      {projectType === pt && <Check className="w-4 h-4 text-blue-600" />}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Features */}
            {currentStep === 3 && (
              <div className="space-y-4 animate-in fade-in">
                <h3 className="text-lg font-bold text-slate-900">Step 3: Select Required Capabilities & Modules</h3>
                <p className="text-slate-500 text-xs">Check all feature modules you envision in your application.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {availableFeatures.map(feat => {
                    const isSelected = selectedFeatures.includes(feat.name);
                    return (
                      <div
                        key={feat.name}
                        onClick={() => toggleFeature(feat.name)}
                        className={`p-3.5 rounded-xl border cursor-pointer flex items-center justify-between text-xs transition-all ${
                          isSelected
                            ? 'border-blue-600 bg-blue-50/40 text-blue-900 font-semibold'
                            : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                            isSelected ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300'
                          }`}>
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                          <span>{feat.name}</span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono">+${feat.cost}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 4: Budget Range */}
            {currentStep === 4 && (
              <div className="space-y-4 animate-in fade-in">
                <h3 className="text-lg font-bold text-slate-900">Step 4: Target Investment Appetite</h3>
                <p className="text-slate-500 text-xs">Help us tailor architecture choices to your budget allocation.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    { label: '$1,000 - $2,500 (₹75,000 - ₹1,80,000)', desc: 'Lean MVP or High-Performance Marketing Site' },
                    { label: '$2,500 - $5,000 (₹1,75,000 - ₹3,50,000)', desc: 'Full-Featured Web App / Custom Storefront' },
                    { label: '$5,000 - $10,000 (₹3,50,000 - ₹7,50,000)', desc: 'Multi-Tenant SaaS / Mobile App Suite' },
                    { label: '$10,000+ (₹7,50,000+ Enterprise)', desc: 'Complete Enterprise Ecosystem / Dedicated Pod' }
                  ].map(b => (
                    <div
                      key={b.label}
                      onClick={() => setBudgetRange(b.label)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                        budgetRange === b.label
                          ? 'border-blue-600 bg-blue-50/50 shadow-sm'
                          : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <div className="text-sm font-bold text-slate-900">{b.label}</div>
                      <div className="text-xs text-slate-500 mt-1">{b.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Timeline */}
            {currentStep === 5 && (
              <div className="space-y-4 animate-in fade-in">
                <h3 className="text-lg font-bold text-slate-900">Step 5: Target Delivery Timeline</h3>
                <p className="text-slate-500 text-xs">When do you need the first release live?</p>
                <div className="space-y-2.5 pt-2">
                  {[
                    { label: 'Immediate Sprint (Next 2-3 Weeks)', desc: 'Fast-track milestone with dedicated engineer allocation' },
                    { label: '3 - 5 Weeks (Standard Velocity)', desc: 'Structured design, architecture, testing & rollout' },
                    { label: '6 - 10 Weeks (Complex Multi-Phase)', desc: 'Deep integrations, mobile apps & enterprise compliance' },
                    { label: 'Flexible / Ongoing Monthly Team', desc: 'Continuous agile product backlog evolution' }
                  ].map(t => (
                    <div
                      key={t.label}
                      onClick={() => setTimeline(t.label)}
                      className={`p-4 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                        timeline === t.label
                          ? 'border-blue-600 bg-blue-50/50 font-semibold'
                          : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <div>
                        <div className="text-sm text-slate-900">{t.label}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{t.desc}</div>
                      </div>
                      {timeline === t.label && <Check className="w-4 h-4 text-blue-600" />}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 6: Contact Info */}
            {currentStep === 6 && (
              <form onSubmit={handleFinalSubmit} className="space-y-4 animate-in fade-in">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Step 6: Where Should We Send the Full Spec & Cost Breakdown?</h3>
                  <p className="text-slate-500 text-xs">We will immediately show your calculated range on screen and log your request.</p>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kaif Khan"
                      value={contactInfo.name}
                      onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="kaif@company.com"
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 95684 97688"
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Company / Project Name</label>
                    <input
                      type="text"
                      placeholder="Company or product name"
                      value={contactInfo.company}
                      onChange={(e) => setContactInfo({ ...contactInfo, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Additional Project Details</label>
                  <textarea
                    rows={2}
                    placeholder="Any specific APIs, existing URLs, or competitor references you like..."
                    value={contactInfo.notes}
                    onChange={(e) => setContactInfo({ ...contactInfo, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-sm transition-colors shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Calculating Spec...</span>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>Calculate Estimate & View Breakdown</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* Bottom Wizard Navigation Controls */}
            {currentStep < 6 && (
              <div className="flex items-center justify-between pt-8 border-t border-slate-100 mt-8">
                <button
                  type="button"
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                  className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-900 disabled:opacity-30 disabled:hover:text-slate-500 flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>

                <button
                  type="button"
                  onClick={() => setCurrentStep(Math.min(6, currentStep + 1))}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold rounded-xl flex items-center gap-2 transition-colors shadow-sm"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};
