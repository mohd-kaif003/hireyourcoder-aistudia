export interface SEOConfig {
  title: string;
  description: string;
  canonicalPath?: string;
  path?: string;
  schema?: Record<string, any>;
}

export function updatePageSEO(config: SEOConfig) {
  // Update Title
  document.title = config.title;

  // Update Meta Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', config.description);

  // Update OpenGraph Title & Description
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', config.title);

  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', config.description);

  // Update Twitter Title & Description
  let twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) twitterTitle.setAttribute('content', config.title);

  let twitterDesc = document.querySelector('meta[name="twitter:description"]');
  if (twitterDesc) twitterDesc.setAttribute('content', config.description);

  // Update Dynamic JSON-LD schema
  if (config.schema) {
    let schemaScript = document.getElementById('dynamic-page-schema');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'dynamic-page-schema';
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(config.schema);
  }
}

export const updateSEO = updatePageSEO;

