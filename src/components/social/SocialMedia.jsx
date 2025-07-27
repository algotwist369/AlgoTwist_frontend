import React, { useEffect } from "react";

const SocialMedia = () => {
  useEffect(() => {
    // Load Twitter widgets after component mounts
    const twitterScript = document.createElement("script");
    twitterScript.src = "https://platform.twitter.com/widgets.js";
    twitterScript.async = true;
    twitterScript.charset = "utf-8";
    document.body.appendChild(twitterScript);
  }, []);

  return (
    <section className="py-20 bg-backgroundPrimary text-textPrimary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Join our social media community
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center ">
          {/* Instagram */}
          <div className="w-full max-w-xs shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
            <h3 className="text-center font-semibold text-lg mb-3">
              Instagram
            </h3>
            <iframe
              src="https://www.instagram.com/p/Cwz7Qw6M8kF/embed"
              width="100%"
              height="440"
              className="rounded-xl border border-gray-300"
              allowtransparency="true"
              title="Instagram Post"
            ></iframe>
          </div>

          {/* Twitter (X) */}
          <div className="w-full max-w-xs shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
            <h3 className="text-center font-semibold text-lg mb-3">
              Twitter (X)
            </h3>
            <blockquote className="twitter-tweet" data-theme="light">
              <a href="https://twitter.com/jack/status/20">Loading tweet...</a>
            </blockquote>
          </div>

          {/* Facebook */}
          <div className="w-full max-w-xs shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
            <h3 className="text-center font-semibold text-lg mb-3">Facebook</h3>
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F20531316728%2Fposts%2F10154009990506729%2F&show_text=true&width=320"
              width="100%"
              height="440"
              className="rounded-xl border border-gray-300"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen={true}
              title="Facebook Post"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
