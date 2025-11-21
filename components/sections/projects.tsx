"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Project One",
    description:
      "A brief description of the project. What it does, the problem it solves, and the technologies used.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "/file.svg", // Placeholder
    github: "#",
    demo: "#",
  },
  {
    title: "Project Two",
    description:
      "Another cool project description. Highlights key features and technical challenges overcome.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "/globe.svg", // Placeholder
    github: "#",
    demo: "#",
  },
  {
    title: "Project Three",
    description:
      "A mobile-first application built with modern tools. Focuses on performance and user experience.",
    tags: ["React Native", "Firebase"],
    image: "/window.svg", // Placeholder
    github: "#",
    demo: "#",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
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
            Projects
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A selection of my recent work.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative aspect-video overflow-hidden bg-muted/50 flex items-center justify-center">
                  {/* Placeholder for project image - in real app use next/image with proper src */}
                  <div className="text-muted-foreground text-sm">
                    Project Image Placeholder
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1"
                  >
                    <Link href={project.github} target="_blank">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild className="flex-1">
                    <Link href={project.demo} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
