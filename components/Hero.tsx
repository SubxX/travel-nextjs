import { HiOfficeBuilding, HiLocationMarker } from "react-icons/hi";
import { IoMdPricetag, IoMdPricetags, IoIosHappy } from "react-icons/io";
import { MdStars } from "react-icons/md";
import { FaHotel } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero">
      <div className="container hero-container">
        <div className="hero-video">
          <video src="/japan_travel.mp4" autoPlay muted loop></video>
        </div>

        <div className="hero-content">
          <h1 className="heading">The best place to rest like home</h1>
          <p className="text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            mollitia necessitatibus praesentium cumque voluptates? Maxime, ut,
            error commodi recusandae sit explicabo vero esse, tenetur modi est
            ratione! Eius, explicabo expedita?
          </p>

          <div className="hero-widgets">
            <HeroWidget count={720} text="Apartments">
              <HiOfficeBuilding size="30px" />
            </HeroWidget>

            <HeroWidget count={3} text="branches in US">
              <HiLocationMarker size="30px" />
            </HeroWidget>
          </div>
        </div>
      </div>

      <div className="location-details container relative">
        <CurrentLocation />

        <div className="search-widget">
          <div className="col">
            <FaHotel size="20px" />
            <div className="col-content">
              <p>Hotels</p>
              <span>387</span>
            </div>
          </div>

          <div className="col">
            <HiLocationMarker size="20px" />
            <div className="col-content">
              <p>Locations</p>
              <span>1254</span>
            </div>
          </div>

          <div className="col">
            <IoMdPricetag size="20px" />
            <div className="col-content">
              <p>Min Cost</p>
              <span>$650</span>
            </div>
          </div>

          <div className="col">
            <IoMdPricetags size="20px" />
            <div className="col-content">
              <p>Max Cost</p>
              <span>$1250</span>
            </div>
          </div>

          <div className="col">
            <IoIosHappy size="20px" />
            <div className="col-content">
              <p>Travelers</p>
              <span>3k+</span>
            </div>
          </div>

          <div className="col">
            <MdStars size="20px" />
            <div className="col-content">
              <p>Rating</p>
              <span>5/5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const HeroWidget = ({
  count,
  text,
  children,
}: {
  count: number;
  text: string;
  children: any;
}) => {
  return (
    <div className="hero-widget">
      <div className="hero-widget-icon">{children}</div>
      <p className="hero-widget-text">
        <span>{count}</span>
        {text}
      </p>
    </div>
  );
};

const CurrentLocation = () => {
  return (
    <div className="current-marker">
      <div className="location-marker">
        <HiLocationMarker size="25px" />
      </div>
      <div className="content">
        <p>Tokyo, Japan</p>
        <span>2 Bedroom Stay</span>
      </div>
    </div>
  );
};
