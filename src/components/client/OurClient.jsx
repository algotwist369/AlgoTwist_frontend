import React from "react";

const logos = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHKEIyz_zzsKW6fJQ5lpla5IBTsJRWj9exNA&s",
  "https://static.wixstatic.com/media/7a486b_bf09a3c5beaa436ba832c629837bf1a0~mv2.png/v1/fit/w_2500,h_1330,al_c/7a486b_bf09a3c5beaa436ba832c629837bf1a0~mv2.png",
  "https://apnaparcha.com/opengraph-image.png?abcf978297f36095",
  "https://savemax.in/staticfiles/upload/builderlogo/OMAXE_srst098.png",
  "https://eldecogroup.com/assests/uploads/project/logo/15822781501407518180.png",
  "https://www.shootic.com/images/shootic-logo.png",
  "https://janpadnewstimes.com/logo.png",
];

const getAltFromUrl = (url) => {
  const name = url
    .split("/")
    .pop()
    .replace(/[-_]/g, " ")
    .replace(/\..+$/, "")
    .replace(/\b\w/g, (l) => l.toUpperCase());
  return name;
};

// Split logos into two rows (roughly half each)
const half = Math.ceil(logos.length / 2);
const row1 = logos.slice(0, half);
const row2 = logos.slice(half);

const OurClient = () => {
  return (
    <section className="relative bg-[#121214] py-20 px-4 sm:px-6 md:px-16 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-primary/10 rounded-full blur-2xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-accent/10 rounded-full blur-2xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl text-textPrimary font-bold text-center mb-6 leading-tight">
          Trusted by Leading Brands
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          We’re proud to have worked with amazing clients who trust us to build
          modern, reliable, and impactful digital solutions.
        </p>

        {/* Two scrolling rows container */}
        <div className="space-y-8">
          {[row1, row2].map((row, idx) => (
            <div
              key={idx}
              className="overflow-hidden whitespace-nowrap"
              style={{ animationDuration: `${20 + idx * 5}s` }}
            >
              <div
                className={`inline-flex animate-marquee-${
                  idx === 0 ? "left" : "right"
                }`}
              >
                {[...row, ...row].map((logo, i) => (
                  <div
                    key={i}
                    className="inline-block mx-8 shadow-sm border border-transparent hover:border-primary/20 transition"
                  >
                    <img
                      src={logo}
                      alt={getAltFromUrl(logo)}
                      loading="lazy"
                      className="h-16 w-32 object-contain rounded-md max-w-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for marquee animation */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left linear infinite;
          animation-duration: 20s;
        }
        .animate-marquee-right {
          animation: marquee-right linear infinite;
          animation-duration: 25s;
        }
      `}</style>
    </section>
  );
};

export default OurClient;
