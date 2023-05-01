import styles from "../../scss/TimelineGallery.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

const TimelineGallery = () => {
  return (
    <>
      <div className={styles.mySwiper2}>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[EffectCards, Autoplay]}
          centeredSlides={true}
          className={styles.swiper}
        >
          <SwiperSlide>
            <div className={styles.slide}>
              <img src={require(`../../assets/gallery/1.jpg`)} alt="photo1" />
              <div className={styles.description}>
                Sometimes you have to wait a long time during rocket alarms
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>
              <img src={require(`../../assets/gallery/2.jpg`)} alt="photo1" />
              <div className={styles.description}>
                My apartment in which I lived for half a year.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>
              <img src={require(`../../assets/gallery/3.jpg`)} alt="photo1" />
              <div className={styles.description}>
                Occasionally, you could watch something on a mission
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slide}>
              <img src={require(`../../assets/gallery/4.jpg`)} alt="photo1" />
              <div className={styles.description}>
                I didn't have the best learning conditions, but it wasn't bad!
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.line} />
    </>
  );
};

export default TimelineGallery;
