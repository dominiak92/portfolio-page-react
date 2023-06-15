import styles from "./scss/App.module.scss";
import Header from "./components/UI/Header";
import AboutMe from "./components/AboutMe";
import Technologies from "./components/Technologies";
import Dates from "./components/Dates";
import TimelineGallery from "./components/UI/TimelineGallery";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Gallery from "./components/UI/Gallery";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <AboutMe />
      <Technologies />
      <Projects />
      <div className={styles.header}>
          <p className={styles.title}>My story</p>
        </div>
      <div className={styles.timeline}>
        <Dates />
        <Gallery />
      </div>

      <Contact />
    </div>
  );
}

export default App;
