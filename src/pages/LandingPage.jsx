import { featureSection1Bg, heroBg, feature2BgGradient, feature3BgGradient } from "../assets/images";
import { 
	checkCircle, 
	sparkles, 
	clock, 
	upDown, 
	upDownWhiter, 
	play, 
	rightBlack, 
	iconBgGradient,
	plus1,
	plus2,
	reelSparkles, 
} from "../assets/icons";
import { left1, right1, user1, user2, user3, userPowerAi} from "../assets/people"
import { instagram } from "../assets/social";

import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection"
import CustomVideo from "../components/CustomVideo.jsx"

const LandingPage = () => {
  return (
    <div className="container">
			{/*  Header  */}
			<HeaderSection />
			{/*  Hero Section */}
			<section className="hero-section" style={{backgroundImage: `url(${heroBg})`}}>
				<div className="flex flex-col gap-5">
					<h1 className="main-heading text-center">
						Your assistant<br />
						for everyday tasks.
					</h1>
					<p className="max-w-lg mx-3 lg:mx-auto description text-center">
						Welcome to the future of productivity and organization. Say goodbye
						to the hassle of managing notes and reminders, and say hello to
						Qwerki – your new AI-powered companion designed to make your life
						easier.
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
			</section>
			{/*  Feature & Video Section */}
			<div className="relative lg:-mt-24">
				<div className="center-line"></div>
				{/*  Video */}
				<div className="mx-5 lg:mx-24 relative z-10 rounded-[30px] overflow-hidden">
					<section className="video-section">
						<CustomVideo id='YffylblmXTU' />
					</section>
				</div>
				{/*   Feature 1--> */}
				<section className="feature-grid py-10 lg:py-20 mt-72 lg:mt-10 lg:pt-96">
					<div className="flex flex-col gap-4 blur-lg:gap-8 pt-10">
						<div className="pill purple-pill">Never forget a thing</div>
						<h1 className="card-heading">
							Effortless note-taking <br />and task management
						</h1>
						<p className="card-desc max-w-md pr-3">
							With Qwerki, capturing ideas and to-do's is effortless – whether
							you're in a meeting, lecture, or on the go, notes are seamlessly
							organized.
						</p>
					</div>
					<div id="feature_section_start" className="relative flex flex-col gap-5 px-3 lg:px-16 pt-10">
						<div className="flex flex-col gap-5 relative z-10">
							<div className="card">
								<img
									className="h-7 lg:h-10 w-7 lg:w-10"
									src={checkCircle}
									alt="check"
								/>
								<div className="flex flex-col gap-2">
									<h2 className="text-xs md:text-lg font-roboto line-through">
										Breakfast with Marcus and Lin
									</h2>
									<div className="flex items-center gap-2">
										<p className="pill purple-pill">9:00 AM</p>
										<p className="pill blue-pill">Online</p>
										<div className="flex items-center">
											<img
												className="h-[28px] w-[28px] rounded-full relative z-10"
												src={left1}
												alt="people"
											/>
											<img
												className="h-[28px] w-[28px] rounded-full relative -left-3"
												src={right1}
												alt="pe"
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="card">
								<p className="text-xs md:text-lg font-roboto">
									Mika eats wet food for dinner 🐈
								</p>
							</div>
							<div className="card">
								<p className="text-xs md:text-lg font-roboto">
									Saturday grocery list 🥦
								</p>
							</div>
							<div className="black-card">
								<div className="colored-sparkles-bg" style={{backgroundImage: `url(${iconBgGradient})`}}>
									<div className="sparkles-wrapper">
										<img
											className="w-[9px] h-[9px] lg:w-[40px] lg:h-[40px]"
											src={sparkles}
											alt="sparkels"
										/>
									</div>
								</div>
								<div className="text-xs md:text-lg font-roboto text-white">
									Qwerki, remind me to take
									<span className="text-highlight">Kate</span> <br />to the dentist
									at <span className="text-highlight">3 PM</span> tomorrow
								</div>
							</div>
						</div>
						<div
							className="flex-1 h-[620px] flex-shrink-0 absolute -top-20 -right-2 z-0"
						>
							<img
								className="w-full h-full flex-shrink-0"
								src={featureSection1Bg}
								alt=""
							/>
						</div>
					</div>
				</section>
				{/*  Feature 2 */}
				<section className="feature-grid py-10 lg:py-20">
					<div className="order-2 lg:order-1 max-w-lg mx-auto">
						{/*  peaples card */}
						<div
							className="relative z-10 flex justify-center gap-2 md:gap-4 lg:gap-6 w-full"
						>
							<img
								className="w-[40px] h-[40px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
								src={user1}
								alt="user-1"
							/>
							<img
								className="w-[40px] h-[40px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
								src={user2}
								alt="user-2"
							/>
							<img
								className="w-[40px] h-[40px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]"
								src={user3}
								alt="user-3"
							/>
						</div>
						<div className="relative z-10 mt-5 mb-24">
							<div className="card">
								<div className="flex items-center">
									<img
										className="h-8 lg:h-[48px] w-8 lg:w-[48px] rounded-full relative z-10"
										src={user3}
										alt="people"
									/>
									<img
										className="h-8 lg:h-[48px] w-8 lg:w-[48px] rounded-full relative -left-3"
										src={user1}
										alt="people"
									/>
								</div>
								<p className="text-xs md:text-lg font-roboto">
									You’re collaborating with Ginny and
									<br className="hidden lg:block" />
									Kenny on <strong>Halloween Party</strong>🎃
								</p>
							</div>
							<div
								className="absolute border-.5 border-black w-[90%] h-full rounded-3xl bg-[#f5f5f5] shadow-lg -z-10 -bottom-[30%] left-[5%]"
							></div>
							<div
								className="absolute border-.5 border-black w-[80%] h-full rounded-3xl bg-[#f5f5f5] shadow-lg -z-20 -bottom-[60%] left-[10%]"
							></div>
						</div>
						<div className="relative z-10 black-card">
							<div className="colored-sparkles-bg" style={{backgroundImage: `url(${iconBgGradient})`}}>
								<div className="sparkles-wrapper">
									<img
										className="w-[9px] h-[9px] lg:w-[40px] lg:h-[40px]"
										src={sparkles}
										alt="sparkels"
									/>
								</div>
							</div>
							<div className="text-xs md:text-lg font-roboto text-white">
								Qwerki, share
								<span className="text-highlight">Sunday Grocery List 🥕</span>
								<br />with my wife
							</div>
						</div>
						<div
							className="absolute bg-[#F5F5F5] w-[300px] h-[300px] lg:w-[420px] lg:h-[420px] rounded-full bottom-[15%] lg:bottom-auto top-auto lg:-top-10 left-[5%] md:left-[30%] lg:left-[10%] -z-40"
						></div>
						<div
							className="flex-1 h-[300px] lg:h-[620px] flex-shrink-0 absolute -bottom-20 lg:bottom-auto lg:-top-20 left-0 md:left-[30%] lg:left-0 z-0"
						>
							<img
								className="w-full h-full flex-shrink-0"
								src={feature2BgGradient}
								alt=""
							/>
						</div>
					</div>
					<div
						className="order-1 lg:order-2 flex flex-col gap-4 blur-lg:gap-8 lg:pt-10"
					>
						<div className="pill green-pill">Never work alone</div>
						<h1 className="card-heading">Share and <br />collaborate instantly</h1>
						<p className="card-desc max-w-md pr-3">
							Qwerki is more than a personal assistant – it's your collaboration
							companion. Share notes and reminders effortlessly, collaborating
							in real-time with friends, colleagues and family.
						</p>
					</div>
				</section>
				{/*  Feature 3 */}
				<section className="feature-grid py-10 lg:py-20">
					<div className="flex flex-col gap-4 blur-lg:gap-8 pt-10">
						<div className="pill blue-pill">Reminded all the way</div>
						<h1 className="card-heading">Reminders, on <br />your terms</h1>
						<p className="card-desc max-w-md pr-3">
							Missing important dates and deadlines? Set up reminders that adapt
							to your schedule and preferences. Never miss a meeting, birthday,
							or task again
						</p>
					</div>
					<div className="relative">
						<div className="max-w-lg mx-auto">
							<div className="card relative z-10">
								<img
									className="h-7 lg:h-10 w-7 lg:w-10"
									src={clock}
									alt="clock"
								/>
								<div className="flex flex-col gap-2">
									<h2 className="text-xs md:text-lg font-roboto">
										Check-up on beehive this Saturday 🐝
									</h2>
									<div className="flex items-center gap-2">
										<p className="pill purple-pill">2:00 PM</p>
										<div className="flex items-center">
											<img
												className="h-[28px] w-[28px] rounded-full relative z-10"
												src={left1}
												alt="people"
											/>
											<img
												className="h-[28px] w-[28px] rounded-full relative -left-3"
												src={right1}
												alt="people"
											/>
										</div>
									</div>
								</div>
							</div>
							<div
								className="card flex flex-col max-w-sm ml-auto w-full my-5 relative z-10"
							>
								<div className="w-full flex justify-between border-b pb-2">
									<p className="font-semibold">Alert</p>
									<p className="flex items-center gap-2">
										<span>15 minutes before</span>
										<img
											className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] md:w-[12px] md:h-[12px]"
											src={upDown}
											alt="icon"
										/>
									</p>
								</div>
								<div className="w-full flex justify-between border-b pb-2">
									<p className="font-semibold">Alert</p>
									<p className="flex items-center gap-2">
										<span>2 hours before</span>
										<img
											className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] md:w-[12px] md:h-[12px]"
											src={upDown}
											alt="icon"
										/>
									</p>
								</div>
								<div className="w-full flex justify-between">
									<p className="font-semibold">Alert</p>
									<p className="flex items-center gap-2">
										<span>1 day before</span>
										<img
											className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] md:w-[12px] md:h-[12px]"
											src={upDown}
											alt="icon"
										/>
									</p>
								</div>
							</div>
							{/*  card 3 */}
							<div
								className="black-card rounded-full text-white justify-between relative z-10"
							>
								<p className="font-semibold">Calendar</p>
								<p className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
									<span
										className="bg-[#289800] w-2 h-2 md:w-3 md:h-3 rounded-full"
									></span>
									Household
									<img
										className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] md:w-[12px] md:h-[12px]"
										src={upDownWhiter}
										alt="icon"
									/>
								</p>
							</div>
						</div>
						<div
							className="absolute bg-[#F5F5F5] w-[300px] h-[300px] lg:w-[420px] lg:h-[420px] rounded-full top-[-15%] left-[5%] md:left-[30%] lg:left-[5%] -z-40"
						></div>
						<div
							className="flex-1 h-[620px] flex-shrink-0 absolute -top-32 -right-2 z-0"
						>
							<img
								className="w-full h-full flex-shrink-0"
								src={feature3BgGradient}
								alt=""
							/>
						</div>
					</div>
				</section>
				{/*  Feature 4 */}
				<section className="feature-grid py-10 lg:py-20">
					<div className="order-2 lg:order-1 max-w-lg mx-auto">
						<div className="mx-5 lg:mx-24 relative z-10 rounded-[30px]">
							<section className="reel-section">
								<iframe id="video-player" className="h-full w-full" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Qwerki ai personal assistant" width="640" height="360" src="https://www.youtube.com/embed/x27OhTQ9bA0?autoplay=0&amp;controls=0&amp;loop=1&amp;modestbranding=1&amp;playsinline=1&amp;rel=0&amp;showinfo=0&amp;enablejsapi=1&amp;origin=http%3A%2F%2F127.0.0.1%3A5174&amp;widgetid=3"></iframe>
							</section>
							<img src={userPowerAi} className="h-16 lg:h-32 w-16 lg:w-32 absolute -top-5 lg:-top-14 -left-5 lg:-left-14" alt="" />
							<a href="https://www.instagram.com/reel/CwgtFORyCuu/" target="_blank">
								<img src={instagram} className="h-10 lg:h-14 w-10 lg:w-14 absolute bottom-32 -right-5 lg:-right-7" alt="" />
							</a>
							<img src={plus1} className="h-5 w-5 absolute -bottom-20 lg:bottom-14 right-0 lg:-right-20" alt="" />
							<img src={plus2} className="h-16 w-16 absolute -top-16 right-5 lg:-right-32" alt="" />
							<img src={reelSparkles} className="h-14 lg:h-20 w-14 lg:w-20 absolute -bottom-16 lg:bottom-36 -left-5 lg:-left-32" alt="" />
							<div className="black-card bg-white absolute bottom-10 -left-5 lg:-left-24">
								<p className="text-xs lg:text-base font-roboto text-black italic">...just let the App work for you 🤖</p>
							</div>
							<div className="black-card rounded-full filter blur-[1px] rounded-br-3xl bg-white absolute -bottom-12 right-0 lg:-right-24">
								<p className="text-xs lg:text-base font-roboto text-black italic">Automatically added to my list...</p>
							</div>
						</div>
					</div>
					<div
						className="order-1 lg:order-2 flex flex-col gap-4 blur-lg:gap-8 lg:pt-10"
					>
						<div className="pill green-pill">Never work alone</div>
						<h1 className="card-heading">Share and <br />collaborate instantly</h1>
						<p className="card-desc max-w-md pr-3">
							Qwerki is more than a personal assistant – it's your collaboration
							companion. Share notes and reminders effortlessly, collaborating
							in real-time with friends, colleagues and family.
						</p>
					</div>
				</section>
			</div>
			<FooterSection />
		</div>
  );
};

export default LandingPage;
