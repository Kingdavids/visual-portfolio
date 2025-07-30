import React from 'react';
import { BookPageLayout } from '../components/BookPageLayout';
import { ProjectCard } from '../components/ProjectCard';

export const Storytelling = () => {
  const storyProjects = [
    {
      id: 1,
      title: "Essence of Christian Retreat",
      description: "A deeply moving narrative that captures the transformative power of faith and community. This story follows individuals as they embark on a spiritual journey, finding renewal and purpose through connection with their beliefs and each other.",
      mediaUrl: "https://www.youtube.com/embed/f8DQb6smjIM?start=5",
      category: "Spiritual Journey",
      theme: "Faith & Renewal",
      location: "Canada",
      impact: "Inspired over 500 believers to attend retreat programs"
    }
  ];

  const storytellingPrinciples = [
    {
      icon: "🎯",
      title: "Purpose-Driven Narratives",
      description: "Every story begins with intention. I craft narratives that serve a clear purpose, whether it's to inspire, educate, or transform perspectives."
    },
    {
      icon: "❤️",
      title: "Emotional Resonance",
      description: "Great stories touch the heart before they reach the mind. I focus on creating authentic emotional connections that linger long after viewing."
    },
    {
      icon: "🌟",
      title: "Authentic Moments",
      description: "The most powerful stories emerge from genuine human experiences. I specialize in capturing and amplifying these authentic moments."
    },
    {
      icon: "🔄",
      title: "Transformative Journeys",
      description: "Every compelling narrative follows a journey of change. I help clients tell stories that showcase growth, evolution, and transformation."
    }
  ];

  const featuredStories = [
    {
      title: "The Entrepreneur's Journey",
      mediaUrl: "https://www.youtube.com/embed/yJfZfweLxdk&feature=youtu.be",
      description: "A documentary-style piece following a startup founder's path from ideation to success, capturing both struggles and triumphs.",
      impact: "Increased investor interest by 200%",
      category: "Corporate Documentary"
    },
    {
      title: "Love in Motion",
      mediaUrl: "https://www.youtube.com/embed/GwBdM_plxY4",
      description: "A wedding film that transcends traditional coverage, weaving together family histories and personal narratives into a timeless love story.",
      impact: "Featured in wedding publications",
      category: "Personal Narrative"
    },
    {
      title: "House of Mara",
      mediaUrl: "https://rumble.com/embed/v1cnd8d/?pub=4",
      description: "A nonprofit campaign highlighting the abusing of young girls in Africa, Powered by Voice of Martyrs Canada and 100 Huntley Canada.",
      impact: "Raised $1M in donations",
      category: "Social Impact"
    }
  ];

  const storytellingSections = [
    {
      id: 'philosophy',
      title: 'Storytelling Philosophy',
      subtitle: 'The foundation of every great narrative',
      icon: '📖',
      content: (
        <div className="book-content">
          <div className="glass-book rounded-2xl p-8 text-center cinematic-glow mb-8">
            <blockquote className="text-2xl md:text-3xl font-light text-white/90 italic leading-relaxed mb-6">
              "Every frame is a word, every cut is a sentence, and every story is a conversation 
              between the creator and the soul of the audience."
            </blockquote>
            <div className="book-divider" />
            <div className="floating-emojis mt-6">
              📖 ✨ 🎬 📝 🎭
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'principles',
      title: 'Four Pillars of Storytelling',
      subtitle: 'The core elements that make stories unforgettable',
      icon: '🏛️',
      content: (
        <div className="book-content">
          <div className="grid md:grid-cols-2 gap-6">
            {storytellingPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="glass-book rounded-xl p-6 hover:bg-amber-200/5 transition-all duration-300"
              >
                <div className="text-4xl mb-4 text-center">{principle.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">{principle.title}</h3>
                <p className="text-amber-200/80 leading-relaxed text-center">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'projects',
      title: 'Story Projects',
      subtitle: 'Transformative narratives that inspire and connect',
      icon: '🎬',
      content: (
        <div className="book-content">
          <div className="space-y-8">
            {storyProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                mediaUrl={project.mediaUrl}
                category={project.category}
              />
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'featured',
      title: 'Featured Story Projects',
      subtitle: 'Stories that transformed brands and touched hearts',
      icon: '🌟',
      content: (
        <div className="book-content">
          <div className="space-y-8">
            {featuredStories.map((story, index) => (
              <div
                key={story.title}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <ProjectCard
                    title={story.title}
                    description={story.description}
                    mediaUrl={story.mediaUrl}
                    category={story.category}
                  />
                </div>
                
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <span className="inline-block px-4 py-2 bg-amber-400/20 text-amber-400 rounded-full text-sm font-semibold mb-4">
                      {story.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-4">{story.title}</h3>
                    <p className="text-amber-200/80 leading-relaxed mb-6">{story.description}</p>
                  </div>
                  
                  <div className="glass-book rounded-xl p-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl">📈</span>
                      <h4 className="text-lg font-bold text-amber-400">Impact & Results</h4>
                    </div>
                    <p className="text-white font-semibold">{story.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'process',
      title: 'My Narrative Process',
      subtitle: 'From discovery to final story',
      icon: '🔄',
      content: (
        <div className="book-content">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your story's core message and emotional foundation" },
              { step: "02", title: "Structure", desc: "Crafting the narrative arc and flow that guides the audience journey" },
              { step: "03", title: "Creation", desc: "Bringing the story to life through careful cinematography and direction" },
              { step: "04", title: "Refinement", desc: "Polishing every frame until every moment resonates with purpose" }
            ].map((phase) => (
              <div
                key={phase.step}
                className="text-center glass-book rounded-xl p-6 hover:bg-amber-200/5 transition-all duration-300"
              >
                <div className="text-3xl font-black text-amber-400 mb-4">{phase.step}</div>
                <h4 className="text-lg font-bold text-white mb-3">{phase.title}</h4>
                <p className="text-amber-200/70 text-sm leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
          <div className="book-divider" />
          <div className="text-center mt-8">
            <div className="glass-book rounded-2xl p-6 cinematic-glow">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Ready to Tell Your Story?
              </h3>
              <p className="text-amber-200 mb-6">
                Every great story deserves to be told with passion, purpose, and cinematic excellence.
              </p>
              <button className="bg-gradient-to-r from-amber-400 to-amber-600 text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                Begin Your Journey
              </button>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <BookPageLayout
      title="Chapter II: The Art of Narrative"
      subtitle="Where technique meets emotion, and stories become unforgettable experiences"
      sections={storytellingSections}
      layout="expandable"
      defaultSection="philosophy"
    />
  );
};
