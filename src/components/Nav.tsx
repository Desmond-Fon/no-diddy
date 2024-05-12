import icon1 from '../assets/log.png'
import x from "../assets/x.png";
import telegram from "../assets/telegram.png";
import { NavHashLink } from "react-router-hash-link";

const Nav = () => {
    return (
      <div className="mx-[5%] lg:mx-[10%] border-[0.5px] py-[8px] lg:py-[22px] px-[30px] lg:px-[120px] flex justify-between items-center bg-white border-white rounded-[14px] baloo">
        <img src={icon1} alt="" className='w-[15px] lg:w-[110px]' />
        <div className="flex justify-center items-center gap-[50px] text-[22px] lg:text-[15px] text-black font-[500]">
          <NavHashLink smooth  to="/#home" className="leading-[18px] hover:text-black/75 text-[22px]">
            Home
          </NavHashLink>
          <NavHashLink smooth  to="/#roadmap" className="leading-[18px] hover:text-black/75 text-[22px]">
            RoadMap
          </NavHashLink>
           <NavHashLink smooth  to="/#tokenomics" className="leading-[18px] hover:text-black/75 text-[22px]">
            Tokenomics
          </NavHashLink>
        </div>
        <div className='flex justify-center items-center gap-[3px]'>
            <img src={x} alt="" className='w-[15px] lg:w-[25px]' />
        <img src={telegram} alt="" className='w-[15px] lg:w-[25px]' />
        </div>
      </div>
    );
}
 
export default Nav;