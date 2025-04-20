import Card from "../Components/Card";

const Services = () => {
  const services = [
    {
      title: "UI/UX Designing",
      technologies: ["Figma", "Illustrator"],
      imagePath: "/lovable-uploads/dbc8bb7b-c401-406a-b07e-72ef27a688cc.png"
    },
    {
      title: "Web Development",
      technologies: ["ReactJs", "NodeJS"],
      imagePath: "/lovable-uploads/dbc8bb7b-c401-406a-b07e-72ef27a688cc.png"
    },
    {
      title: "Graphics Design",
      technologies: ["Photoshop", "Illustrator"],
      imagePath: "/lovable-uploads/dbc8bb7b-c401-406a-b07e-72ef27a688cc.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-16">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          ~:Our Services:~
        </h2>
        
        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              title={service.title}
              technologies={service.technologies}
              imagePath={service.imagePath}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;