"use client";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { data } from "../data/data";

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [visibleSkills, setVisibleSkills] = useState<string[]>([]);

  useEffect(() => {
    if (inView) {
      const allSkills = Object.values(data.skills).flat();
      let delay = 0;
      const interval = setInterval(() => {
        setVisibleSkills((prev) => {
          const nextSkill = allSkills[prev.length];
          return nextSkill ? [...prev, nextSkill] : prev;
        });
        delay += 50;
        if (delay >= allSkills.length * 50) {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section id="skills" className="py-20">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 section-content ${
          inView ? "visible" : ""
        }`}
      >
        <h2 className="text-5xl font-light text-center">Skills</h2>
        <div className="space-y-12">
          {Object.entries(data.skills).map(([category, skills]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-3xl font-light">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 bg-skill-bg text-skill-text rounded-md text-lg skill-item ${
                      visibleSkills.includes(skill) ? "visible" : ""
                    }`}
                    style={{
                      transitionDelay: `${visibleSkills.indexOf(skill) * 50}ms`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
