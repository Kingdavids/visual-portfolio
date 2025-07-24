type ProjectCardProps = {
  title: string;
  description: string;
  mediaUrl: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, mediaUrl }) => (
  <div className="shadow-lg rounded-2xl p-4 bg-white mb-8">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="mb-4">{description}</p>
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src={mediaUrl}
        title={title}
        frameBorder="0"
        allowFullScreen
        className="w-full h-full rounded-xl"
      />
    </div>
  </div>
);
