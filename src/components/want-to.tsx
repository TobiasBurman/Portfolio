"use client";

import { useInView } from "react-intersection-observer";
import { data } from "../data/data";

export function WantTo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-32">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 section-content ${
          inView ? "visible" : ""
        }`}
      >
        <h2 className="text-5xl font-light text-center">Want To</h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="space-y-6">
            <h3 className="text-3xl text-[#FF1493]">
              {data.wantTo.jobOpportunity.title}
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              {data.wantTo.jobOpportunity.content}
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl text-[#FF1493]">
              {data.wantTo.connect.title}
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              {data.wantTo.connect.content}
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl text-[#FF1493]">
              {data.wantTo.buildSomething.title}
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              {data.wantTo.buildSomething.content}
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-12 pt-12">
          <a
            href={`mailto:${data.social.email}`}
            className="text-xl text-gray-300 hover:text-[#FF1493] transition-colors"
          >
            Email
          </a>
          <a
            href={data.social.github}
            className="text-xl text-gray-300 hover:text-[#FF1493] transition-colors"
          >
            GitHub
          </a>
          <a
            href={data.social.linkedin}
            className="text-xl text-gray-300 hover:text-[#FF1493] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={data.social.resume}
            className="text-xl text-gray-300 hover:text-[#FF1493] transition-colors"
          >
            Resume
          </a>
        </div>
        <footer className="text-center text-lg text-gray-400 pt-12">
          {data.footer.copyright}
        </footer>
      </div>
    </section>
  );
}
