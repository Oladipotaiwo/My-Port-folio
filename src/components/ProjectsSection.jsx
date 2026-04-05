import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Travel Page",
    description: "A beautiful Travel page using HTML, Css and Javascript.",
    image: "/projects/Travel-website.png",
    tags: ["Html", "Css", "Javascript"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 2,
    title: "Wizkid Page",
    description:
      "A beautiful Afrobeat and global music icon Wizkid Ayo Balogun page using Html and Css.",
    image: "/projects/Wizkid-website.png",
    tags: ["Html", "Css"],
    demoUrl: "#",
    githubUrl: "#",
  },

  {
    id: 3,
    title: "Analogue-Clock",
    description:
      "A beautiful Responsive Analogue clock using HTML, Css and Javascript.",
    image: "/projects/Analogue-watch.png",
    tags: ["Html", "Css", "Javascript"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-orange-500">
          Featured<span className="text-primary">Projects</span>
        </h2>
      </div>

      <p className="text-center text-orange-500 text-muted-foreground mb-12 max-w-2xl mx-auto">
        Here are some of my recent projects.Each project was carefully crafted
        with attention to detail, perfomance, and user experience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, key) => (
          <div
            key={key}
            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span className="px-2 py-1text-xs font-medium border rounded-full bg-secondary text-orange-500">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl text-orange-500 font-semibold mb-1">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-orange-500 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href="https://github.com/Oladipotaiwo"
                    target="_blank"
                    className="text-foreground/80 hover:text-orange-500 transition-colors duration-300"
                  >
                    <ExternalLink color="orange" size={20} />
                  </a>
                  <a
                    href="https://github.com/Oladipotaiwo"
                    target="_blank"
                    className="text-foreground/80 hover:text-orange-500 transition-colors duration-300"
                  >
                    <Github color="orange" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a
          className="cosmic-button w-fit flex items-center mx-auto gap-2"
          target="_blank"
          href="https://github.com/Oladipotaiwo"
        >
          Check My Github <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
};
