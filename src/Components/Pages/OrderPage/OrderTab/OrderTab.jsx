import FoodCard from "../FoodCard/FoodCard";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/pagination";


const OrderTab = ({ items }) => {

  // const pagination = {
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return '<span class="' + className + '">' + (index + 1) + "</span>";
  //   },
  // }


  return (
    <div>

      {/* <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        </SwiperSlide>
      </Swiper> */}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' >
        {
          items.map(item => <FoodCard
            key={item._id}
            item={item}
          ></FoodCard>)
        }
      </div>

    </div>
  );
};

export default OrderTab;