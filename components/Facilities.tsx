import { ChipText } from "./ChipText";
import { Button } from "./Button";
import { Card } from "./Card";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";

export const Facilities = () => {
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

  const data = [
    {
      name: "Kitchen",
      description: "1 Kitchen",
      link: "",
      image: "/kitchen.jpg",
    },
    {
      name: "Bedroom",
      description: "2 bedroom in the home",
      link: "",
      image: "/bedroom.jpg",
    },
    {
      name: "Bathroom",
      description: "2 bathroom",
      link: "",
      image: "/bathroom.jpg",
    },
    {
      name: "Dining Table",
      description: "1 table",
      link: "",
      image: "/dining.jpg",
    },
  ];

  return (
    <section className="facilities" ref={ref}>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 100 }}
        animate={animation}
      >
        <div className="section-content">
          <ChipText text="Public Facilities" />
          <h3 className="heading">Various Kinds of Facilities</h3>
          <p className="text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            fugit esse distinctio magnam omnis nobis at placeat.
          </p>
          <Button type="filled" text="Read more"></Button>
        </div>

        <div className="facilities-cards-holder">
          {data.map((itm: any, i) => (
            <Card key={i} {...itm} isminicard={true} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
