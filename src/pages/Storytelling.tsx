import { ProjectCard } from '../components/ProjectCard';

export const Storytelling = () => (
  <div className="pt-24 px-6">
    <h2 className="text-3xl font-bold mb-6">Storytelling</h2>
    <ProjectCard
      title="Essence of Christian Retreat"
      description="A curated story to encourage christians retreat for a church in Canada."
      mediaUrl="https://www.youtube.com/embed/f8DQb6smjIM?start=5"

    />
    <ProjectCard
          title="Mara's House in Africa"
          description="Curated this story for Mara's House in Jos, Nigeria."
          mediaUrl="https://rumble.com/embed/v1cnd8d/?pub=4"
      />

  </div>
);

