"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="bg-[#F5F5F7] dark:bg-muted/20">
      <div className="container mx-auto px-4 md:px-8 py-24 md:py-32 max-w-screen-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="space-y-12"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl pb-1">
              About Me
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Frontend Developer focused on UI/UX and User Happiness.
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-8 text-muted-foreground">
            <p className="leading-relaxed">
              I am a Computer Science student passionate about Frontend
              Development. My ultimate goal is to solve real-world problems and
              bring smiles to people&apos;s faces through the software I build. I
              believe that a product is only successful when the user feels good
              using it, which is why I prioritize UI/UX above all else.
            </p>
            <p className="leading-relaxed">
              Currently, I work as a Frontend Engineer intern at a Marketing
              Cloud development team and also teach React at a programming
              school. I love modern tools like{" "}
              <span className="font-medium text-foreground">Shadcn UI</span> for
              building polished interfaces and lately, I&apos;ve been exploring
              AI-driven &ldquo;Vibe Coding&rdquo; to accelerate my workflow.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
