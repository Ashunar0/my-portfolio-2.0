"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Github, Twitter } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 md:px-8 flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        className="space-y-4"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70 pb-2">
          Crafting UI/UX with Code
          <br />
          to Make People Smile
        </h1>
        <p className="mx-auto max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          I&apos;m a CS student and Frontend Developer passionate about React &
          Shadcn UI. Building digital products that solve problems and deliver
          happiness.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.2 }}
        className="flex gap-4"
      >
        <Button asChild size="lg">
          <Link href="#projects">
            View Work <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="#contact">Contact Me</Link>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.4 }}
        className="flex gap-4 text-muted-foreground"
      >
        <Link
          href="https://github.com/Ashunar0"
          target="_blank"
          className="hover:text-foreground transition-colors"
        >
          <Github className="h-6 w-6" />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link
          href="https://x.com/ashunar0_mui"
          target="_blank"
          className="hover:text-foreground transition-colors"
        >
          <Twitter className="h-6 w-6" />
          <span className="sr-only">Twitter</span>
        </Link>
      </motion.div>
    </section>
  );
}
