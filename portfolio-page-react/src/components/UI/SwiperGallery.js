import styles from "../../scss/Swiper.modules.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";

const SwiperGallery = () => {
  return (
    <div className={styles.mySwiper}>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[Autoplay, EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={require(`../../assets/gallery/gallery1.jpg`)}
            alt="photo1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require(`../../assets/gallery/gallery2.jpg`)}
            alt="photo2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require(`../../assets/gallery/gallery3.jpg`)}
            alt="photo3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={require(`../../assets/gallery/gallery4.jpg`)}
            alt="photo4"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperGallery;
