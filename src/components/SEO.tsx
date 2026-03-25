import React, { useEffect } from "react";

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SeoProps> = ({ 
  title, 
  description, 
  keywords, 
  image = "https://global-network-platform.com/og-image.jpg", 
  url = window.location.href,
  type = "website"
}) => {
  useEffect(() => {
    // Load SEO settings from simulated CMS storage (localStorage)
    const storedSettings = localStorage.getItem("platform_seo_settings");
    const settings = storedSettings ? JSON.parse(storedSettings) : {};
    
    // Fallback logic: Use prop -> use CMS setting -> use default
    const siteTitle = settings.globalTitle || "E-SPOT | Global Network Platform";
    const finalTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const finalDescription = description || settings.globalDescription || "The premier global ecosystem for entrepreneurs, professionals, and visionaries.";
    const finalKeywords = keywords || settings.globalKeywords || "global network, entrepreneurship, venture capital, professional growth, E-SPOT";

    // Update Document Title
    document.title = finalTitle;

    // Update Meta Tags
    const updateMetaTag = (name: string, content: string, property: boolean = false) => {
      let tag = document.querySelector(property ? `meta[property="${name}"]` : `meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        if (property) tag.setAttribute("property", name);
        else tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    updateMetaTag("description", finalDescription);
    updateMetaTag("keywords", finalKeywords);
    
    // Open Graph
    updateMetaTag("og:title", finalTitle, true);
    updateMetaTag("og:description", finalDescription, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:type", type, true);

    // Twitter
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", finalTitle);
    updateMetaTag("twitter:description", finalDescription);
    updateMetaTag("twitter:image", image);

    // Verification Tags (from CMS)
    if (settings.googleVerification) updateMetaTag("google-site-verification", settings.googleVerification);
    if (settings.bingVerification) updateMetaTag("msvalidate.01", settings.bingVerification);

  }, [title, description, keywords, image, url, type]);

  return null; // This component doesn't render anything
};

export default SEO;
