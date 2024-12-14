import { logo } from "../assets/images";
import { rightBlack } from "../assets/icons";
import { NavLink } from "react-router-dom";

const HeaderSection = () => {
  return (
    <header className="navbar">
		<div className="flex justify-between items-center py-6 px-5 lg:px-20">
			<img
				className="w-20 lg:w-28 h-8 lg:h-10"
				src={logo}
				alt="logo"
			/>
			<nav
				className="bg-black/75 p-2 rounded-full flex items-center gap-3 lg:gap-5"
			>
			<NavLink exact to="/" className="nav-item" activeClassName="active">Home</NavLink>
			<a href="#feature_section_start" className="nav-item" activeClassName="active">Features</a>
			<NavLink to="/about" className="nav-item" activeClassName="active">About</NavLink>
			</nav>
			<a
				href="#footer-section"
				className="hidden lg:flex items-center justify-center gap-3 bg-black py-2.5 px-5 text-white rounded-full"
			>
				<p className="font-bold">Get early access</p>
				<img
					className="h-[10px] w-[10px] mt-0.5 md:mt-1"
					src={rightBlack}
					alt=""
				/>
			</a>
		</div>
	</header>
  );
};

export default HeaderSection;
