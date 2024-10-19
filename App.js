
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfoilo";
import ProfassionalExperince from "./components/ProfassionalExperince";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <ProfassionalExperince/>
      <Portfolio />
      <Skills />
      <Contact/>
      <SocialLinks/>
    </>
  );
}

export default App;
