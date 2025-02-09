"use client";

import Image from "next/image";
import { Mail, Github, Linkedin } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { data } from "../data/data";

export function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="min-h-screen pt-20 relative">
      <div className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50">
        <div className="w-[1px] h-[120px] bg-gray-600 absolute -left-3 top-1/2 -translate-y-1/2" />
        <a
          href={`mailto:${data.social.email}`}
          className="text-gray-400 hover:text-accent transition-colors"
        >
          <Mail size={24} />
        </a>
        <a
          href={data.social.github}
          className="text-gray-400 hover:text-accent transition-colors"
        >
          <Github size={24} />
        </a>
        <a
          href={data.social.linkedin}
          className="text-gray-400 hover:text-accent transition-colors"
        >
          <Linkedin size={24} />
        </a>
      </div>
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-5rem)] flex items-center section-content ${
          inView ? "visible" : ""
        }`}
      >
        <div className="w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-light">Hello! I am</h2>
            <h1 className="text-5xl lg:text-6xl font-bold">{data.name}</h1>
            <p className="text-2xl lg:text-3xl">
              <span className="text-white">{data.roles.primary}</span>{" "}
              <span className="text-accent">●</span>{" "}
              <span className="text-white">{data.roles.secondary}</span>
            </p>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
              {data.summary}
            </p>
            <a
              href={data.social.resume}
              className="inline-block border-2 border-accent text-accent px-6 py-2 lg:px-8 lg:py-3 text-lg hover:bg-accent hover:text-white transition-colors"
            >
              Get my resume
            </a>
          </div>
          <div className="hero-image-container mt-8 md:mt-0">
            <div className="hero-image">
              <Image
                src={data.profileImage || "/placeholder.svg"}
                alt={data.name}
                fill
                priority
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
