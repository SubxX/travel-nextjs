import React, { useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";
import { AnimateSharedLayout, motion } from "framer-motion";

export const Card = (props: any) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <AnimateSharedLayout>
        {expanded ? (
          <CardExpanded {...props} toggleExpanded={setExpanded} />
        ) : (
          <CardNotExpanded {...props} toggleExpanded={setExpanded} />
        )}
      </AnimateSharedLayout>
    </div>
  );
};

const CardExpanded = ({
  name,
  description,
  link,
  image,
  isminicard = false,
  toggleExpanded,
}: any) => {
  return (
    <motion.div className="expanded-card">
      <motion.div className="expanded-card-details" layoutId="expandable-card">
        <div className="card-image relative">
          <Image
            src={image}
            alt="Light House"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="card-content">
          <p className="title">{name}</p>
          <span className="text-light">{description}</span>
          <p className="big-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            labore vel soluta molestias ut porro neque quidem mollitia placeat,
            maiores aut reprehenderit asperiores assumenda obcaecati iusto
            doloremque, minus recusandae sint.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="overlay"
        onClick={() => toggleExpanded(false)}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{ delay: 0.3 }}
      ></motion.div>
    </motion.div>
  );
};

const CardNotExpanded = ({
  name,
  description,
  link,
  image,
  isminicard = false,
  toggleExpanded,
}: any) => {
  return (
    <motion.div
      layoutId="expandable-card"
      className={`card ${isminicard ? "mini-card" : ""}`}
      onClick={() => toggleExpanded(true)}
    >
      <div className="card-image">
        <Image src={image} alt="Light House" layout="fill" objectFit="cover" />
      </div>
      <div className="card-content">
        <div className="content">
          <p>{name}</p>
          <span className="text-light">{description}</span>
        </div>
        <HiArrowRight size="30px" />
      </div>
    </motion.div>
  );
};
