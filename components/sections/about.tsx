"use client";

import { m } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Download } from "lucide-react";
import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about" className="bg-background">
      <div className="container mx-auto px-8 md:px-16 py-24 md:py-32 max-w-screen-2xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Badge
              variant="secondary"
              className="w-fit rounded-full px-4 py-1.5 text-sm font-medium"
            >
              About Me
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Crafting clean, thoughtful UI for real-world use.
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Hi, <span className="font-bold">I'm Asahi Kawanobe</span> — a
              product-focused Frontend Developer who turns real problems into
              simple, usable Web applications. I start by understanding the
              problem, then design clean UI and thoughtful UX through small,
              iterative releases. I'm currently a Frontend Engineer intern in a
              marketing automation team and also teach React/Next.js. I've built
              several practical Web services used in real contexts.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="https://github.com/Ashunar0">
                <Button size="lg" className="rounded-full">
                  <Github className="h-5 w-5" />
                  View Github
                </Button>
              </Link>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden bg-muted"
          >
            <Image
              src="/images/about.png"
              alt="About me"
              fill
              className="object-cover"
              priority
            />
          </m.div>
        </div>
      </div>
    </section>
  );
}
