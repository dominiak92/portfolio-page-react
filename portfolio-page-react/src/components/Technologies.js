import styles from "../scss/Technologies.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTrail, useInView, animated } from "react-spring";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faSass,
  faJs,
  faGit,
  faGithub,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGear,
  faBook,
  faMobileScreen,
  faPalette,
  faRegistered
} from "@fortawesome/free-solid-svg-icons";

const Technologies = () => {
  const icons = [
    faReact,
    faHtml5,
    faCss3Alt,
    faSass,
    faJs,
    faGit,
    faGithub,
    faPalette,
    faFigma, 
    faGear,
    faRegistered,
  ];
  const description = [
    "React",
    "HTML",
    "CSS",
    "SCSS",
    "JavaScript",
    "Git",
    "GitHub",
    "Photoshop",
    "Figma",
    "REST API",
    "Redux",
  ];

  const [ref, inView] = useInView();

  const trailSprings = useTrail(icons.length, {
    from: { opacity: inView ? 1 : 0, transform: "translateY(-30px)"  },
    to: { opacity: inView ? 1 : 0 , transform: "translateY(0)" },
    delay: 200,
  });

  return (
    <>
      <div className={styles.line} />
      <p className={styles.title}>Technologies I work with</p> 
      <div className={styles.technologies}></div>
      <div className={styles.technologies}>
        {trailSprings.map((props, index) => (
          <animated.div ref={ref} key={index} className={styles.element} style={props}>
            <FontAwesomeIcon className={styles.fontawesome} icon={icons[index]} />
            <p className={styles.description}>{description[index]}</p>
          </animated.div>
        ))}
      </div>
      <div className={styles.line} />
    </>
  );
};
export default Technologies;
