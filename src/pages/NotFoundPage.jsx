import { heroBg } from "../assets/images";


const NotFoundPage = () => {
  return (
    <>
    <section className="hero-section" style={{backgroundImage: `url(${heroBg})`}}>
				<div className="flex flex-col gap-5">
					<h1 className="main-heading text-center">
            Page Not Found
					</h1>
				</div>
			</section>
    </>
  );
};

export default NotFoundPage;
