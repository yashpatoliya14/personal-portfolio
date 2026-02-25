import { Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    company: "Google",
    role: "Senior Software Engineer",
    duration: "2022 – Present",
    achievements: [
      "Led a team of 5 engineers to build a real-time data pipeline processing 10M+ events/day",
      "Reduced API latency by 40% through query optimization and caching strategies",
      "Mentored junior developers and conducted 50+ code reviews",
    ],
  },
  {
    company: "Stripe",
    role: "Software Engineer",
    duration: "2020 – 2022",
    achievements: [
      "Built payment orchestration features serving 100K+ merchants",
      "Designed and implemented microservices architecture for billing platform",
      "Improved test coverage from 65% to 95% across core services",
    ],
  },
  {
    company: "Startup Inc.",
    role: "Full Stack Developer",
    duration: "2018 – 2020",
    achievements: [
      "Built MVP from scratch using React, Node.js, and PostgreSQL",
      "Implemented CI/CD pipelines reducing deployment time by 70%",
      "Grew user base from 0 to 10K in the first 6 months",
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
