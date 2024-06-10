// import React from "react";
// import { Link } from "react-router-dom";

// import "./styles/navBar.css";

// const NavBar = (props) => {
// 	const { active } = props;

// 	return (
// 		<React.Fragment>
// 			<div className="nav-container">
// 				<nav className="navbar">
// 					<div className="nav-background">
// 						<ul className="nav-list">
// 							<li
// 								className={
// 									active === "home"
// 										? "nav-item active"
// 										: "nav-item"
// 								}
// 							>
// 								<Link to="/">Home</Link>
// 							</li>
// 							<li
// 								className={
// 									active === "about"
// 										? "nav-item active"
// 										: "nav-item"
// 								}
// 							>
// 								<Link to="/about">About</Link>
// 							</li>
// 							<li
// 								className={
// 									active === "projects"
// 										? "nav-item active"
// 										: "nav-item"
// 								}
// 							>
// 								<Link to="/projects">Projects</Link>
// 							</li>
// 							<li
// 								className={
// 									active === "articles"
// 										? "nav-item active"
// 										: "nav-item"
// 								}
// 							>
// 								<Link to="/articles">Articles</Link>
// 							</li>
// 							<li
// 								className={
// 									active === "contact"
// 										? "nav-item active"
// 										: "nav-item"
// 								}
// 							>
// 								<Link to="/contact">Contact</Link>
// 							</li>
// 							<li className="nav-item">
// 								<a
// 									href="Deven_Nabar_Resume.pdf"
// 									download="Deven_Nabar_Resume.pdf"
// 								>
// 									Resume
// 								</a>
// 							</li>
// 						</ul>
// 					</div>
// 				</nav>
// 			</div>
// 		</React.Fragment>
// 	);
// };

// export default NavBar;

// -----NEW TAILWIND ------

// import React from "react";
// import { Link } from "react-router-dom";

// const NavBar = (props) => {
// 	const { active } = props;

// 	return (
// 		<React.Fragment>
// 			<div className="flex justify-center items-center w-full">
// 				<nav className="flex justify-center items-center fixed top-3 z-50 w-full">
// 					<div className="w-96 h-10 backdrop-blur-md shadow-2xl rounded-full">
// 						<ul className="flex justify-between items-center w-full pl-0 pr-5 py-3 list-none">
// 							<li
// 								className={
// 									active === "home"
// 										? "font-bold text-sm text-primary hover:text-link-color transition-colors duration-300"
// 										: "text-sm"
// 								}
// 							>
// 								<Link to="/">Home</Link>
// 							</li>
// 							<li
// 								className={
// 									active === "about"
// 										? "font-bold text-sm text-primary hover:text-link-color transition-colors duration-300"
// 										: "text-sm"
// 								}
// 							>
// 								<Link to="/about">About</Link>
// 							</li>
// 							<li
// 								className={
// 									active === "projects"
// 										? "font-bold text-sm text-primary hover:text-link-color transition-colors duration-300"
// 										: "text-sm"
// 								}
// 							>
// 								<Link to="/projects">Projects</Link>
// 							</li>
// 							{/* <li
// 								className={
// 									active === "articles"
// 										? "font-bold text-lg text-primary hover:text-link-color transition-colors duration-300"
// 										: "text-lg"
// 								}
// 							>
// 								<Link to="/articles">Articles</Link>
// 							</li> */}
// 							<li
// 								className={
// 									active === "contact"
// 										? "font-bold text-sm text-primary hover:text-link-color transition-colors duration-300"
// 										: "text-sm"
// 								}
// 							>
// 								<Link to="/contact">Contact</Link>
// 							</li>
// 							<li className="text-sm">
// 								<a
// 									href="Deven_Nabar_Resume.pdf"
// 									download="Deven_Nabar_Resume.pdf"
// 								>
// 									Resume
// 								</a>
// 							</li>
// 						</ul>
// 					</div>
// 				</nav>
// 			</div>
// 		</React.Fragment>
// 	);
// };

// export default NavBar;

// -----------------
// SECOND TAILWIND - working fine
// import React from "react";
// import { Link } from "react-router-dom";

// const NavBar = (props) => {
// 	const { active } = props;

// 	// Function to determine the appropriate class for each navigation link
// 	const navLinkClass = (linkName) => {
// 		return active === linkName
// 			? "font-bold text-sm text-link-color hover:text-link-color transition-colors duration-300" // Active state: link color
// 			: "text-sm text-primary hover:text-link-color transition-colors duration-300"; // Default state: primary color, hover to link color
// 	};

// 	return (
// 		<React.Fragment>
// 			<div className="flex justify-center items-center w-full">
// 				<nav className="flex justify-center items-center fixed top-3 z-50 w-full">
// 					<div className="w-96 h-10 backdrop-blur-md shadow-2xl rounded-full">
// 						<ul className="flex justify-between items-center w-full pl-0 pr-5 py-3 list-none">
// 							<li className={navLinkClass("home")}>
// 								<Link to="/">Home</Link>
// 							</li>
// 							<li className={navLinkClass("about")}>
// 								<Link to="/about">About</Link>
// 							</li>
// 							<li className={navLinkClass("projects")}>
// 								<Link to="/projects">Projects</Link>
// 							</li>
// 							<li className={navLinkClass("contact")}>
// 								<Link to="/contact">Contact</Link>
// 							</li>
// 							<li className="text-sm text-primary hover:text-link-color transition-colors duration-300">
// 								<a
// 									href="Deven_Nabar_Resume.pdf"
// 									download="Deven_Nabar_Resume.pdf"
// 								>
// 									Resume
// 								</a>
// 							</li>
// 						</ul>
// 					</div>
// 				</nav>
// 			</div>
// 		</React.Fragment>
// 	);
// };

// export default NavBar;

// -----------------
// THIRD TAILWIND - working fine centering the text
import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
	const { active } = props;

	// Function to determine the appropriate class for each navigation link
	const navLinkClass = (linkName) => {
		return active === linkName
			? "font-black text-sm text-link-color hover:text-link-color transition-colors duration-300"
			: "text-sm text-primary hover:text-link-color transition-colors duration-300";
	};

	return (
		<React.Fragment>
			<div className="flex justify-center items-center w-full">
				<nav className="flex justify-center items-center fixed top-3 z-50 w-full">
					<div className="w-96 h-10 backdrop-blur-md shadow-2xl rounded-full flex justify-center items-center">
						<ul className="flex justify-around items-center w-full pl-2 pr-2 py-3 list-none">
							<li className={navLinkClass("home")}>
								<Link to="/">Home</Link>
							</li>
							<li className={navLinkClass("about")}>
								<Link to="/about">About</Link>
							</li>
							<li className={navLinkClass("projects")}>
								<Link to="/projects">Projects</Link>
							</li>
							<li className={navLinkClass("contact")}>
								<Link to="/contact">Contact</Link>
							</li>
							<li className="text-sm text-primary hover:text-link-color transition-colors duration-300  ">
								<a
									href="Deven_Nabar_Resume.pdf"
									download="Deven_Nabar_Resume.pdf"
								>
									Resume
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
