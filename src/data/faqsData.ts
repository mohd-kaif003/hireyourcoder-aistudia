export interface FAQCategoryGroup {
  category: string;
  items: {
    question: string;
    answer: string;
  }[];
}

export const faqsData: FAQCategoryGroup[] = [
  {
    category: 'Web Development',
    items: [
      {
        question: 'How are website development projects scoped and delivered?',
        answer: 'Website and web application projects are scoped based on your specific functional specifications, design fidelity, third-party integrations, and architectural requirements. We provide transparent, itemized milestone proposals with clear sprint deliverables and guaranteed timelines before starting any work.'
      },
      {
        question: 'How long does a website take to build and launch?',
        answer: 'Standard bespoke marketing websites typically take 3 to 5 weeks from initial discovery and Figma prototyping to final QA and DNS deployment. Complex web applications with custom APIs or member portals typically span 6 to 10 weeks delivered in agile 2-week sprints.'
      },
      {
        question: 'Do you use pre-made templates or write custom code?',
        answer: 'We build 100% custom, bespoke code tailored to your brand identity, business workflows, and conversion goals using modern technologies like Next.js, React, Tailwind CSS, and headless architectures. We do not use bloated pre-purchased generic themes that slow down your website.'
      },
      {
        question: 'Will our internal team be able to update content easily?',
        answer: 'Yes. We connect modern visual content management systems (such as Sanity, Strapi, or Headless WordPress) so your marketing team can publish new blog posts, change landing page copy, upload team photos, and update pricing without needing a developer.'
      }
    ]
  },
  {
    category: 'Mobile Apps',
    items: [
      {
        question: 'Do you build native or cross-platform mobile apps?',
        answer: 'We build cross-platform mobile applications using React Native and Flutter, which allows your brand to launch on both Apple iOS (App Store) and Google Android (Play Store) from a single unified codebase. This saves up to 40% in engineering costs while delivering authentic native 60fps performance.'
      },
      {
        question: 'Do you handle the App Store and Google Play approval process?',
        answer: 'Yes. We manage the entire submission lifecycle, including app listing graphics, privacy policy declarations, test flight distribution, and responses to Apple and Google store review requirements until your app is live for download.'
      }
    ]
  },
  {
    category: 'AI Automation',
    items: [
      {
        question: 'Can you automate our specific business processes and CRM?',
        answer: 'Yes. We build custom AI workflows that connect your inbound forms, WhatsApp Business API, and emails directly to your CRM (HubSpot, Salesforce, Zoho, or custom databases). Our automations can parse documents, qualify leads based on budget criteria, and trigger follow-up sequences automatically.'
      },
      {
        question: 'Can your AI chatbots answer customer questions using private company data?',
        answer: 'Absolutely. We build Retrieval-Augmented Generation (RAG) vector pipelines connected to your internal SOPs, product catalog, and knowledge base. The AI strictly answers queries using your approved documents with zero hallucination or exposure of trade secrets.'
      }
    ]
  },
  {
    category: 'Digital Marketing & SEO',
    items: [
      {
        question: 'Do you provide SEO after web development is completed?',
        answer: 'Every website we engineer includes technical SEO by default (semantic HTML5, Schema.org structured data, XML sitemaps, robots.txt, and 90+ Core Web Vitals). We also offer monthly ongoing SEO retainers covering high-intent content strategy, competitor analysis, and high-authority link building.'
      },
      {
        question: 'Do you promise guaranteed #1 rankings on Google?',
        answer: 'No reputable international agency promises guaranteed #1 search rankings, because Google’s algorithms continuously evolve. However, our rigorous white-hat technical foundation, schema markup, and commercial keyword clusters consistently drive substantial organic growth and qualified inbound leads for our clients.'
      }
    ]
  },
  {
    category: 'Performance Marketing',
    items: [
      {
        question: 'Can you manage both Google Ads and Meta Ads campaigns?',
        answer: 'Yes. Our performance team manages end-to-end paid acquisition: audience research, ad creative production, ad copywriting, dedicated landing page engineering, and bid management across Google Search, Performance Max, Meta (Instagram/Facebook), and LinkedIn.'
      },
      {
        question: 'How do you track ad conversions accurately with ad-blockers and iOS privacy changes?',
        answer: 'We implement server-side tracking using Meta Conversions API (CAPI) and server-side Google Tag Manager (GTM). This sends purchase and lead events directly from your server to the ad platform, bypassing browser ad-blockers and restoring up to 30% lost conversion attribution.'
      }
    ]
  },
  {
    category: 'Dedicated Developers',
    items: [
      {
        question: 'Do you provide dedicated developers on a monthly basis?',
        answer: 'Yes. You can hire dedicated full-time (160 hrs/month) or part-time (80 hrs/month) senior developers specializing in React, Next.js, Node.js, Laravel, Python, React Native, and AI engineering. They integrate seamlessly into your Slack, GitHub, and daily standups.'
      },
      {
        question: 'What is your trial period and replacement guarantee?',
        answer: 'We offer a 1-week risk-free trial period. If you are not completely satisfied with the engineer’s velocity, communication, or code quality during the first week, we will replace the developer immediately or cancel the engagement at zero cost to you.'
      }
    ]
  },
  {
    category: 'API Integration',
    items: [
      {
        question: 'Can you integrate payment gateways and WhatsApp APIs?',
        answer: 'Yes. We specialize in robust payment integrations (Stripe, Razorpay, LemonSqueezy, PayPal) with automated invoice generation and official WhatsApp Business Cloud API integrations for transactional order notifications, OTPs, and lead alerts.'
      },
      {
        question: 'Can you connect legacy ERP software to our modern web portal?',
        answer: 'Yes. We architect custom RESTful middleware and webhook workers that bridge modern web applications with legacy ERP systems (SAP, Tally, Zoho, QuickBooks) to keep inventory and financial ledgers synchronized in real-time.'
      }
    ]
  },
  {
    category: 'Engagement & Collaboration',
    items: [
      {
        question: 'What are your engagement terms and milestones?',
        answer: 'For fixed-scope projects, we typically operate on a milestone structure: initial discovery & architecture deposit, frontend and API review milestone, and final staging verification before production deployment. For dedicated developers, engagement operates on flexible monthly sprint retainers.'
      },
      {
        question: 'Do you charge ongoing maintenance fees after launch?',
        answer: 'We include 30 days of comprehensive post-launch warranty and bug-fix support with every project. After that, we offer flexible ongoing SLA maintenance plans covering cloud monitoring, security patches, performance audits, and continuous sprint enhancements.'
      }
    ]
  },
  {
    category: 'International Projects',
    items: [
      {
        question: 'Can you work with international clients across different time zones?',
        answer: 'Yes! Over 50% of our client portfolio is located in the US, UK, UAE, Canada, Australia, and Singapore. Our engineering teams provide 4 to 5 hours of guaranteed daily working overlap with your local business hours for standups and Slack collaboration.'
      },
      {
        question: 'How do international clients make payments securely?',
        answer: 'International clients can pay via Stripe, direct international bank wire transfer (SWIFT/ACH), or Wise. All agreements are accompanied by comprehensive mutual Non-Disclosure Agreements (NDAs) and intellectual property assignment contracts.'
      }
    ]
  }
];
