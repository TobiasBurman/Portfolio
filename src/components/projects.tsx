"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { ExternalLink } from "lucide-react";
import { data } from "../data/data";

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-32">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 section-content ${
          inView ? "visible" : ""
        }`}
      >
        <h2 className="text-5xl font-light text-center">Projects</h2>
        <div className="space-y-24">
          {data.projects.map((project) => (
            <div
              key={project.title}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="relative aspect-video">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 border-2 border-[#FF1493] rounded-lg"></div>
              </div>
              <div className="space-y-6">
                <h3 className="text-4xl font-light">{project.title}</h3>
                <div className="flex flex-wrap gap-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-[#FF1493] text-lg">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.liveLink}
                  className="inline-flex items-center gap-2 text-[#FF1493] hover:text-white transition-colors text-xl"
                >
                  <ExternalLink size={24} />
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
