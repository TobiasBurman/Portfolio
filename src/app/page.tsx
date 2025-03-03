import { Nav } from "../components/nav";
import { Hero } from "../components/hero";
import { About } from "../components/about";
import { Skills } from "../components/skills";
import { Projects } from "../components/projects";
import { WantTo } from "../components/want-to";
import { SocialSidebar } from "../components/social-sidebar";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <SocialSidebar />
      <div className="pl-16">
        {" "}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <WantTo />
      </div>
    </main>
  );
}
