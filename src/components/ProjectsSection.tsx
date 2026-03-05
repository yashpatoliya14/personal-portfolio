import { ExternalLink, Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Adaa Ecommerce",
    description: "Full-featured online marketplace with payment processing, inventory management, and admin dashboard.",
    image: project2,
    tags: ["ReactJS", "NodeJS", "MongoDB", "Tailwind", "Cloudinary",],
    demo: "https://adaaecommerce-1.onrender.com/",
    github: "https://github.com/yashpatoliya14/Adaa-Ecommerce",
  },
  {
    title: "Cric Live",
    description: "Real-time analytics platform with interactive charts, custom reporting, and data export capabilities.",
    image: project1,
    tags: ["Flutter", "Firebase", "GetX", "Sqflite"],
    demo: "#",
    github: "https://github.com/yashpatoliya14/cric_live",
  },
  {
    title: "AI Cardio Analyser",
    description: "Intelligent chatbot powered by LLMs with document Q&A, context memory, and multi-language support.",
    image: project3,
    tags: ["Python", "FastAPI", "Scikit Learn", "React", "Numpy", "Pandas"],
    demo: "https://ai-cardio-analyser-1.onrender.com/",
    github: "https://github.com/yashpatoliya14/AI-Cardio-Analyser",
  },
  {
    title: "Service Management System",
    description: "Intelligent chatbot powered by LLMs with document Q&A, context memory, and multi-language support.",
    image: project3,
    tags: ["Python", "FastAPI", "Scikit Learn", "React", "Numpy", "Pandas"],
    demo: "https://ai-cardio-analyser-1.onrender.com/",
    github: "https://github.com/yashpatoliya14/system-request-ms.git",
  },
  {
    title: "AI Pothole Detection System",
    description: "Intelligent chatbot powered by LLMs with document Q&A, context memory, and multi-language support.",
    image: project3,
    tags: ["Python", "FastAPI", "Scikit Learn", "React", "Numpy", "Pandas"],
    demo: "https://ai-cardio-analyser-1.onrender.com/",
    github: "https://github.com/yashpatoliya14/AI-Cardio-Analyser",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding bg-muted/30">
    <div className="section-container">
      <AnimatedSection>
        <p className="text-primary font-medium text-sm uppercase tracking-wide mb-2">Projects</p>
        <h2 className="heading-lg mb-12">Things I've Built</h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <AnimatedSection key={i} delay={i * 0.12}>
            <div className="card-elevated overflow-hidden group">
              <div className="aspect-video overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="heading-md mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((t) => (
                    <span key={t} className="badge-tech">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={p.demo}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a
                    href={p.github}
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={14} /> Code
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
