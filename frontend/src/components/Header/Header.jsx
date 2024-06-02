import { useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";
import { NavLink, link } from "react-router-dom";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/service",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Header = () => {
  return (
    <header className="header flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src={logo} alt="logo" />
          </div>

          {/* ============== menu ====================== */}

          <div className="navigation">
            <ul className="menu flex items-center gap-[2.7rem]">
              {
                navLinks.map((item, index) => <li key={index}>
                  <NavLink to={item.path} className={navClass => navClass.isActive ? 'text-primaryColor text-[16px] leading-7 font-[60px]' : ''}>
                    {item.display}
                  </NavLink>
                  </li>
              }
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
