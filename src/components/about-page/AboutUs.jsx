const AboutUs = () => {
  return (
    <section className="my-4 lg:my-10 flex justify-center">
      <div className="px-5 lg:px-20 w-full lg:w-1/2 flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-6">
        <div className="pill purple-pill">
          Personal motivation
        </div>
        <h1 className="card-heading">
          About Us
        </h1>
        <div className="flex flex-col gap-1 sm:gap-1.5 md:gap-3 lg:gap-4 text-[#686868]">
          <p className="description">
            At Qwerki, we are driven by a deep passion for the limitless
            capabilities of artificial intelligence and technology. We firmly
            believe that when harnessed wisely, AI can elevate human potential
            and significantly enrich our lives.
          </p>
          <p className="description">
            Our journey began with the realization that human-assisted AI has
            the power to transform the way we live, work, and connect. We are on
            a mission to create AI models that not only assist but also empower
            individuals to lead more meaningful and impactful lives.
          </p>
          <p className="description">
            We are committed to breaking down barriers and making the benefits
            of AI accessible to all. Our team is dedicated to developing
            intuitive and user-friendly solutions that seamlessly integrate with
            your daily routines, helping you organize, remember, and accomplish
            more.
          </p>
          <p className="description">
            With every innovation we create, we aim to bridge the gap between
            cutting-edge technology and everyday life. Our goal is to empower
            you with tools that amplify your abilities, allowing you to focus on
            what truly matters while our AI works alongside you.
          </p>
          <p className="description">
            Welcome to Qwerki, where we combine the potential of AI with our
            passion for human potential, with the ultimate aim of enhancing the
            way you experience the world and enabling you to make your mark in
            ways you've never imagined.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
