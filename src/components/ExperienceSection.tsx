import { Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    company: "GamutX",
    role: "Full Stack Developer",
    duration: "Dec,2025 - March,2026",
    achievements: [
      "Refactored legacy codebase by removing redundant code, restructuring routes, and resolving unmatched routing issues in Next.js",
"Enhanced an internal browser bookmark extension with tab-wise categorization and seamless import/export functionality",
"Developed a global job map visualizer using Leaflet.js with dynamic markers and state-based filtering",
"Reduced backend API calls by 50–60% using efficient frontend caching with ReactQuery",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding bg-background">
    <div className="section-container">
      <AnimatedSection>
        <p className="text-primary font-medium text-sm uppercase tracking-wide mb-2">Experience</p>
        <h2 className="heading-lg mb-12">Where I've Worked</h2>
      </AnimatedSection>

      <div className="grid gap-6">
        {experiences.map((exp, i) => (
          <AnimatedSection key={i} delay={i * 0.12}>
            <div className="card-elevated p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <Briefcase size={18} className="text-secondary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="heading-md">{exp.role}</h3>
                      <p className="text-primary font-medium text-sm">{exp.company}</p>
                    </div>
                    <span className="badge-tech">{exp.duration}</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-2 ml-14">
                {exp.achievements.map((a, j) => (
                  <li key={j} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-primary mt-1.5 shrink-0">•</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
