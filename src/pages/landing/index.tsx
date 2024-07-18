import Nav from "../../components/Nav";
import arrow from "../../assets/arrow.png";
import paper from "../../assets/paper.png";
import paper2 from "../../assets/paper2.png";
import x from "../../assets/tweet.png";
import telegram from "../../assets/tel.png";
import { motion } from "framer-motion";
import harry from "../../assets/2.webp";
import angry from "../../assets/5.webp";
import harry1 from "../../assets/9.webp";
import harry2 from "../../assets/1.webp";
import harry3 from "../../assets/12.webp";

const bounceTransition = {
  y: {
    duration: 2.5,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeOut",
  },
};

const Landing = () => {
  return (
    <div className="bg-[#171818]">
      <div className="bg-[#171818] pt-[122px]">
        <div className="sticky top-0 z-40">
          <Nav />
        </div>
        <div className="headerBg pt-[118px]" id="home">
          <div className="flex justify-center items-center flex-col">
            <motion.img
              src={harry}
              alt=""
              animate={{
                y: ["0%", "-5%", "0%"],
              }}
              transition={bounceTransition}
            />
            <p className="cals text-white font-[600] text-[25px] mt-4 leading-[26px] tracking-[3%] w-[70%] text-center">
              Who TF is Harry? Harry is a character of telegram since 2016 now
              tokenized into a ton meme: $HARRY. It appeared in some Durov's
              telegram post from 2016. $Harry, the lonely guy on telegram with
              the biggest reactions to anything. He expresses every action on
              telegram with a big reaction 🤯. Completely stealth launched, no
              presale bullshit, zero taxes (ever). Almost entire LP burned.{" "}
              <span className="text-red">$HARRY</span> is built by the people,
              for the people.
            </p>

            <button className="flex justify-center items-center gap-2 h-[55px] mt-[30px] w-[206px] bg-white rounded-full leading-[18px] cals font-[600] text-[17px] tracking-[3%]">
              BUY NOW <img src={arrow} alt="" />
            </button>
          </div>
        </div>
        <div
          id="roadmap"
          className="roadmapBg mt-[142px] pb-[160px] flex flex-col items-center baloo "
        >
          <h1 className="text-white text-[100px] md:text-[200px] tracking-[-10px] leading-[190px]">
            RoadMap
          </h1>

          <div className="pt-14 flex flex-wrap justify-center gap-32 overflow-hidden">
            <div className="flex flex-col items-start gap-16">
              <div className="bg-grey rounded-[25px] py-[25px] px-3 transform rotate-1 origin-center w-[330px] text-center relative">
                <img src={paper} alt="" className="absolute -top-14 -left-16" />
                <h1 className="baloo text-[41px]">
                  <span className="text-red">PHASE 1</span>
                </h1>
                <ul className="text-left baloo pl-4">
                  <li className="text-[30px] text-white leading-[48px]">
                    - STEALTH LAUNCH <span className="text-red">$HARRY</span>
                  </li>
                  <li className="text-[30px] text-white leading-[48px]">
                    - 100 HOLDERS
                  </li>
                  <li className="text-[30px] text-white leading-[48px]">
                    - SPREAD THE WORD ON SOCIAL MEDIA USING #HARRY
                  </li>
                </ul>
              </div>
              <div className="rounded-[25px] py-[30px] px-3 transform rotate-3 origin-center w-[330px] text-center relative">
                <h1 className="baloo text-[41px]">
                  <span className="text-red pb-3">PHASE 2</span>
                </h1>
                <ul className="text-left baloo pl-4">
                  <li className="text-[30px] text-white leading-[48px]">
                    - COINGECKO / COINMARKETCAP LISTINGS
                  </li>
                  <li className="text-[30px] text-white leading-[48px]">
                    - COMMUNITY PARTNERSHIPS
                  </li>
                  <li className="text-[30px] text-white leading-[48px]">
                    - <span className="text-red">$HARRY</span> Telegram
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-start gap-10 mt-10">
              <div className="rounded-[25px] py-[25px] px-3 transform -rotate-2 origin-center w-[330px] text-center relative">
                <h1 className="baloo text-[41px]">
                  <span className="text-red">PHASE 3</span>
                </h1>
                <ul className="text-left baloo pl-4">
                  <li className="text-[30px] text-white leading-[48px]">
                    - 500 HOLDERS
                  </li>
                  <li className="text-[30px] text-white leading-[48px]">
                    - COINBASE/GEMINI LISTINGS
                  </li>
                  <li className="text-[30px] leading-[48px] text-white">
                    - DECENTRALIZED EXCHANGE
                  </li>
                </ul>
              </div>
              <div className="bg-grey rounded-[25px] py-[65px] px-3 transform -rotate-4 origin-center w-[330px] text-center relative">
                <img
                  src={paper2}
                  alt=""
                  className="absolute -bottom-[80px] -right-16"
                />
                <h1 className="baloo text-[41px]">
                  <span className="text-red">PHASE 4</span>
                </h1>
                <p className="text-center baloo pl-4 text-[30px] text-white leading-[48px]">
                  WE VIBE OUT AND RIDE THE MOON, $HARRY
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-20">
          <img src={harry2} alt="" />
          <img src={harry3} alt="" />
        </div>
        <div
          className="pt-[130px] flex items-center flex-col baloo"
          id="howToBuy"
        >
          <h1 className="text-[85px] md:text-[140px] tracking-[-10px] text-white leading-[122px]">
            How To Buy
          </h1>

          <div className="flex flex-col items-start gap-10 text-white w-[85%] lg:w-[70%] mt-10">
            <div>
              <p className="text-[28px]">Step 1</p>
              <div>
                <p className="text-[24px]">
                  Create a Wallet: download Tonkeeper wallet extension.
                </p>
              </div>
            </div>

            <div>
              <p className="text-[28px]">Step 2</p>
              <div>
                <p className="text-[24px]">
                  {" "}
                  Get Some TON: have TON in your wallet to switch to $harry. If
                  you don&apos;t have any TON, you can buy directly on Bybit,
                  OKX exchange, transfer from another wallet, or buy on another
                  exchange and send it to your wallet.
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center w-full">
              <motion.img
                src={harry1}
                alt=""
                animate={{
                  y: ["0%", "-5%", "0%"],
                }}
                transition={bounceTransition}
              />
            </div>

            <div>
              <p className="text-[28px]">Step 3</p>
              <div>
                <p className="text-[24px]">
                  Wallet connection: Go to dedust.io on google
                  chrome. Connect your wallet. Paste the $harry token address
                  into dedust.io, select $harry, and confirm. When Tonkeeper
                  prompts you for a wallet signature, sign.
                </p>
              </div>
            </div>

            <div>
              <p className="text-[28px]">Step 4</p>
              <div>
                <p className="text-[24px]">
                  Switch TON for $harry: We have ZERO
                  taxes so you don&apos;t need to worry about buying with a
                  specific slippage, although you may need to use slippage
                  during times of market volatility.
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div
          className="pt-[230px] flex items-center flex-col baloo"
          id="tokenomics"
        >
          <h1 className="text-[85px] md:text-[140px] tracking-[-10px] text-white leading-[122px]">
            Tokenomics
          </h1>
          <p className="text-center text-[42px] leading-[33px] text-white tracking-[-2px] pb-[100px]">
            TOTAL SUPPLY : <span className="text-yellow">1,000,000,000</span>
          </p>

          <div className="w-[85%] bg-gradient-to-b from-colFrom to-colTo pt-[95px] rounded-t-[100px] pb-[100px]">
            <ul className="flex flex-col text-center gap-[25px] list-disc text-red cals text-[32px] leading-[37px] font-[600] px-[22%] pb-[130px]">
              <li>Liquidity 100% locked. Tighter than John Cena's headlock.</li>
              <li>Buy back and Burn</li>
              <li>Entire Liquidty burnt</li>
              <li className="list-none self-center mt-5">
                <motion.img
                  src={angry}
                  alt=""
                  animate={{
                    y: ["0%", "-5%", "0%"],
                  }}
                  transition={bounceTransition}
                />
              </li>
            </ul>
            <div className="flex justify-center items-center"></div>
          </div>
        </div>
        <div className="flex justify-center items-center pb-2"></div>
      </div>
      <footer>
        <div className="container flex flex-col md:flex-row items-center px-5">
          <div className="flex flex-1 flex-wrap items-center justify-center md:justify-start gap-12">
            <a
              href="https://t.me/durov/40"
              className="text-white text-[30px] baloo"
            >
              $HARRY
            </a>
            <a href="#" className="baloo text-[20px] text-white">
              Join Community
            </a>
            <a href="https://x.com/TelegramsHarry?t=D4wepKFbuSB-Mp_rnsYvZg&s=09">
              <img
                src={x}
                className="w-[25px] lg:w-[35px] bg-white"
                alt="X logo"
              />
            </a>
            <a href="https://t.me/harryonton">
              <img
                src={telegram}
                className="w-[25px] lg:w-[35px] bg-white"
                alt="Telegram logo"
              />
            </a>
          </div>
          <div className="flex gap-10 mt-12 md:mt-0 text-white text-2xl list-none">
            <p className="text-[15px] baloo">
              COPYRIGHT © 2024 HARRY ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
