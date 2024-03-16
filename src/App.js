import "./App.css";
import AboutMe from "./components/About me";
import Footer from "./components/Footer";
import ContainerExample from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <ContainerExample />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
