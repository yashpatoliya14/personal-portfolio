import AnimatedSection from "./AnimatedSection";

const categories = [
  {
    name: "Frontend",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Backend",
    tools: ["Node.js", "Python", "FastAPI", "GraphQL", "REST APIs"],
  },
  {
    name: "Database",
    tools: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"],
  },
  {
    name: "DevOps",
    tools: ["Docker", "AWS", "CI/CD", "Kubernetes", "Terraform"],
  },
  {
    name: "Trading Bots",
    tools: ["Pine Script", "Backtrader", "ccxt", "Binance API"],
  },
  {
    name: "AI Tools",
    tools: ["OpenAI", "LangChain", "Hugging Face", "TensorFlow"],
  },
];

const TechStackSection = () => (
  <section id="tech" className="section-padding bg-background">
    <div className="section-container">
      <AnimatedSection>
        <p className="text-primary font-medium text-sm uppercase tracking-wide mb-2">Tech Stack</p>
        <h2 className="heading-lg mb-12">My Tools & Technologies</h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <AnimatedSection key={cat.name} delay={i * 0.08}>
            <div className="card-elevated p-6">
              <h3 className="heading-md mb-4">{cat.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.tools.map((tool) => (
                  <span key={tool} className="badge-tech glow-effect cursor-default">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackSection;
