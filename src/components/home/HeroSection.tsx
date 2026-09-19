import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, ShieldCheck, Zap, Sparkles, 
  Cpu, CheckCircle2, MessageSquare, Globe, Check, Layers, 
  Gauge, Users, Clock, Server, Rocket, Building2
} from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onNavigate: (path: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onNavigate
}) => {
  const [activeTab, setActiveTab] = useState<'platforms' | 'ai' | 'pods'>('platforms');

  return (
    <section className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-white">
      
      {/* Background Soft Glow & Pattern */}
      <div className="absolute inset-0 bg-tech-dots opacity-30 pointer-events-none" />
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[320px] sm:w-[600px] lg:w-[800px] h-[240px] sm:h-[350px] bg-gradient-to-b from-blue-100/40 via-indigo-50/20 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Eyebrow Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-4 sm:mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-50 border border-slate-200/90 shadow-2xs text-[11px] sm:text-xs font-semibold text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="hidden xs:inline">Accepting Projects for Q4</span>
            <span className="xs:hidden">Accepting New Projects</span>
            <span className="text-slate-300">•</span>
            <button 
              onClick={() => onNavigate('/free-project-estimate')}
              className="text-blue-600 font-bold hover:underline flex items-center gap-0.5"
            >
              <span>Scope Estimator</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </motion.div>

        {/* Core Headline & Subhead */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.14] font-heading"
          >
            Engineering High-Performance Software, Websites & Dedicated Teams<span className="text-blue-600">.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="mt-3.5 sm:mt-5 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal"
          >
            We design, build, and scale bespoke web applications, cross-platform mobile apps, autonomous AI automations, and dedicated engineering pods for ambitious founders and enterprises in <span className="font-semibold text-slate-900">India</span> and <span className="font-semibold text-slate-900">worldwide</span>.
          </motion.p>

          {/* Action CTAs - MOBILE: Exactly 2 Buttons in ONE Single Row! */}
          <motion.div 
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.24 }}
            className="mt-6 sm:mt-8 grid grid-cols-2 gap-2.5 w-full max-w-xs sm:max-w-md mx-auto sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-3.5"
          >
            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              id="hero-cta-primary"
              onClick={onOpenConsultation}
              className="w-full sm:w-auto bg-slate-950 hover:bg-slate-900 text-white font-semibold py-2.5 px-3 sm:px-6 sm:py-3 rounded-xl transition-all duration-150 shadow-sm flex items-center justify-center gap-1.5 group text-xs sm:text-sm border border-slate-900 cursor-pointer"
            >
              <span className="truncate">Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
            </motion.button>

            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              id="hero-cta-secondary"
              onClick={() => onNavigate('/case-studies')}
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 font-semibold py-2.5 px-3 sm:px-6 sm:py-3 rounded-xl border border-slate-200 transition-colors shadow-2xs text-center text-xs sm:text-sm cursor-pointer truncate"
            >
              Our Work
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.32 }}
            className="mt-3 text-center"
          >
            <button
              onClick={() => onNavigate('/free-project-estimate')}
              className="text-[11px] sm:text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
            >
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <span>Explore scope & timeline roadmap with our interactive tool</span>
              <ArrowRight className="w-3 h-3 opacity-70" />
            </button>
          </motion.div>

          {/* Trust Value Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.36 }}
            className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-3 sm:gap-6 lg:gap-8 text-[11px] sm:text-xs font-semibold text-slate-600"
          >
            <div className="flex items-center gap-1.5 justify-center sm:justify-start">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>100% IP Ownership</span>
            </div>
            <div className="flex items-center gap-1.5 justify-center sm:justify-start">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Sprint-Based Delivery</span>
            </div>
            <div className="flex items-center gap-1.5 justify-center sm:justify-start">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Daily Timezone Overlap</span>
            </div>
            <div className="flex items-center gap-1.5 justify-center sm:justify-start">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Enterprise SLA Standards</span>
            </div>
          </motion.div>
        </div>

        {/* Clean Executive Solutions & Capabilities Matrix (No geeky coding syntax) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.42 }}
          className="mt-10 sm:mt-14 max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-slate-200/90 overflow-hidden">
            
            {/* Header with Clean Segmented Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-3 sm:px-6 sm:py-3.5 bg-slate-50/80 border-b border-slate-200/80 gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                <span className="text-xs font-bold text-slate-800 tracking-wide uppercase">
                  Delivery & Capabilities Matrix
                </span>
              </div>

              {/* Responsive Segment Tabs */}
              <div className="flex items-center gap-1 bg-slate-200/60 p-1 rounded-xl self-start sm:self-auto overflow-x-auto no-scrollbar w-full sm:w-auto">
                <button
                  onClick={() => setActiveTab('platforms')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === 'platforms' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Web & Cloud Platforms
                </button>
                <button
                  onClick={() => setActiveTab('ai')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === 'ai' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  AI & Process Automation
                </button>
                <button
                  onClick={() => setActiveTab('pods')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === 'pods' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Dedicated Developer Pods
                </button>
              </div>
            </div>

            {/* Content Display */}
            <div className="p-4 sm:p-6 lg:p-7">
              <AnimatePresence mode="wait">
                
                {activeTab === 'platforms' && (
                  <motion.div
                    key="platforms"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center"
                  >
                    <div className="lg:col-span-7 space-y-3.5">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold">
                        <Layers className="w-3.5 h-3.5" />
                        <span>SCALABLE DIGITAL ARCHITECTURE</span>
                      </div>
                      <h3 className="text-base sm:text-xl font-bold text-slate-900 font-heading">
                        Sub-Second Page Velocity with Modern Cloud Architecture
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        We build modular applications engineered for high user conversion and zero downtime. Every solution is cross-device responsive, SEO-ready, and designed to scale seamlessly.
                      </p>
                      
                      {/* Architecture Deliverables */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 text-[11px] sm:text-xs">
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">User Interface</span>
                          <span className="font-semibold text-slate-800">Mobile-First UI/UX</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Performance</span>
                          <span className="font-semibold text-slate-800">Edge CDN Acceleration</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 col-span-2 sm:col-span-1">
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Data Security</span>
                          <span className="font-semibold text-slate-800">End-to-End Encrypted</span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/80 flex flex-col justify-between gap-3 sm:gap-4">
                      <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
                        <span className="text-xs font-bold text-slate-700">Verified SLA Metrics</span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">Production</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 text-center shadow-2xs">
                          <div className="text-lg sm:text-xl font-extrabold text-slate-900">99.9%</div>
                          <div className="text-[10px] text-slate-500 font-medium">Uptime Guarantee</div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 text-center shadow-2xs">
                          <div className="text-lg sm:text-xl font-extrabold text-blue-600">&lt; 100ms</div>
                          <div className="text-[10px] text-slate-500 font-medium">Response Latency</div>
                        </div>
                      </div>

                      <button
                        onClick={() => onNavigate('/services/web-development')}
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Explore Web Platforms</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'ai' && (
                  <motion.div
                    key="ai"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center"
                  >
                    <div className="lg:col-span-7 space-y-3.5">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-bold">
                        <Cpu className="w-3.5 h-3.5" />
                        <span>INTELLIGENT AGENTS & AUTOMATIONS</span>
                      </div>
                      <h3 className="text-base sm:text-xl font-bold text-slate-900 font-heading">
                        Eliminate Operational Drag with 24/7 Automated Workflows
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        We deploy automated lead qualification, official WhatsApp Cloud API dispatchers, and custom document intelligence pipelines that streamline business operations.
                      </p>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 text-[11px] sm:text-xs">
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Channels</span>
                          <span className="font-semibold text-slate-800">WhatsApp & Webhooks</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Intelligence</span>
                          <span className="font-semibold text-slate-800">Smart Document AI</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 col-span-2 sm:col-span-1">
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Response</span>
                          <span className="font-semibold text-slate-800">Instant Execution</span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/80 flex flex-col justify-between gap-3 sm:gap-4">
                      <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
                        <span className="text-xs font-bold text-slate-700">Automation Impact</span>
                        <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 text-[10px] font-bold">Enterprise Ready</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 text-center shadow-2xs">
                          <div className="text-lg sm:text-xl font-extrabold text-purple-700">24/7</div>
                          <div className="text-[10px] text-slate-500 font-medium">Continuous Processing</div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 text-center shadow-2xs">
                          <div className="text-lg sm:text-xl font-extrabold text-slate-900">70%</div>
                          <div className="text-[10px] text-slate-500 font-medium">Faster Lead Follow-up</div>
                        </div>
                      </div>

                      <button
                        onClick={() => onNavigate('/services/ai-automation')}
                        className="w-full bg-purple-700 hover:bg-purple-800 text-white text-xs font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Explore AI Automations</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'pods' && (
                  <motion.div
                    key="pods"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center"
                  >
                    <div className="lg:col-span-7 space-y-3.5">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 text-xs font-bold">
                        <Users className="w-3.5 h-3.5" />
                        <span>VETTED SENIOR TALENT & DIRECT COLLABORATION</span>
                      </div>
                      <h3 className="text-base sm:text-xl font-bold text-slate-900 font-heading">
                        Integrate Senior Developers with Zero Hiring Friction
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Onboard vetted React, Node, Python, and Mobile engineers into your team. Daily timezone overlap, direct Slack/Jira communication, and a risk-free onboarding period.
                      </p>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 text-[11px] sm:text-xs">
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Experience</span>
                          <span className="font-semibold text-slate-800">4-8+ Years Senior</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Alignment</span>
                          <span className="font-semibold text-slate-800">Daily Overlap</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 col-span-2 sm:col-span-1">
                          <span className="text-slate-400 block text-[10px] uppercase font-bold">Trial</span>
                          <span className="font-semibold text-slate-800">Risk-Free Evaluation</span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200/80 flex flex-col justify-between gap-3 sm:gap-4">
                      <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
                        <span className="text-xs font-bold text-slate-700">Engagement Framework</span>
                        <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-bold">Flexible Scale</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 text-center shadow-2xs">
                          <div className="text-lg sm:text-xl font-extrabold text-slate-900">4 - 5 hrs</div>
                          <div className="text-[10px] text-slate-500 font-medium">Daily Global Overlap</div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 text-center shadow-2xs">
                          <div className="text-lg sm:text-xl font-extrabold text-blue-600">48 hrs</div>
                          <div className="text-[10px] text-slate-500 font-medium">Rapid Deployment</div>
                        </div>
                      </div>

                      <button
                        onClick={() => onNavigate('/dedicated-developers')}
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>View Dedicated Pods</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
