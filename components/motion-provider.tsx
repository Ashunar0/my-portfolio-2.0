"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import type { PropsWithChildren } from "react";

/**
 * Provides a single LazyMotion context so framer-motion features
 * load once and are shared across all client components.
 */
export function MotionProvider({ children }: PropsWithChildren) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
