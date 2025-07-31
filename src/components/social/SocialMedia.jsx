import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";

const socialLinks = [
  {
    name: "Instagram",
    icon: <FaInstagram />,
    embedUrl: "https://www.instagram.com/algotwist_/embed",
    profileUrl: "https://www.instagram.com/algotwist_",
    type: "iframe",
    color: "bg-pink-500 ",
  },
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    embedUrl:
      "https://widgets.sociablekit.com/facebook-profile/iframe/25582857",
    profileUrl: "https://www.facebook.com/profile.php?id=61578878790687",
    type: "iframe",
    color: "bg-blue-600 ",
  },
  {
    name: "Twitter (X)",
    icon: <FaXTwitter />,
    embedUrl: "https://widgets.sociablekit.com/twitter-feed/iframe/25582858",
    profileUrl: "https://x.com/algotwist_",
    type: "iframe",
    color: "bg-backgroundPrimary ",
  },
  // {
  //   name: "Pinterest",
  //   icon: <FaPinterestP />,
  //   embedUrl: "https://www.pinterest.com/algotwist/",
  //   profileUrl: "https://www.pinterest.com/algotwist/",
  //   type: "pinterest",
  //   color: "bg-red-500  ",
  // },
];

const SocialMedia = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-24 bg-backgroundPrimary text-textPrimary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16">
          Let's Social
        </h2>

        {/* Carousel container */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-14">
              {socialLinks.map((platform, index) => (
                <div
                  key={index}
                  className="relative group min-w-[320px] max-w-[380px] flex-shrink-0 rounded-2xl p-5 shadow-lg hover:scale-105 transition duration-300 bg-backgroundSecondary backdrop-blur border border-borderColor"
                >
                  {/* Platform Header */}
                  <div className="flex items-center gap-3 mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                    <div
                      className={`text-2xl p-1 rounded-full ${platform.color}`}
                    >
                      {platform.icon}
                    </div>
                    {platform.name}
                  </div>

                  {/* Embed Content */}
                  {platform.type === "iframe" ? (
                    <iframe
                      src={platform.embedUrl}
                      width="100%"
                      height="360"
                      className="rounded-xl bg-textPrimary"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                      title={`${platform.name} Embed`}
                    ></iframe>
                  ) : platform.type === "pinterest" ? (
                    <a
                      data-pin-do="embedUser"
                      href={platform.embedUrl}
                      className="block text-center text-blue-500 underline"
                    >
                      View Pinterest Profile
                    </a>
                  ) : null}

                  {/* Hover Button */}
                  <div
                    className={`absolute bottom-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300`}
                  >
                    <a
                      href={platform.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-textPrimary px-10 py-2 rounded-full font-medium shadow-lg ${platform.color}`}
                    >
                      Follow
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-backgroundSecondary rounded-full"
          >
            <MdSkipPrevious className="text-2xl" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2  z-10 p-3 bg-backgroundSecondary rounded-full"
          >
            <MdSkipNext className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
