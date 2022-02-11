import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ImageSliderItem from "./ImageSliderItem";

import styles from "./ImageSlider.module.css";
import './SlickSlider.css'

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    adaptiveHeight:true,
    fade:true
  };
  return (
    <div className={`carousel ${styles.bodySlider}`}>
      <h1 className={styles["slider-title"]}>Popular</h1>
      <Slider {...settings}>
        <ImageSliderItem
          image="https://assets.vogue.com/photos/602454deb04179f82a56d00e/16:9/w_1280,c_limit/00_social.jpg"
          name="hoodie"
          category="1"
        />
        <ImageSliderItem
          image="https://m.media-amazon.com/images/S/aplus-media/sota/b7fc7746-e726-4862-a580-fdd9ef5a6f6e.__CR0,0,1464,600_PT0_SX1464_V1___.jpg"
          name="bags"
          category="2"
        />
        <ImageSliderItem
          image="https://fashionista.com/.image/t_share/MTQ4MTI3OTEyOTM4MTg2MjYy/hp-paris-fashion-week-mens-spring-2018-street-style.jpg"
          name="pants"
          category="3"
        />
        <ImageSliderItem
          image="https://bizweb.dktcdn.net/100/413/756/collections/jordan-2.jpg?v=1617462460240"
          name="shoes"
          category="4"
        />
        <ImageSliderItem
          image="https://images.ctfassets.net/3s5io6mnxfqz/3q6QfJJZgqTljZhxbwliRz/ecde7628474fb6613b460adedf02f64f/AdobeStock_185261221.jpeg?fm=jpg&w=900&fl=progressive"
          name="accessories"
          category="5"
        />        
      </Slider>
    </div>
  );
};

export default ImageSlider;
