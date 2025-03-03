"use client";

import { data } from "../data/data";

export function Nav() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-background-start/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-xl font-light">{data.name}</h1>
          <div className="flex items-center gap-8">
            <div className="hidden sm:flex items-center gap-6">
              {data.navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
