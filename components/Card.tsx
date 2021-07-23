import React from "react";
import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";

export const Card = ({ isminicard, image, description, name }: any) => {
  return (
    <div className={`card ${isminicard ? "mini-card" : ""}`}>
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
    </div>
  );
};
