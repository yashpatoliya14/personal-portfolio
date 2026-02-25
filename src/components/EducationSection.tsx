import { GraduationCap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const education = [
  {
    degree: "M.S. Computer Science",
    school: "Stanford University",
    years: "2018 – 2020",
    description: "Specialized in Distributed Systems and Machine Learning.",
  },
  {
    degree: "B.S. Computer Engineering",
    school: "University of California, Berkeley",
    years: "2014 – 2018",
    description: "Dean's List. Focus on Software Engineering and Algorithms.",
  },
];

const EducationSection = () => (
  <section id="education" className="section-padding bg-muted/30">
    <div className="section-container">
      <AnimatedSection>
        <p className="text-primary font-medium text-sm uppercase tracking-wide mb-2">Education</p>
        <h2 className="heading-lg mb-12">Academic Background</h2>
      </AnimatedSection>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="space-y-8">
          {education.map((e, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="flex gap-6 items-start">
                <div className="hidden md:flex w-12 h-12 rounded-full bg-primary text-primary-foreground items-center justify-center shrink-0 shadow-md relative z-10">
                  <GraduationCap size={20} />
                </div>
                <div className="card-elevated p-6 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="heading-md">{e.degree}</h3>
                    <span className="badge-tech">{e.years}</span>
                  </div>
                  <p className="text-primary font-medium text-sm mb-2">{e.school}</p>
                  <p className="text-muted-foreground text-sm">{e.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
