import Banner from "./Home/Banner";
import AboutMe from "./Home/AboutMe";
import Projects from "./Home/Projects";
import Certificate from "./Home/Certificate";
import BussinessDomain from "./Home/BussinessDomain";
import Swipper from "./knowledge/Swipper";

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutMe />
      <BussinessDomain />
      <Projects />
      <Certificate />
      <Swipper />
    </div>
  );
}
