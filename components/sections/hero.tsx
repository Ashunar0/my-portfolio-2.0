"use client";

import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Mail } from "lucide-react";
import { m } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      />
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        className="relative z-10 text-center max-w-3xl"
      >
        <m.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3 }}
          className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter"
        >
          Building Products that Solve Real Problems with Thoughtful UI.
        </m.h1>
        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4 }}
          className="mt-6 md:text-lg text-foreground/80"
        >
          I build practical, user-centered Web services using React and Next.js.
          My process starts with understanding real problems and crafting clean,
          polished UI to solve them.
        </m.p>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <Link href="#projects">
            <Button size="lg" className="rounded-full text-base">
              View Projects <ArrowUpRight className="h-5! w-5!" />
            </Button>
          </Link>
          <Link href="#contact">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none"
            >
              <Mail className="h-5! w-5!" /> Contact Me
            </Button>
          </Link>
        </m.div>
      </m.div>
    </div>
  );
}
