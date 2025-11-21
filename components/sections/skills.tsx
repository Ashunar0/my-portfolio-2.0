"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skills = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Redux",
    "HTML5",
    "CSS3",
  ],
  Backend: [
    "Node.js",
    "Express",
    "PostgreSQL",
    "Prisma",
    "Ruby on Rails",
    "Python",
  ],
  Tools: ["Git", "Docker", "Vercel", "Figma"],
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="container mx-auto px-4 md:px-8 py-24 md:py-32 max-w-screen-2xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
        className="space-y-12"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl pb-1">
            Skills
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Technologies and tools I work with.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: index * 0.1 }}
              className="rounded-xl border bg-card text-card-foreground shadow-sm p-6"
            >
              <h3 className="text-xl font-semibold tracking-tight mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
