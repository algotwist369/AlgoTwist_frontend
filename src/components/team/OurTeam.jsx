import React from 'react';
import teamData from '../../data/teamData.json';

const OurTeam = () => {
  return (
    <section className="py-36 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-blue-700">{teamData.title}</h2>
        <p className="text-lg text-gray-600 mb-12">{teamData.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamData.members.map((member, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform hover:scale-105">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-blue-200 flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                  onError={e => { e.target.src = '/assets/images/fav-icon.png'; }}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-2">{member.role}</p>
              <p className="text-gray-500 text-sm mb-3">{member.bio}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-sm font-semibold flex items-center gap-1"
              >
                <svg width="18" height="18" fill="currentColor" className="inline-block"><path d="M16 16h-3v-4c0-1-.5-2-2-2s-2 1-2 2v4H6V6h3v1c.5-.7 1.5-1 2.5-1 2 0 3.5 1.5 3.5 4v6zM4 5a1 1 0 110-2 1 1 0 010 2zm1 11H3V6h2v10z"/></svg>
                LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;