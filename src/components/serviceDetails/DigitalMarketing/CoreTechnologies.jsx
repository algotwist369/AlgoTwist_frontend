import CapabilityCard from "./CapabilityCard";

const capabilities = [
  {
    icon: "seo",
    title: "SEO & SEM",
    stack: [
      "Google Search Console",
      "Ahrefs",
      "SEMrush",
      "Yoast SEO",
      "Google Ads",
    ],
  },
  {
    icon: "content",
    title: "Content Marketing",
    stack: ["WordPress", "Canva", "Grammarly", "ChatGPT", "Buffer"],
  },
  {
    icon: "social",
    title: "Social Media Management",
    stack: [
      "Meta Business Suite",
      "Hootsuite",
      "Instagram",
      "LinkedIn",
      "X (Twitter)",
    ],
  },
  {
    icon: "email",
    title: "Email Marketing",
    stack: ["Mailchimp", "Klaviyo", "Sendinblue", "ConvertKit"],
  },
  {
    icon: "analytics",
    title: "Analytics & Tracking",
    stack: ["Google Analytics 4", "Hotjar", "Mixpanel", "Tag Manager"],
  },
  {
    icon: "ads",
    title: "Advertising Platforms",
    stack: ["Meta Ads", "Google Ads", "LinkedIn Ads", "YouTube Ads"],
  },
  {
    icon: "automation",
    title: "Marketing Automation",
    stack: ["Zapier", "HubSpot", "Marketo", "Pabbly"],
  },
  {
    icon: "crm",
    title: "CRM & Engagement",
    stack: ["HubSpot", "Zoho CRM", "Salesforce", "Intercom"],
  },
];

const CoreTechnologies = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center text-textPrimary mb-4">
        Digital Marketing Capabilities
      </h2>
      <p className="text-center text-textSecondary max-w-2xl mx-auto mb-12">
        Our digital marketing toolkit blends powerful platforms, content
        strategies, automation, and analytics to help businesses grow their
        online presence and drive measurable results.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {capabilities.map((cap, index) => (
          <CapabilityCard key={index} data={cap} />
        ))}
      </div>
    </section>
  );
};

export default CoreTechnologies;
