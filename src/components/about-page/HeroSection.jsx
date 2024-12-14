import { heroBg } from "../../assets/images";
import { userArmin, userAli } from "../../assets/people";
import { plus1, plus2, reelSparkles, rightBlack } from "../../assets/icons";



const HeroSection = () => {
  return (
    <>
      <section className="hero-section about-page" style={{backgroundImage: `url(${heroBg})`}}>
				<div className="flex flex-col gap-5 mt-20 lg:mt-0">
					<h1 className="main-heading text-center">
            Behind Qwerki
					</h1>
					<p className="max-w-lg mx-3 lg:mx-auto description text-center">
            Harnessing technology’s potential to empower lives, bridge gaps, and
            amplify abilities. Welcome to a world where technology and human
            potential unite.
					</p>
          <a
						href="#footer-section"
						className="flex lg:hidden max-w-max mx-auto items-center justify-center gap-3 bg-black py-2.5 px-5 text-white rounded-full"
					>
						<p className="font-bold">Get early access</p>
						<img
							className="h-[10px] w-[10px] mt-0.5 md:mt-1"
							src={rightBlack}
							alt=""
						/>
					</a>
				</div>
        <div className="max-w-6xl mx-auto w-full page-padding flex flex-col gap-8 lg:gap-14 simple-text text-[10px] sm:text-xs md:text-sm lg:text-base mt-10">
          <div className="relative flex items-center gap-5 lg:gap-10">
            <div className="relative">
              <img
                className="w-[80px] h-[80px] lg:w-[150px] lg:h-[150px]"
                src={userArmin}
                alt="user-1"
              />
							<img src={plus2} className="h-8 lg:h-16 w-8 lg:w-16 absolute -top-5 lg:-bottom-16 -right-5 lg:right-0" alt="" />
							<img src={reelSparkles} className="h-7 lg:h-20 w-7 lg:w-20 absolute -bottom-8 lg:-bottom-20 lg:-left-14" alt="" />
            </div>
            <p className="border border-[rgba(0,0,0,0.2)] max-w-sm shadow-lg py-1 sm:py-2 md:py-3 lg:py-4 px-5 lg:pr-10 bg-white rounded-full rounded-bl-none">
              From QWERTY to Qwerki: Productivity re-imagined, one step at a time 🦄
            </p>
          </div>

          <div className="relative flex items-center justify-end gap-5 lg:gap-10">
            <div className="relative">
              <p className="max-w-sm shadow-lg border border-[rgba(0,0,0,.02)] py-1 sm:py-2 md:py-3 lg:py-4 px-5 lg:pr-10 bg-white rounded-full rounded-br-none">
                We use LLAMAs 🦙, but no animals were hurt in the process ✌️
              </p>
              <img src={plus1} className="h-3 lg:h-5 w-3 lg:w-5 absolute -top-7 -right-10 lg:-left-5" alt="" />
            </div>
            <div className="relative">
              <img
                className="w-[80px] h-[80px] lg:w-[150px] lg:h-[150px]"
                src={userAli}
                alt="user-2"
              />
              <img src={plus1} className="h-3 lg:h-5 w-3 lg:w-5 absolute -bottom-5 lg:-bottom-16 right-6 lg:-right-10" alt="" />
							<img src={reelSparkles} className="h-5 lg:h-16 w-5 lg:w-16 absolute -top-5 lg:-top-14 -right-1 lg:-right-14" alt="" />
            </div>
          </div>
        </div>
			</section>
    </>
  );
};

export default HeroSection;
