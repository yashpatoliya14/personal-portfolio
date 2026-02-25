import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Code2, Layers, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useRef } from "react";

const letterVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, delay: 0.4 + i * 0.04, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const floatingIcons = [
  { Icon: Code2, x: "12%", y: "20%", size: 28, delay: 0 },
  { Icon: Layers, x: "85%", y: "25%", size: 24, delay: 1.5 },
  { Icon: Zap, x: "8%", y: "70%", size: 22, delay: 3 },
  { Icon: Code2, x: "90%", y: "65%", size: 20, delay: 2 },
  { Icon: Layers, x: "75%", y: "80%", size: 26, delay: 0.8 },
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const orbY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

  const name = "John Developer";

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0 -z-10" style={{ y: bgY }}>
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover scale-110"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/50 dark:bg-background/95" />
        <div
          className="absolute inset-0"
          style={{ background: "var(--hero-gradient)", opacity: 0.4 }}
        />
      </motion.div>

      {/* Animated orbs */}
      <motion.div
        className="absolute inset-0 -z-[5] pointer-events-none"
        style={{ y: orbY }}
      >
        <motion.div
          className="absolute top-[15%] left-[10%] w-72 h-72 rounded-full bg-primary/8 dark:bg-primary/15 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[50%] right-[5%] w-96 h-96 rounded-full bg-primary/6 dark:bg-primary/12 blur-3xl"
          animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[30%] w-64 h-64 rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl"
          animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </motion.div>

      {/* Floating icons */}
      <div className="absolute inset-0 -z-[3] pointer-events-none">
        {floatingIcons.map(({ Icon, x, y, size, delay }, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/10 dark:text-primary/20"
            style={{ left: x, top: y }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon size={size} />
          </motion.div>
        ))}
      </div>

      {/* Horizontal lines */}
      <div className="absolute inset-0 -z-[4] pointer-events-none overflow-hidden">
        {[20, 40, 60, 80].map((top) => (
          <motion.div
            key={top}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 dark:via-primary/20 to-transparent"
            style={{ top: `${top}%` }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.8 + top * 0.01, ease: "easeOut" }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div className="section-container relative z-10" style={{ y: contentY }}>
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 dark:bg-primary/10 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-xs font-medium text-primary tracking-wider uppercase">
              Available for work
            </span>
          </motion.div>

          {/* Name with letter-by-letter animation */}
          <h1 className="heading-xl mb-4 overflow-hidden" style={{ perspective: 400 }}>
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
                style={{ display: char === " " ? "inline" : "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          {/* Animated underline */}
          <motion.div
            className="h-1 rounded-full bg-gradient-to-r from-primary/0 via-primary to-primary/0 mb-6"
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          />

          {/* Tagline with staggered words */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mb-10">
            {["Full Stack Developer", "·", "Building Scalable Products"].map(
              (word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + i * 0.15 }}
                  className={
                    word === "·"
                      ? "text-primary text-xl font-bold"
                      : "text-body text-lg"
                  }
                >
                  {word}
                </motion.span>
              )
            )}
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm overflow-hidden transition-all hover:scale-105"
            >
              <span className="absolute inset-0 bg-foreground/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative">View Projects</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3.5 rounded-full border-2 border-primary/30 text-primary font-semibold text-sm backdrop-blur-sm hover:border-primary hover:bg-primary/10 transition-all"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="text-muted-foreground" size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
