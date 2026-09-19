import { LeadSubmission } from '../types';

const LEADS_STORAGE_KEY = 'hireyourcoder_leads_db';

export function getStoredLeads(): LeadSubmission[] {
  try {
    const raw = localStorage.getItem(LEADS_STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed to parse leads from storage', e);
  }

  // Initial realistic sample leads to populate the Lead Management Hub
  const seedLeads: LeadSubmission[] = [
    {
      id: 'lead-101',
      createdAt: '2026-09-17T14:22:00.000Z',
      name: 'Alexander Wright',
      company: 'Wright & Hayes Partners',
      email: 'a.wright@whpartners.co.uk',
      phone: '+44 20 7946 0912',
      country: 'United Kingdom',
      service: 'Web Application Development',
      projectType: 'Client Portal & Financial Dashboard',
      budget: '$5,000 - $10,000',
      timeline: '1-2 Months',
      message: 'Looking to build a client portal with Stripe recurring invoices and role-based document access for our advisory clients.',
      source: 'Free Project Estimate Tool',
      status: 'Qualified',
      notes: 'Initial requirements match our Next.js + PostgreSQL template. Scheduled Zoom discovery call for Thursday 3 PM BST.',
      utm: {
        utm_source: 'google',
        utm_medium: 'cpc',
        utm_campaign: 'uk_web_app_dev',
        landing_page: '/free-project-estimate'
      }
    },
    {
      id: 'lead-102',
      createdAt: '2026-09-18T09:15:00.000Z',
      name: 'Rajesh Agarwal',
      company: 'Heritage Brassware Exporters',
      email: 'rajesh@heritagebrass.in',
      phone: '+91 98370 12345',
      country: 'India',
      service: 'B2B Export Catalog & AI Automation',
      projectType: 'Custom Export Catalog with Container CBM Calculator',
      budget: '₹2,50,000 - ₹5,00,000',
      timeline: 'Within 1 Month',
      message: 'Need a digital export catalog for our brass handicrafts to send European buyers during the upcoming Autumn trade season.',
      source: 'Moradabad Location Page',
      status: 'Contacted',
      notes: 'Spoke on WhatsApp. Sending product catalog demo link and quotation structure.',
      utm: {
        utm_source: 'organic',
        utm_medium: 'seo',
        utm_campaign: 'moradabad_export_web',
        landing_page: '/locations/moradabad'
      }
    },
    {
      id: 'lead-103',
      createdAt: '2026-09-18T18:40:00.000Z',
      name: 'Elena Rostova',
      company: 'Zenith Logistics LLC',
      email: 'elena@zenithlogistics.ae',
      phone: '+971 4 391 0000',
      country: 'United Arab Emirates',
      service: 'Dedicated Developers',
      projectType: '2 Senior Full-Stack Next.js / Node.js Engineers',
      budget: '$4,000 - $6,000 / month',
      timeline: 'Immediate (Within 1-2 weeks)',
      message: 'Need 2 senior engineers to integrate into our Dubai logistics tracking platform sprint. Must have strong TypeScript and PostgreSQL skills.',
      source: 'Dedicated Developers Page',
      status: 'New',
      notes: 'Candidate profiles for senior Next.js developers ready to dispatch.',
      utm: {
        utm_source: 'linkedin',
        utm_medium: 'organic',
        utm_campaign: 'dubai_developers',
        landing_page: '/dedicated-developers'
      }
    }
  ];

  localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(seedLeads));
  return seedLeads;
}

export function saveNewLead(lead: Omit<LeadSubmission, 'id' | 'createdAt' | 'status'>): LeadSubmission {
  const existing = getStoredLeads();
  const newRecord: LeadSubmission = {
    ...lead,
    id: 'lead-' + Date.now(),
    createdAt: new Date().toISOString(),
    status: 'New',
    notes: 'Inbound submission received. Pending review.'
  };

  const updated = [newRecord, ...existing];
  try {
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to persist lead to storage', e);
  }

  // Trigger custom event so any open CRM dashboards or badges update immediately
  window.dispatchEvent(new Event('lead_database_updated'));
  return newRecord;
}

export function updateLeadStatus(id: string, status: LeadSubmission['status'], notes?: string): void {
  const existing = getStoredLeads();
  const updated = existing.map(l => {
    if (l.id === id) {
      return {
        ...l,
        status,
        ...(notes !== undefined ? { notes } : {})
      };
    }
    return l;
  });

  try {
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('lead_database_updated'));
  } catch (e) {
    console.error('Failed to update lead status', e);
  }
}
