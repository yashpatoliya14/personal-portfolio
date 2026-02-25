import AnimatedSection from "./AnimatedSection";
import profilePhoto from "@/assets/profile-photo.jpg";

const highlights = [
  { emoji: "🧠", text: "Problem solver with a passion for clean architecture" },
  { emoji: "💻", text: "5+ years building production-grade applications" },
  { emoji: "🚀", text: "Shipped products used by thousands of users" },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="section-container">
      <AnimatedSection>
        <p className="text-primary font-medium text-sm uppercase tracking-wide mb-2">About Me</p>
        <h2 className="heading-lg mb-12">Who I Am</h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSection delay={0.1}>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-square max-w-sm mx-auto">
              <img
                src={profilePhoto}
                alt="Profile photo"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-secondary -z-10" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-body mb-8">
            I'm a full-stack developer focused on crafting clean, scalable, and user-friendly
            applications. I thrive on turning complex problems into elegant solutions, writing
            code that's maintainable and performant.
          </p>
          <div className="space-y-4">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-xl bg-accent/50 border border-border"
              >
                <span className="text-2xl">{h.emoji}</span>
                <p className="text-sm font-medium text-foreground">{h.text}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
