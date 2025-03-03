"use client";

import { useInView } from "react-intersection-observer";
import { data } from "../data/data";

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { past, present, future } = data.about;

  return (
    <section id="about" className="py-32">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 section-content ${
          inView ? "visible" : ""
        }`}
      >
        <h2 className="text-5xl font-light text-center">About Me</h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="space-y-6">
            <h3 className="text-3xl text-[#FF1493]">{past.title}</h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              {past.content}
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl text-[#FF1493]">{present.title}</h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              {present.content}
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl text-[#FF1493]">{future.title}</h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              {future.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
