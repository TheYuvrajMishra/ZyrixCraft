interface CardProps {
    title: string;
    technologies: string[];
    imagePath: string;
    className?: string;
  }
  
  const Card = ({ title, technologies, imagePath, className = "" }: CardProps) => {
    return (
      <div 
        className={`group relative overflow-hidden rounded-xl bg-black/40 p-4 transition-all duration-300 hover:scale-105 hover:bg-black/50
          border border-white/10 backdrop-blur-sm
          cursor-pointer shadow-lg hover:shadow-purple-500/20 ${className}`}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-30 transition-opacity group-hover:opacity-40"
          style={{
            backgroundImage: `url(${imagePath})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col gap-4 p-2">
          {/* Title */}
          <h3 className="text-xl font-bold text-white">
            {title}
          </h3>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm
                          transition-colors hover:bg-white/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;