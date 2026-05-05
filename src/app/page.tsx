import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Nav from "@/components/nav/Nav";
import Projects from "@/components/projects/Projects";
import Techstack from "@/components/techstack/TechStack";

export default function Home() {
  return (
    <div className="w-[80%] mx-auto mt-10 flex flex-col gap-40">
      <Nav />
      <Hero />
      <Techstack />
      <Projects />
      <Footer />
    </div>
  );
}
