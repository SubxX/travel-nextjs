import { HiMenuAlt3 } from "react-icons/hi";
import { useEffect, useRef } from "react";

export default function Nav() {
  const navElm: any = useRef(null);

  const enableShadow = () => {
    window.pageYOffset >= 50
      ? navElm.current.classList.add("shadowed")
      : navElm.current.classList.remove("shadowed");
  };

  useEffect(() => {
    addEventListener("scroll", enableShadow);
    return () => {
      removeEventListener("scroll", enableShadow);
    };
  }, []);

  return (
    <nav ref={navElm}>
      <div className="container">
        <div className="nav-holder">
          <div className="logo-holder">
            <a className="logo">Keturon</a>
          </div>

          <ul className="nav-menu">
            <li>
              <a className="active">Home</a>
            </li>
            <li>
              <a>Checkin</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Support</a>
            </li>
          </ul>

          <div className="nav-btns">
            <button className="login-btn">Login</button>

            <button className="hamburger">
              <HiMenuAlt3 size="25px" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
