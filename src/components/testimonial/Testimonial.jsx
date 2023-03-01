import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestiae maxime aspernatur vel libero. Illo cupiditate repudiandae ea? Consequatur, adipisci. Perspiciatis dolores laudantium dolorem enim, quos consequuntur voluptatibus veniam corporis!",
  },
  {
    avatar: AVTR2,
    name: "Burna Boy",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestiae maxime aspernatur vel libero. Illo cupiditate repudiandae ea? Consequatur, adipisci. Perspiciatis dolores laudantium dolorem enim, quos consequuntur voluptatibus veniam corporis!",
  },
  {
    avatar: AVTR3,
    name: "Bob Marley",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestiae maxime aspernatur vel libero. Illo cupiditate repudiandae ea? Consequatur, adipisci. Perspiciatis dolores laudantium dolorem enim, quos consequuntur voluptatibus veniam corporis!",
  },
  {
    avatar: AVTR4,
    name: "Kwame Despite",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque molestiae maxime aspernatur vel libero. Illo cupiditate repudiandae ea? Consequatur, adipisci. Perspiciatis dolores laudantium dolorem enim, quos consequuntur voluptatibus veniam corporis!",
  },
];

const Testimonial = () => {
  return (
    <section id="">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
