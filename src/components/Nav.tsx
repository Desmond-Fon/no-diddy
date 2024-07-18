import x from "../assets/tweet.png";
import telegram from "../assets/tel.png";
import harry from "../assets/harry.jpg";
import { NavHashLink } from "react-router-hash-link";

const Nav = () => {
    return (
      <div className="mx-[5%] lg:mx-[10%] border-[0.5px] py-[8px] lg:py-[22px] px-[30px] lg:px-[120px] flex justify-between items-center bg-white border-white rounded-[14px] baloo">
        <p className="text-[30px] flex">$HARRY</p>
        <div className="flex flex-1 flex-wrap justify-center items-center gap-[50px] text-[22px] lg:text-[15px] text-black font-[500]">
          <NavHashLink smooth  to="/#home" className="leading-[18px] hover:text-black/75 text-[20px]">
            Home
          </NavHashLink>
          <NavHashLink smooth  to="/#roadmap" className="leading-[18px] hover:text-black/75 text-[20px]">
            RoadMap
          </NavHashLink>
           <NavHashLink smooth  to="/#tokenomics" className="leading-[18px] hover:text-black/75 text-[20px]">
            Tokenomics
          </NavHashLink>
          <NavHashLink smooth  to="https://t.me/durov/40" className="leading-[18px] hover:text-black/75 text-[20px]">
            Durov's post
          </NavHashLink>
        </div>
        <div className='flex justify-center items-center gap-[3px]'>
          <a href="https://x.com/TelegramsHarry?t=D4wepKFbuSB-Mp_rnsYvZg&s=09"><img src={x} className='w-[15px] lg:w-[25px] mx-4 hover:bg-red' alt="X logo" /></a> 
           <a href="https://t.me/harryonton"><img src={telegram} className='w-[15px] lg:w-[25px] hover:bg-red' alt="Telegram logo" /></a>
        </div>
      </div>
    );
}
 
export default Nav;