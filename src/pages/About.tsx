import React from 'react';
import { BookPageLayout } from '../components/BookPageLayout';

export const About = () => {
  const skills = [
    { category: "Technical", items: ["Adobe Premiere Pro", "After Effects", "Final Cut Pro", "DaVinci Resolve", "Photoshop"] },
    { category: "Creative", items: ["Storytelling", "Cinematography", "Color Grading", "Sound Design", "Motion Graphics"] },
    { category: "Professional", items: ["Project Management", "Client Relations", "Creative Direction", "Team Leadership", "Brand Strategy"] }
  ];

  const experiences: Experience[] = [
    {
      role: "Senior Videographer",
      company: "Lord's Nta10ment",
      period: "2008 – Present",
      description: [
        "Lead full-cycle video production — from concept development to final edit.",
        "Directed branded content, documentaries, and commercials for diverse clients.",
        "Collaborated with clients to shape visual storytelling that aligns with their goals.",
        "Managed on-set crews and coordinated production logistics.",
        "Oversaw editing, color grading, sound design, and final delivery.",
        "Produced campaigns that increased client engagement and brand visibility.",
        "Mentored junior videographers and editors, promoting creative growth within the team."
      ]
    }
  ];



  const aboutSections = [
    {
      id: 'story',
      title: 'My Story',
      icon: '🎬',
      content: (
        <div className="book-content">
          <div className="glass-book rounded-2xl p-8 mb-8">
            <div className="prose prose-lg text-white/90 leading-relaxed">
              <p className="mb-6">
                Hi, I'm <span className="font-bold text-amber-400">Olumuyiwa David Ogunniyi</span>, 
                a passionate videographer and storyteller who believes that every frame should serve a purpose, 
                every cut should advance the narrative, and every project should leave the audience transformed.
              </p>
              <p className="mb-6">
                My journey into videography wasn't planned—it was discovered. What started as curiosity about 
                how stories come to life on screen became an obsession with crafting visual narratives that 
                resonate on a deeply human level. I've spent years mastering not just the technical craft, 
                but the art of understanding what makes people connect with stories.
              </p>
              <p>
                Today, I specialize in creating cinematic experiences that don't just document events—they 
                capture the essence of moments, the poetry of human emotion, and the power of authentic storytelling. 
                Whether it's a brand looking to connect with their audience or individuals wanting to preserve 
                their most precious memories, I approach every project as a unique story waiting to be told.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'skills',
      title: 'Skills & Expertise',
      icon: '⚡',
      content: (
        <div className="book-content">
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div
                key={skillGroup.category}
                className="glass-book rounded-xl p-6 hover:bg-amber-200/5 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-amber-400 mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-white/80 flex items-center">
                      <span className="text-amber-400 mr-2">▪</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )
    },

    {
      id: 'experience',
      title: 'Professional Journey',
      icon: '📈',
      content: (
          <div className="book-content">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                  <div
                      key={index}
                      className="glass-book rounded-xl p-8 border-l-4 border-amber-400"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                        <p className="text-amber-400 text-lg">{exp.company}</p>
                      </div>
                      <span className="text-amber-200 font-semibold">{exp.period}</span>
                    </div>

                    <ul className="text-white/80 leading-relaxed list-disc list-inside space-y-1">
                      {exp.description.map((point, i) => (
                          <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
              ))}
            </div>
          </div>
      )
    },
    {
    id: 'philosophy',
      title: 'Creative Philosophy',
      icon: '🎭',
      content: (
        <div className="book-content">
          <div className="glass-book rounded-2xl p-8 text-center cinematic-glow">
            <blockquote className="text-xl text-white/90 italic leading-relaxed mb-6">
              "I don't just capture footage—I capture feelings. I don't just edit videos—I weave emotions. 
              Every project is an opportunity to create something that didn't exist before, something that moves 
              people, something that matters. That's the power of visual storytelling, and that's what drives 
              me every single day."
            </blockquote>
            <div className="book-divider" />
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-bold text-amber-400 mb-2">Purpose-Driven</h4>
                <p className="text-sm text-white/70">Every frame serves the story</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">❤️</div>
                <h4 className="font-bold text-amber-400 mb-2">Emotion-First</h4>
                <p className="text-sm text-white/70">Connecting hearts through visuals</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">✨</div>
                <h4 className="font-bold text-amber-400 mb-2">Innovation</h4>
                <p className="text-sm text-white/70">Pushing creative boundaries</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <BookPageLayout
      title="Chapter I: The Storyteller"
      subtitle="Every great story begins with a storyteller who dares to dream"
      sections={aboutSections}
      layout="tabs"
      defaultSection="story"
    />
  );
};
