import FooterSection from "../components/FooterSection";
import HeaderSection from "../components/HeaderSection";
import AboutUs from "../components/about-page/AboutUs";
import HeroSection from "../components/about-page/HeroSection";
import QuestionAnswer from "../components/about-page/QuestionAnswer";

const AboutPage = () => {
  return (
    <div className="container">
      {/*  Header  */}
			<HeaderSection />
      <HeroSection />
      <AboutUs />
      <QuestionAnswer />
      <FooterSection />
    </div>
  );
};

export default AboutPage;
