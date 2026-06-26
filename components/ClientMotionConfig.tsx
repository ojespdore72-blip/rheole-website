"use client";

import React from "react";
import { MotionConfig } from "framer-motion";

export default function ClientMotionConfig({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
