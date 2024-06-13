// import React from "react";
// import { Link } from "react-router-dom";

// const NavBar = ({ active }) => {
// 	// Function to determine the appropriate class for each navigation link
// 	const navLinkClass = (linkName) => {
// 		const baseClass =
// 			"block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
// 		return active === linkName
// 			? `${baseClass} text-white bg-blue-700 md:bg-transparent md:text-blue-700`
// 			: baseClass;
// 	};

// 	return (
// 		<nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full z-50">
// 			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
// 				<a
// 					href="/"
// 					className="flex items-center space-x-3 rtl:space-x-reverse"
// 				>
// 					<img src="logo.png" className="h-8" alt="Flowbite Logo" />
// 					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
// 						Deven Nabar
// 					</span>
// 				</a>
// 				<button
// 					data-collapse-toggle="navbar-default"
// 					type="button"
// 					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
// 					aria-controls="navbar-default"
// 					aria-expanded="false"
// 				>
// 					<span className="sr-only">Open main menu</span>
// 				</button>
// 				<div
// 					className="hidden w-full md:block md:w-auto"
// 					id="navbar-default"
// 				>
// 					<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
// 						<li>
// 							<Link to="/" className={navLinkClass("home")}>
// 								Home
// 							</Link>
// 						</li>
// 						<li>
// 							<Link to="/about" className={navLinkClass("about")}>
// 								About
// 							</Link>
// 						</li>
// 						<li>
// 							<Link
// 								to="/projects"
// 								className={navLinkClass("projects")}
// 							>
// 								Projects
// 							</Link>
// 						</li>
// 						<li>
// 							<Link
// 								to="/contact"
// 								className={navLinkClass("contact")}
// 							>
// 								Contact
// 							</Link>
// 						</li>
// 						<li>
// 							<a
// 								href="Deven_Nabar_Resume.pdf"
// 								download="Deven_Nabar_Resume.pdf"
// 								className="text-sm text-primary hover:text-link-color transition-colors duration-300 dark:text-white md:dark:hover:text-blue-500"
// 							>
// 								Resume
// 							</a>
// 						</li>
// 					</ul>
// 				</div>
// 			</div>
// 		</nav>
// 	);
// };

// export default NavBar;

import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ active }) => {
	// Function to determine the appropriate class for each navigation link
	const navLinkClass = (linkName) => {
		const baseClass =
			"block py-2 px-3 rounded hover:bg-slate-200 md:hover:bg-transparent md:border-0 md:hover:text-emerald-700 md:p-0 dark:text-slate-300 md:dark:hover:text-emerald-500 dark:hover:bg-slate-700 dark:hover:text-slate-300 md:dark:hover:bg-transparent text-sm font-medium";
		return active === linkName
			? `${baseClass} text-slate-300 bg-emerald-700 md:bg-transparent md:text-emerald-700`
			: baseClass;
	};

	return (
		<nav className="bg-slate-50 border-slate-200 dark:bg-slate-900 fixed top-0 left-0 w-full z-50">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<a
					href="/"
					className="flex items-center space-x-3 rtl:space-x-reverse"
				>
					<img src="logo.png" className="h-8" alt="Logo" />
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-slate-300">
						Deven Nabar
					</span>
				</a>
				<button
					data-collapse-toggle="navbar-default"
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600"
					aria-controls="navbar-default"
					aria-expanded="false"
				>
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16m-7 6h7"
						/>
					</svg>
				</button>
				<div
					className="hidden w-full md:block md:w-auto"
					id="navbar-default"
				>
					<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-slate-100 rounded-lg bg-slate-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-slate-800 md:dark:bg-slate-900 dark:border-slate-700">
						<li>
							<Link to="/" className={navLinkClass("home")}>
								Home
							</Link>
						</li>
						<li>
							<Link to="/about" className={navLinkClass("about")}>
								About
							</Link>
						</li>
						<li>
							<Link
								to="/projects"
								className={navLinkClass("projects")}
							>
								Projects
							</Link>
						</li>
						<li>
							<Link
								to="/contact"
								className={navLinkClass("contact")}
							>
								Contact
							</Link>
						</li>
						<li>
							<a
								href="Deven_Nabar_Resume.pdf"
								download="Deven_Nabar_Resume.pdf"
								className={navLinkClass("resume")} // Apply the same theme as other links
							>
								Resume
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
