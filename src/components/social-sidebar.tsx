"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import { data } from "../data/data";

export function SocialSidebar() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50">
      <div className="w-12 h-[2px] bg-gray-400/20 transform -rotate-90 absolute -left-5 top-[50%]" />
      <a
        href={`mailto:${data.social.email}`}
        className="text-gray-400 hover:text-accent transition-colors"
        aria-label="Email"
      >
        <Mail size={24} />
      </a>
      <a
        href={data.social.github}
        className="text-gray-400 hover:text-accent transition-colors"
        aria-label="GitHub"
      >
        <Github size={24} />
      </a>
      <a
        href={data.social.linkedin}
        className="text-gray-400 hover:text-accent transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={24} />
      </a>
    </div>
  );
}
