import SectionTItle from "../../../SectionTitle/SectionTItle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/review')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])




  return (
    <div>
      <SectionTItle

        heading={"What Our Client Say !"}
        subHeading={"Testimonials"}
      ></SectionTItle>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >

        {
          reviews.map(review => <SwiperSlide
            key={review._id} >

            <div className=" flex flex-col items-center my-12 border shadow-xl rounded-xl p-8" >
              <p className="text-center">{review.details} </p>
              <h3 className="text-2xl">{review.name}</h3>



              <Rating
                className=' flex justify-center items-center '
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />


            </div>
          </SwiperSlide>)
        }

      </Swiper>

    </div>
  );
};

export default Testimonials;