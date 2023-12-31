import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import { Pagination} from 'swiper';
import slide1 from '../../../../assets/home/slide1.jpg'
import slide2 from '../../../../assets/home/slide2.jpg'
import slide3 from '../../../../assets/home/slide3.jpg'
import slide4 from '../../../../assets/home/slide4.jpg'
import slide5 from '../../../../assets/home/slide5.jpg'
import SectionTItle from '../../../SectionTitle/SectionTItle';

const Category = () => {

  return (
    <section>
      <SectionTItle
        subHeading={"From 11:00 am to 10.00pm"}
        heading={"Order Online"}
      ></SectionTItle>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        centeredSlides={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={slide1} alt="slide" />
        </SwiperSlide>
        <SwiperSlide> <img src={slide2} alt="slide" /></SwiperSlide>
        <SwiperSlide> <img src={slide3} alt="slide" /></SwiperSlide>
        <SwiperSlide> <img src={slide4} alt="slide" /></SwiperSlide>
        <SwiperSlide> <img src={slide5} alt="slide" /></SwiperSlide>
        .......
      </Swiper>
    </section>
  );
};

export default Category;