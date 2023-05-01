import styles from "../scss/Aboutme.module.scss";
import "swiper/css/effect-coverflow";
import Button from "./UI/Button";
import { animated, useInView } from 'react-spring'
import aboutImage from "../assets/gallery/me.png"


const AboutMe = () => {

  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
    }),
  )

  return (
    <div className={styles.aboutme}>
      <img className={styles.picture} src={aboutImage} alt="author"/>
      <div className={styles.text}>
        <animated.p className={styles.slogan} ref={ref} style={springs}>
          Nice to meet you!
          <br />
          I'm <span className={styles.name}>Sebastian Dominiak</span>
        </animated.p>
        <animated.p className={styles.description} ref={ref} style={springs}>
          I am currently a soldier in the Polish army, a veteran of Iraq and
          Afghanistan with the rank of private first class, passionate about
          building responsive websites that users love.
        </animated.p>
        <Button name="Contact Me"/>
      </div>
    </div>
  );
};

export default AboutMe;
