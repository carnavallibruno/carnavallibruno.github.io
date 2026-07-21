import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    title: "Fullstack Developer",
    company: "DBServices Portugal",
    period: "Nov 2025 – Present",
    location: "Remote",
    highlights: [
      "Building modern web applications using React and NestJS for Todeschini, a major Brazilian client",
      "Developing scalable fullstack solutions with TypeScript across the entire stack",
      "Collaborating with international teams to deliver high-quality software products",
    ],
  },
  {
    title: "Fullstack Developer",
    company: "Compass.UOL",
    period: "Nov 2022 – Nov 2025",
    location: "Remote",
    highlights: [
      "Designed and delivered critical UI components for Yamaha USA's e-commerce platform using Next.js and Optimizely CMS",
      "Reduced build time by 99% (1h50m → 10s) for AWS' Simple CMS project by optimizing Webpack and CI/CD pipelines",
      "Spearheaded TDD adoption achieving 100% test coverage and reducing post-release bugs by 80%",
      "Redesigned checkout flow for Enerpac leading to 33% increase in monthly revenue",
      "Recognized as Employee of the Month (Jul 2024)",
    ],
  },
  {
    title: "Front-End Developer Intern",
    company: "Compass.UOL",
    period: "Jun 2022 – Oct 2022",
    location: "Remote",
    highlights: [
      "Completed comprehensive internship program focused on front-end development",
      "Mastered React and TypeScript through hands-on projects",
      "Contributed to live company projects using Agile methodologies",
      "Developed strong collaboration skills in remote team environment",
    ],
  },
];

const education = [
  {
    degree: "Bachelor's Degree in Information Systems",
    school: "UNISUL - Universidade do Sul de Santa Catarina",
    period: "Feb 2022 - Dec 2024",
    grade: "8.7/10",
  },
  {
    degree: "Associate's Degree in System Analysis and Development",
    school: "UNICESUSC - Centro Universitário Cesusc",
    period: "Aug 2019 - Dec 2020",
    grade: "8.5/10",
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Work <span className="glow-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Building impactful solutions for industry leaders
          </p>

          {/* Experience Timeline */}
          <div className="space-y-8 mb-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.period}
                className="relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="p-8 rounded-2xl glass glass-hover">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="glow-text">Education</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                className="p-6 rounded-xl glass glass-hover"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{edu.school}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-muted-foreground">{edu.period}</span>
                      <span className="text-primary font-medium">Grade: {edu.grade}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
