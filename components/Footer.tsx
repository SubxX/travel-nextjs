import {
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";

export const Footer = () => {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="logo-holder">
          <a className="logo">Keturon</a>
        </div>

        <div>
          <p>Learn More</p>
          <ul>
            <li>
              <a>About Lift</a>
            </li>
            <li>
              <a>Press Releases</a>
            </li>
            <li>
              <a>Enviroment</a>
            </li>
            <li>
              <a>Jobs</a>
            </li>
            <li>
              <a>Privacy Policy</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>

        <div>
          <p>Tickets & Booking</p>
          <ul>
            <li>
              <a>Lift Tickets</a>
            </li>
            <li>
              <a>Season Passes</a>
            </li>
            <li>
              <a>Vacation Packages</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <p>Contact Us</p>
          <ul>
            <li>
              <span>Hotel Reservations:</span>
              <a>123-456-7890</a>
            </li>
            <li>
              <span>Ticket Office:</span>
              <a>123-456-7890</a>
            </li>
          </ul>
        </div>

        <div className="footer-socials">
          <p>Socials</p>
          <ul className="socials-icons">
            <li>
              <a aria-label="Keturon Facebook">
                <RiFacebookFill size="25px" />
              </a>
            </li>
            <li>
              <a aria-label="Keturon Instagram">
                <RiInstagramFill size="25px" />
              </a>
            </li>
            <li>
              <a aria-label="Keturon Twitter">
                <RiTwitterFill size="25px" />
              </a>
            </li>
            <li>
              <a aria-label="Keturon Youtube">
                <RiYoutubeFill size="25px" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright container">
        <p>&copy; 2021 Bitpastel | All Rights Reserved</p>
      </div>
    </footer>
  );
};
