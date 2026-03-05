import { motion } from "framer-motion";
import { Sparkles, Rocket, BookOpen, Users, Download } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import profilePhoto from "@/assets/profile-photo.jpg";

const highlights = [
  {
    icon: Sparkles,
    title: "Clean Architecture",
    text: "Passionate about writing well-structured, maintainable code that scales gracefully.",
  },
  {
    icon: Rocket,
    title: "Product-Driven",
    text: "Shipped full-stack products used by real users — from e-commerce platforms to AI-powered analyzers.",
  },
  {
    icon: BookOpen,
    title: "Always Learning",
    text: "Currently pursuing B.Tech in CS while actively building with modern frameworks and ML tools.",
  },
  {
    icon: Users,
    title: "Team Player",
    text: "Experienced collaborating in fast-paced teams, refactoring legacy codebases, and mentoring peers.",
  },
];


const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="section-container">
      <AnimatedSection>
        <p className="text-primary font-medium text-sm uppercase tracking-wide mb-2">
          About Me
        </p>
        <h2 className="heading-lg mb-12">Who I Am</h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Profile photo with decorative elements */}
        <AnimatedSection delay={0.1}>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-square max-w-sm mx-auto ring-1 ring-border">
              <img
                src={profilePhoto}
                alt="Yash Patoliya — Full Stack Developer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative accents */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-secondary -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl bg-primary/10 -z-10" />
          </div>
        </AnimatedSection>

        {/* Bio content */}
        <AnimatedSection delay={0.2}>
          <p className="text-body mb-4">
            Hey! I'm <span className="text-foreground font-semibold">Yash Patoliya</span> — a
            full-stack developer and computer science undergraduate at{" "}
            <span className="text-foreground font-medium">Darshan University</span>. I love
            turning complex problems into clean, scalable, and user-friendly applications.
            Whether it's building an e-commerce platform, a real-time cricket app, or an
            AI-powered cardio analyzer — I bring the same obsession for quality to everything I
            ship.
          </p>
          <p className="text-body mb-8">
            Most recently, I interned as a{" "}
            <span className="text-foreground font-medium">Full Stack Developer at GamutX</span>,
            where I refactored legacy Next.js codebases, built a global job-map visualizer with
            Leaflet.js, and slashed backend API calls by 50–60% with React Query caching. I'm
            always exploring new tech — from <span className="text-primary font-medium">React</span>{" "}
            &amp; <span className="text-primary font-medium">Next.js</span> to{" "}
            <span className="text-primary font-medium">Python</span> &amp;{" "}
            <span className="text-primary font-medium">FastAPI</span>.
          </p>

          {/* Download Resume CTA */}
          <a
            href="/YashWebDevResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm transition-all hover:scale-105 hover:shadow-lg mb-2"
          >
            <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
            Download Resume
          </a>
        </AnimatedSection>
      </div>


      {/* Highlight cards */}
      <AnimatedSection delay={0.4}>
        <div className="grid sm:grid-cols-2 gap-5 mt-12">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl bg-accent/50 border border-border transition-colors hover:bg-accent/80"
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">{h.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{h.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
