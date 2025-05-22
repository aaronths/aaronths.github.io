import "./App.css";
import OppositeButton from "./components/OppositeButton";
import CodingAboutMe from "./sections/CodingAboutMe";
import PersonalAboutMe from "./sections/PersonalAboutMe";
import CodingSplash from "./sections/CodingSplash";
import PersonalSplash from "./sections/PersonalSplash";
import { ScrollProvider } from "./components/ScrollControl";
import Projects from "./sections/Projects";
import { ThemeProvider, useTheme } from "./components/ThemeController";
import Gallery from "./sections/Gallery";

// Theme-aware content wrapper
const ThemedContent: React.FC = () => {
  const { isCodingMode } = useTheme();

  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory scrollbar-hide transition-colors duration-500">
      <ScrollProvider>
        <OppositeButton />

        {/* Conditionally show either the coding or personal splash */}
        <section id="Splash" className="snap-start h-screen w-full">
          {isCodingMode() ? <CodingSplash /> : <PersonalSplash />}
        </section>

        {/* About Me section with conditional styling */}
        <section id="AboutMe" className="snap-start h-screen w-full">
          {isCodingMode() ? <CodingAboutMe /> : <PersonalAboutMe />}
        </section>

        {/* Projects section only shown in coding mode */}
        <section id="Projects" className="snap-start w-full">
          {isCodingMode() ? <Projects /> : <Gallery />}
        </section>
      </ScrollProvider>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <ThemedContent />
    </ThemeProvider>
  );
}

export default App;
