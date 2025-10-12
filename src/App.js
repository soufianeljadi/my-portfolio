import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeSection from "./components/Resume";


function App() {
  return (
    <div className="font-sans bg-darkBg text-gray-200">
      <Navbar />
      <main className="pt-16">
        <Hero />
            {/* <div className="bg-black text-white min-h-screen"> */}
        <ResumeSection />
        <Projects />
        <Skills />
            {/* </div> */}

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
