"use client";

import { m } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";

type SkillCard = {
  name: string;
  label: string;
  proficiency: number;
  emoji: string;
  icon: ReactNode;
};

const SkillIcon = ({ src, alt }: { src: string; alt: string }) => (
  <Image src={src} alt={alt} width={28} height={28} />
);

const skillCards: SkillCard[] = [
  {
    name: "React",
    label: "JavaScript Library",
    proficiency: 95,
    emoji: "⚛️",
    icon: <SkillIcon src="/react.svg" alt="React" />,
  },
  {
    name: "Next.js",
    label: "Full Stack Framework",
    proficiency: 90,
    emoji: "⏭️",
    icon: <SkillIcon src="/next.svg" alt="Next.js" />,
  },
  {
    name: "TypeScript",
    label: "Programming Language",
    proficiency: 85,
    emoji: "🧠",
    icon: <SkillIcon src="/typescript.svg" alt="TypeScript" />,
  },
  {
    name: "Tailwind CSS",
    label: "CSS Framework",
    proficiency: 90,
    emoji: "🌬️",
    icon: <SkillIcon src="/tailwind.svg" alt="Tailwind CSS" />,
  },
  {
    name: "shadcn/ui",
    label: "UI Framework",
    proficiency: 90,
    emoji: "🌬️",
    icon: <SkillIcon src="/shadcn.svg" alt="shadcn/ui" />,
  },
  {
    name: "Figma",
    label: "Design Tool",
    proficiency: 75,
    emoji: "🎨",
    icon: <SkillIcon src="/figma.svg" alt="Figma" />,
  },
  {
    name: "Firebase",
    label: "Database",
    proficiency: 80,
    emoji: "🔥",
    icon: <SkillIcon src="/firebase.svg" alt="Firebase" />,
  },
  {
    name: "Supabase",
    label: "Database",
    proficiency: 70,
    emoji: "🔥",
    icon: <SkillIcon src="/supabase.svg" alt="Supabase" />,
  },
  {
    name: "GitHub",
    label: "Version Control",
    proficiency: 95,
    emoji: "🐙",
    icon: <SkillIcon src="/github.svg" alt="GitHub" />,
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="container mx-auto px-4 md:px-8 py-12 md:py-24 max-w-screen-2xl"
    >
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
        className="space-y-12"
      >
        <div className="space-y-4 text-center">
          <Badge
            variant="secondary"
            className="w-fit rounded-full px-4 py-1.5 text-sm font-medium"
          >
            Skills
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Tools & Stack
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCards.map((skill, index) => (
            <m.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="relative flex items-center gap-4 rounded-2xl border bg-card/80 p-6 shadow-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(0,0,0,0.03)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.03)_50%,rgba(0,0,0,0.03)_75%,transparent_75%,transparent)] bg-size-[18px_18px] opacity-40 pointer-events-none" />
              <div className="relative flex w-full items-center gap-4">
                <Avatar className="h-12 w-12 border bg-background text-lg">
                  <AvatarFallback className="text-xl">
                    {skill.icon}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-lg font-semibold">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {skill.label}
                  </span>
                </div>
                <span className="ml-auto text-lg font-semibold text-foreground">
                  {skill.proficiency}%
                </span>
              </div>
            </m.div>
          ))}
        </div>
      </m.div>
    </section>
  );
}
