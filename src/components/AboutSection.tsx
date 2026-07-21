import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Globe, GraduationCap, MapPin } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "AWS Certified",
    description: "Cloud Practitioner certified",
  },
  {
    icon: Globe,
    title: "Multilingual",
    description: "English, Portuguese & Spanish",
  },
  {
    icon: GraduationCap,
    title: "Bachelor's Degree",
    description: "Information Systems",
  },
  {
    icon: MapPin,
    title: "Open to Relocation",
    description: "EU Citizen, flexible location",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            About <span className="glow-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            A passionate developer crafting digital experiences
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a Software Engineer with over 4 years of professional
                experience, currently working at{" "}
                <span className="text-foreground font-medium">
                  DBServices Portugal
                </span>{" "}
                where I'm building modern applications with React and NestJS for{" "}
                <span className="text-primary">Todeschini</span>. Previously at
                Compass.UOL, I contributed to major projects for clients like
                <span className="text-primary"> Yamaha USA</span>,{" "}
                <span className="text-primary">AWS</span>, and{" "}
                <span className="text-primary">Enerpac</span>.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                My passion lies in creating high-performance, user-centric web
                applications. I specialize in{" "}
                <span className="text-foreground font-medium">React</span>,
                <span className="text-foreground font-medium"> Next.js</span>,
                <span className="text-foreground font-medium"> NestJS</span>,
                <span className="text-foreground font-medium"> Node.js</span>,
                and
                <span className="text-foreground font-medium"> SQL</span> with a
                strong foundation in Test-Driven Development and CI/CD
                practices.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond coding, I'm an active mentor and educator, having trained
                150+ developers through internship programs and delivered
                technical workshops to audiences of 1,000+ professionals. I'm
                also an avid gamer, and long-term I'd love to bring my
                engineering background into the games industry.
              </p>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="p-6 rounded-xl glass glass-hover"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.15 } }}
                >
                  <item.icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
