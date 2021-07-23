import { ChipText } from "./ChipText";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { ImQuotesLeft } from "react-icons/im";
import { BsStarFill } from "react-icons/bs";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Image from "next/image";
import { useRef } from "react";
SwiperCore.use([Navigation]);

export const Testimonials = () => {
  const nextBtn = useRef(null);
  const prevBtn = useRef(null);
  const breakPoints = {
    300: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
    768: {
      spaceBetween: 0,
      slidesPerView: 2,
    },
    1024: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    1280: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
  };

  return (
    <section className="testimonials-section relative">
      <div className="container">
        <ChipText text="Testimonials" isorange={true} />
        <div className="testimonial-header">
          <div className="left-side">
            <h5 className="heading">Every stay has a story</h5>
          </div>
          <div className="right-side">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
              nobis provident dolore ratione vero dolorem nisi impedit veniam
              obcaecati voluptatibus illum harum.
            </p>
            <div className="slide-controllers">
              <button ref={prevBtn}>
                <HiArrowLeft />
              </button>
              <button ref={nextBtn}>
                <HiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="swiper-slider-holder">
        <Swiper
          onInit={(swiper: any) => {
            swiper.params.navigation.prevEl = prevBtn.current;
            swiper.params.navigation.nextEl = nextBtn.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={breakPoints}
          navigation={{ prevEl: prevBtn.current, nextEl: nextBtn.current }}
        >
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

const TestimonialCard = () => {
  return (
    <div className="testimonial-card">
      <ImQuotesLeft />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
        laudantium, earum repellendus ad voluptas in eligendi, ut laborum
        veritatis optio, nemo neque? Nostrum, tempora minima. Molestiae numquam
        voluptatum eaque inventore.
      </p>
      <div className="testimonial-card-footer">
        <div className="testimonial-by">
          <Image
            src="/user.jpg"
            width={50}
            alt=""
            height={50}
            objectFit="cover"
          />
          <span>Wilden Putri</span>
        </div>
        <div className="testimonial-rating">
          <BsStarFill />
          <span>4.7</span>
        </div>
      </div>
    </div>
  );
};
