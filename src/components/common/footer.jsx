// import React from "react";
// import { Link } from "react-router-dom";

// import "./styles/footer.css";

// const Footer = () => {
// 	return (
// 		<React.Fragment>
// 			<div className="footer">
// 				<div className="footer-links">
// 					<ul className="footer-nav-link-list">
// 						<li className="footer-nav-link-item">
// 							<Link to="/">Home</Link>
// 						</li>
// 						<li className="footer-nav-link-item">
// 							<Link to="/about">About</Link>
// 						</li>
// 						<li className="footer-nav-link-item">
// 							<Link to="/projects">Projects</Link>
// 						</li>
// 						<li className="footer-nav-link-item">
// 							<Link to="/articles">Articles</Link>
// 						</li>
// 						<li className="footer-nav-link-item">
// 							<Link to="/contact">Contact</Link>
// 						</li>
// 						<li className="footer-nav-link-item">
// 							<a
// 								href="Deven_Nabar_Resume.pdf"
// 								download="Deven_Nabar_Resume.pdf"
// 							>
// 								Resume
// 							</a>
// 						</li>
// 					</ul>
// 				</div>

// 				<div className="footer-credits">
// 					<div className="footer-credits-text">
// 						© 2024 dnabar.me. All Rights Reserved.
// 					</div>
// 				</div>
// 			</div>
// 		</React.Fragment>
// 	);
// };

// export default Footer;
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="flex flex-col md:flex-row justify-between items-center py-6 mt-12 border-t">
			<ul className="flex justify-around items-center flex-wrap w-full md:w-auto space-x-4 md:space-x-8 text-sm font-bold text-gray-600">
				<li>
					<Link
						to="/"
						className="hover:text-link-color transition-colors duration-300"
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						to="/about"
						className="hover:text-link-color transition-colors duration-300"
					>
						About
					</Link>
				</li>
				<li>
					<Link
						to="/projects"
						className="hover:text-link-color transition-colors duration-300"
					>
						Projects
					</Link>
				</li>
				{/* <li>
					<Link
						to="/articles"
						className="hover:text-link-color transition-colors duration-300"
					>
						Articles
					</Link>
				</li> */}
				<li>
					<Link
						to="/contact"
						className="hover:text-link-color transition-colors duration-300"
					>
						Contact
					</Link>
				</li>
				<li>
					<a
						href="Deven_Nabar_Resume.pdf"
						download="Deven_Nabar_Resume.pdf"
						className="hover:text-link-color transition-colors duration-300"
					>
						Resume
					</a>
				</li>
			</ul>
			<div className="text-right w-full md:w-auto text-xs text-gray-500">
				© 2024 dnabar.me. All Rights Reserved.
			</div>
		</div>
	);
};

export default Footer;
