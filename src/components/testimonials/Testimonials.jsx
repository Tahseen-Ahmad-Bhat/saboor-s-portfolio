import React from "react";
import "./testimonials.css";
import Avt1 from "../../assets/Profile.jpeg";
import Avt2 from "../../assets/zakir2.jpg";
import Avt3 from "../../assets/towseef.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const data = [
  {
    avatar: Avt1,
    name: "Tahseen Ahmad Bhat",
    review:
      "Working with Mr. Saboor Bhat was a delight. Their attention to detail and commitment to providing exceptional guest experiences set them apart. I look forward to future collaborations.",
  },
  {
    avatar: Avt2,
    name: "Zakir Ahmad Sofi",
    review:
      "I had the pleasure of collaborating with Mr. Saboor Bhat on a hospitality seminar. His organizational skills and dedication ensured the event's success. I highly recommend his expertise.",
  },
  {
    avatar: Avt3,
    name: "Dr Towseef",
    review:
      "Mr. Saboor Bhat made my stay unforgettable. From the warm welcome at the front desk to the personalized service throughout my visit, he truly knows how to exceed expectations.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide className="testimonial" key={index}>
            <div className="client__avatar">
              <img src={avatar} alt="name" />
            </div>
            <h5>{name}</h5>
            <p className="client__review">{review}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
