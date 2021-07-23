import { Button } from "./Button";
import { ChipText } from "./ChipText";
import { Card } from "./Card";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";

export const AvailablePlace = () => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const aniamtion = useAnimation();
  useEffect(() => {
    if (inView) {
      aniamtion.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView]);

  return (
    <section className="available-place" ref={ref}>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 100 }}
        animate={aniamtion}
      >
        <div className="left-side">
          <ChipText text="Available places" />
          <h2 className="heading">Entire city of choice</h2>
          <p className="text-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            voluptatem perferendis dolor hic eius incidunt.
          </p>
          <div className="btns-holder">
            <Button type="filled" text="VIEW ALL" />
            <Button type="transparent" text="READ MORE" />
          </div>
        </div>

        <motion.div className="rigt-side">
          <Card
            name="Surabaya"
            description="20 Hotel 10 Apartment"
            image="/card_three.jpg"
          />
          <Card
            name="Pasuruan"
            description="20 Hotel 10 Apartment"
            image="/card_one.jpg"
          />
          <Card
            name="Malang"
            description="20 Hotel 10 Apartment"
            image="/card_two.jpg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
