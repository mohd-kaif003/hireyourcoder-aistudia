import React, { useState } from 'react';
import { developerRolesData, hiringModelsData } from '../data/developersData';
import { 
  ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Users, Clock, 
  Lock, MessageSquare, Send, Check, Code2, Award, FileCode 
} from 'lucide-react';
import { saveNewLead } from '../utils/leadsStorage';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface DedicatedDevelopersPageProps {
  onOpenConsultation: () => void;
  onNavigate: (path: string) => void;
}

export const DedicatedDevelopersPage: React.FC<DedicatedDevelopersPageProps> = ({
  onOpenConsultation,
  onNavigate
}) => {
  const [selectedRole, setSelectedRole] = useState('Senior Full-Stack Developer');
  const [selectedModel, setSelectedModel] = useState('Dedicated Full-Time');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    developersCount: '1 Developer',
    roleNeeded: 'Senior Full-Stack Developer',
    timeline: 'Immediate (Within 1-2 Weeks)',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setIsSubmitting(true);
    try {
      saveNewLead({
        name: formData.name,
        company: formData.company || undefined,
        email: formData.email,
        phone: formData.phone,
        country: 'Global / Inbound',
        service: 'Dedicated Developers',
        projectType: `Hire ${formData.developersCount} - ${formData.roleNeeded} (${selectedModel})`,
        budget: 'Dedicated Pod / Augmentation',
        timeline: formData.timeline,
        message: `Hiring Request for ${formData.developersCount} ${formData.roleNeeded}. Model: ${selectedModel}. Additional notes: ${formData.notes}`,
        source: 'Dedicated Developers Page',
        utm: {
          utm_source: 'dedicated_developers_landing',
          landing_page: '/dedicated-developers'
        }
      });
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch (err) {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs 
            items={[
              { label: 'Talent & Augmentation', path: '/services' },
              { label: 'Dedicated Developers' }
            ]} 
            onNavigate={onNavigate} 
          />
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Pre-Vetted Senior Remote Engineering Talent</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 font-heading tracking-tight leading-tight">
            Hire Dedicated Developers for Your Product
          </h1>

          <p className="mt-4 text-base sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Scale your engineering team with pre-vetted senior developers on flexible full-time, part-time, or sprint engagements. 100% time-zone overlap and zero recruiting friction.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-md shadow-blue-500/25 flex items-center gap-2"
            >
              <span>Schedule Developer Matching Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/919568497688?text=Hello%20HireYourCoder,%20I%20am%20looking%20to%20hire%20dedicated%20developers."
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 font-semibold px-5 py-3.5 rounded-xl text-sm transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>

          {/* Key Value Highlights */}
          <div className="mt-10 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-slate-600">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>1-Week Risk-Free Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>4-5 Hrs Guaranteed Daily Overlap</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-emerald-600" />
              <span>Strict NDA & Direct Git Access</span>
            </div>
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-emerald-600" />
              <span>Senior Architectural Peer Reviews</span>
            </div>
          </div>
        </div>

        {/* 10 Developer Categories Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 font-heading">
              Engineering Disciplines Available for Immediate Deployment
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Select a specialized developer profile to augment your in-house product roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developerRolesData.map((role) => (
              <div
                key={role.id}
                className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/90 hover:bg-white hover:shadow-xl hover:border-blue-300 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold font-mono text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
                      {role.experience}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {role.pricingMonthly}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-heading">
                    {role.role}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {role.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-200/60 space-y-1.5">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Key proficiencies:</div>
                    {role.responsibilities.slice(0, 3).map((resp, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills Pills */}
                  <div className="mt-4 flex flex-wrap gap-1">
                    {role.skills.map((skill) => (
                      <span key={skill} className="px-2 py-0.5 bg-white border border-slate-200 rounded text-[11px] font-mono text-slate-600">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setFormData({ ...formData, roleNeeded: role.role });
                      const el = document.getElementById('hiring-form-section');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    <span>Hire {role.role.split(' ')[0]}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                    Available
                  </span>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* 4 Flexible Hiring Models */}
        <div className="mb-20 bg-slate-900 text-white rounded-3xl p-8 sm:p-12">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading">
              Flexible Remote Engagement Models
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Whether you need one dedicated full-time specialist or a full cross-functional scrum team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiringModelsData.map((model) => (
              <div
                key={model.name}
                onClick={() => setSelectedModel(model.name)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  selectedModel === model.name
                    ? 'bg-blue-600/30 border-blue-500 shadow-lg'
                    : 'bg-slate-800/60 border-slate-700 hover:bg-slate-800'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-blue-300 font-bold">
                      {model.hours}
                    </span>
                    {selectedModel === model.name && (
                      <div className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center">
                        <Check className="w-3 h-3" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white font-heading">{model.name}</h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">{model.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700 text-xs text-slate-400 font-medium">
                  Ideal for: {model.idealFor}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk-Free Trial & Vetting Guarantee Box */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-blue-50/70 border border-blue-200">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-heading">1-Week Risk-Free Trial</h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Work with your assigned developer for 5 business days. If you are not completely satisfied with their technical capability or communication, pay zero.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-3">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-heading">Rigorous 4-Stage Vetting</h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Only the top 3% of applicants pass our automated live algorithmic tests, system design reviews, and fluent English communication assessments.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-purple-50/70 border border-purple-200">
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center mb-3">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 font-heading">100% IP & Direct Access</h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Developers push directly to your private GitHub/GitLab repositories and join your Slack workspace with signed enterprise NDAs.
            </p>
          </div>
        </div>

        {/* Hiring Request Form Section */}
        <div id="hiring-form-section" className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
              Request Candidate Profiles & Start Your 1-Week Trial
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Tell us about your required tech stack and team structure. We will send matching senior resumes within 24 hours.
            </p>
          </div>

          {isSuccess ? (
            <div className="max-w-lg mx-auto p-8 bg-white rounded-2xl text-center space-y-3 border border-emerald-200 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Developer Request Logged</h3>
              <p className="text-xs text-slate-600">
                Our talent director will curate 2-3 matched senior engineer profiles and dispatch them to {formData.email}.
              </p>
              <a
                href={`https://wa.me/919568497688?text=Hello%20HireYourCoder,%20I%20just%20submitted%20a%20developer%20hiring%20request%20for%20${encodeURIComponent(formData.roleNeeded)}.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Fast-Track on WhatsApp</span>
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Miller"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="david@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000 / +91..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Company / Organization</label>
                  <input
                    type="text"
                    placeholder="e.g. CloudScale Inc"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Primary Role Needed</label>
                  <select
                    value={formData.roleNeeded}
                    onChange={(e) => setFormData({ ...formData, roleNeeded: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    {developerRolesData.map(r => (
                      <option key={r.role} value={r.role}>{r.role}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Headcount & Engagement Model</label>
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="Dedicated Full-Time (160 hrs/mo)">Dedicated Full-Time (160 hrs/mo)</option>
                    <option value="Dedicated Part-Time (80 hrs/mo)">Dedicated Part-Time (80 hrs/mo)</option>
                    <option value="Sprint / Project Team Pod">Sprint / Project Team Pod</option>
                    <option value="Hourly Flex Bucket">Hourly Flex Bucket</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Specific Stack Requirements or Project Context</label>
                <textarea
                  rows={3}
                  placeholder="e.g. Must have strong Next.js App Router and PostgreSQL experience. Daily standup at 2 PM GMT..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-sm transition-colors shadow-md shadow-blue-500/25 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Submitting Request...' : 'Request Matched Resumes & Activate Trial'}</span>
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
};
