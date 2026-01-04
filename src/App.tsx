import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./sections/about";
import Projects from "./sections/projects";
import Skills from "./sections/skills";
import Contact from "./sections/contact";
import Awards from "./sections/awards";

function App() {
  return (
    <div className="w-screen bg-slate-100">
      <Header />
      <div className="h-12" />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Awards />
    </div>
  );
}

export default App;
