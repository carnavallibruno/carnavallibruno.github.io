import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Front-End",
    skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "TailwindCSS", "Web Components"],
  },
  {
    title: "Back-End & APIs",
    skills: ["Node.js", "Python", "NestJS", "GraphQL", "REST APIs", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS (Certified)", "Serverless", "CI/CD", "Docker"],
  },
  {
    title: "Testing & Quality",
    skills: ["Jest", "TDD", "Code Reviews", "100% Coverage"],
  },
  {
    title: "Build & Performance",
    skills: ["Webpack", "Rollup", "Vite", "Turborepo"],
  },
  {
    title: "Tools & Collaboration",
    skills: ["Git", "GitHub", "Jira", "Confluence", "Storybook", "Docusaurus"],
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Technical <span className="glow-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Technologies I work with daily
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="p-6 rounded-2xl glass glass-hover"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + categoryIndex * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <h3 className="text-lg font-semibold mb-4 text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground transition-colors hover:bg-primary/20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.03,
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
