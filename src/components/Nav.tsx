import x from "../assets/tweet.png";
import telegram from "../assets/tel.png";
import { NavHashLink } from "react-router-hash-link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mx-[5%] lg:mx-[10%] border-[0.5px] py-[8px] lg:py-[22px] px-[30px] lg:px-[120px] flex justify-between items-center bg-white border-white rounded-[14px] baloo">
      <div
        className={`${
          isOpen
            ? "fixed bg-colFrom top-0 right-0 w-[60%] flex-col transition-all duration-300 ease-in-out py-[10px] px-[24px] rounded-l-[10px] flex justify-between gap-[25px] h-[100vh] pt-[30px] text-white lg:hidden activeNav"
            : "fixed right-[-100%] transition-all duration-300 ease-in-out"
        } `}
      >
        <div className="text-center flex flex-col justify-start items-end pr-10 gap-[45px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            className="w-10 h-10 text-black"
            onClick={toggleMenu}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <NavHashLink
            onClick={toggleMenu}
            smooth
            to="/#home"
            className="leading-[18px] hover:text-primary/75 text-[18px]"
          >
            Home
          </NavHashLink>
          <NavHashLink
            onClick={toggleMenu}
            smooth
            to="/#roadmap"
            className="leading-[18px] hover:text-primary/75 text-[18px]"
          >
            RoadMap
          </NavHashLink>
          <NavHashLink
            onClick={toggleMenu}
            smooth
            to="/#tokenomics"
            className="leading-[18px] hover:text-primary/75 text-[18px]"
          >
            Tokenomics
          </NavHashLink>
          <NavHashLink
            onClick={toggleMenu}
            smooth
            to="https://t.me/durov/40"
            className="leading-[18px] hover:text-primary/75 text-[18px]"
          >
            Durov's post
          </NavHashLink>

          <div className="flex justify-center items-center gap-[9px] ">
            <a href="https://x.com/TelegramsHarry?t=D4wepKFbuSB-Mp_rnsYvZg&s=09">
              <img
                src={x}
                className="w-[15px] lg:w-[25px] mx-4 hover:bg-red"
                alt="X logo"
              />
            </a>
            <a href="https://t.me/harryonton">
              <img
                src={telegram}
                className="w-[15px] lg:w-[25px] hover:bg-red"
                alt="Telegram logo"
              />
            </a>
          </div>
        </div>
      </div>

      <p className="text-[30px] flex">$HARRY</p>
      <GiHamburgerMenu
        className="w-[20px] lg:w-[60px] lg:hidden"
        onClick={toggleMenu}
      />

      <p className="text-[30px] hidden lg:flex">$HARRY</p>
      <div className="hidden lg:flex flex-1 flex-wrap justify-center items-center gap-[50px] text-[22px] lg:text-[15px] text-black font-[500]">
        <NavHashLink
          smooth
          to="/#home"
          className="leading-[18px] hover:text-black/75 text-[20px]"
        >
          Home
        </NavHashLink>
        <NavHashLink
          smooth
          to="/#roadmap"
          className="leading-[18px] hover:text-black/75 text-[20px]"
        >
          RoadMap
        </NavHashLink>
        <NavHashLink
          smooth
          to="/#tokenomics"
          className="leading-[18px] hover:text-black/75 text-[20px]"
        >
          Tokenomics
        </NavHashLink>
        <NavHashLink
          smooth
          to="https://t.me/durov/40"
          className="leading-[18px] hover:text-black/75 text-[20px]"
        >
          Durov's post
        </NavHashLink>
      </div>
      <div className="hidden lg:flex justify-center items-center gap-[3px]">
        <a href="https://x.com/TelegramsHarry?t=D4wepKFbuSB-Mp_rnsYvZg&s=09">
          <img
            src={x}
            className="w-[15px] lg:w-[25px] mx-4 hover:bg-red"
            alt="X logo"
          />
        </a>
        <a href="https://t.me/harryonton">
          <img
            src={telegram}
            className="w-[15px] lg:w-[25px] hover:bg-red"
            alt="Telegram logo"
          />
        </a>
      </div>
    </div>
  );
};

export default Nav;
