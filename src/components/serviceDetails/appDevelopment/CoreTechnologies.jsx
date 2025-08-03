import CapabilityCard from "./CapabilityCard";

const capabilities = [
  {
    icon: "mobile",
    title: "Cross-Platform Frameworks",
    stack: ["Flutter", "React Native", "Ionic", "Expo", "Cordova"],
  },
  {
    icon: "ios",
    title: "iOS Native Development",
    stack: ["Swift", "SwiftUI", "Objective-C", "Xcode", "Core Data"],
  },
  {
    icon: "android",
    title: "Android Native Development",
    stack: ["Kotlin", "Java", "Jetpack Compose", "Room DB", "Android Studio"],
  },
  {
    icon: "backend",
    title: "Mobile App Backend",
    stack: ["Firebase", "Node.js", "Laravel", "Django", "Supabase"],
  },
  {
    icon: "auth",
    title: "Authentication & Security",
    stack: ["Firebase Auth", "OAuth2", "JWT", "Biometrics", "2FA"],
  },
  {
    icon: "notifications",
    title: "Push Notifications",
    stack: ["Firebase Cloud Messaging", "OneSignal", "Expo Push", "APNs"],
  },
  {
    icon: "realtime",
    title: "Real-Time Features",
    stack: ["Socket.IO", "WebSockets", "PubNub", "Pusher", "Supabase Realtime"],
  },
  {
    icon: "testing",
    title: "App Testing & CI/CD",
    stack: ["JUnit", "XCTest", "Detox", "Bitrise", "GitHub Actions"],
  },
];

const CoreTechnologies = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center text-textPrimary mb-4">
        Mobile App Development Stack
      </h2>
      <p className="text-center text-textSecondary max-w-2xl mx-auto mb-12">
        We utilize industry-leading technologies to craft responsive, scalable,
        and secure mobile apps for iOS, Android, and cross-platform solutions.
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
