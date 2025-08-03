import CapabilityCard from "./CapabilityCard";

const capabilities = [
  {
    icon: "frontend",
    title: "Frontend Tooling",
    stack: ["React 19", "Next.js", "Angular", "Tailwind CSS","etc"],
  },
  {
    icon: "backend",
    title: "Backend Systems",
    stack: ["Express", "Django", "Laravel", "PHP","ASP.NET"],
  },
  {
    icon: "database",
    title: "Data Layers",
    stack: ["MongoDB","PostgreSQL", "Firebase", "Hasura", "Oracle "],
  },
  {
    icon: "devops",
    title: "DevOps & Infra",
    stack: ["Docker", "Vercel", "Railway", "GitHub Actions","AWS"],
  },
  {
    icon: "realtime",
    title: "Live & Real-Time",
    stack: ["WebRTC", "Ably", "LiveKit", "Socket.IO"],
  },
  {
    icon: "state",
    title: "State Management",
    stack: ["Redux Toolkit", "Zustand", "Jotai", "React Query"],
  },
  {
    icon: "media",
    title: "Media & Interaction",
    stack: ["Lottie", "GSAP", "Framer Motion", "Shaka Player"],
  },
  {
    icon: "ai",
    title: "AI & Enhancements",
    stack: ["OpenAI", "LangChain", "Replicate", "Hugging Face"],
  },
];

const CoreTechnologies = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center text-textPrimary mb-4">
        Our Core Capabilities
      </h2>
      <p className="text-center text-textSecondary max-w-2xl mx-auto mb-12">
        We leverage a modern and efficient tech stack tailored for
        high-performance, scalable, and interactive applications across web and
        hybrid platforms.
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
