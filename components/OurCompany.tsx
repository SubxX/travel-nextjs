import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { ChipText } from "./ChipText";
import { Button } from "./Button";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";

export const OurCompany = () => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView]);

  return (
    <section className="our-company-section" ref={ref}>
      <motion.div
        className="container company-preview"
        initial={{ opacity: 0, y: 100 }}
        animate={animation}
      >
        <div className="left-side relative">
          <Image
            src="/our-company.jpg"
            alt="our Company"
            layout="fill"
            objectFit="cover"
          />
          <button className="play-video">
            <FaPlay size="20px" />
          </button>
        </div>
        <div className="right-side">
          <ChipText text="Preview" />
          <h4 className="heading">Our Company Profile</h4>
          <p className="text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quas
            repellendus hic, perferendis iure, architecto adipisci illo et
            accusamus at eos molestiae.
          </p>
          <Button type="filled" text="Read more"></Button>
        </div>
      </motion.div>
    </section>
  );
};
