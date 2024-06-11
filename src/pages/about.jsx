// import React, { useEffect } from "react";
// import { Helmet } from "react-helmet";

// import NavBar from "../components/common/navBar";
// import Footer from "../components/common/footer";
// import Logo from "../components/common/logo";
// import Socials from "../components/about/socials";

// import INFO from "../data/user";
// import SEO from "../data/seo";

// import "./styles/about.css";

// const About = () => {
// 	useEffect(() => {
// 		window.scrollTo(0, 0);
// 	}, []);

// 	const currentSEO = SEO.find((item) => item.page === "about");

// 	return (
// 		<React.Fragment>
// 			<Helmet>
// 				<title>{`About | ${INFO.main.title}`}</title>
// 				<meta name="description" content={currentSEO.description} />
// 				<meta
// 					name="keywords"
// 					content={currentSEO.keywords.join(", ")}
// 				/>
// 			</Helmet>

// 			<div className="page-content">
// 				<NavBar active="about" />
// 				<div className="content-wrapper">
// 					<div className="about-logo-container">
// 						<div className="about-logo">
// 							<Logo width={46} />
// 						</div>
// 					</div>

// 					<div className="about-container">
// 						<div className="about-main">
// 							<div className="about-right-side">
// 								<div className="title about-title">
// 									{INFO.about.title}
// 								</div>

// 								<div className="subtitle about-subtitle">
// 									{INFO.about.description}
// 								</div>
// 							</div>

// 							<div className="about-left-side">
// 								<div className="about-image-container">
// 									<div className="about-image-wrapper">
// 										<img
// 											src="about.jpg"
// 											alt="about"
// 											className="about-image"
// 										/>
// 									</div>
// 								</div>

// 								<div className="about-socials">
// 									<Socials />
// 								</div>
// 							</div>
// 						</div>
// 						<div className="about-socials-mobile">
// 							<Socials />
// 						</div>
// 					</div>
// 					<div className="page-footer">
// 						<Footer />
// 					</div>
// 				</div>
// 			</div>
// 		</React.Fragment>
// 	);
// };

// export default About;

import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";
import EXPERIENCE from "../data/experience";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="w-full flex justify-center bg-slate-100">
				<div className="max-w-5xl w-full ">
					<NavBar active="about" />
					<div className="pt-12 px-4 md:px-6 lg:px-8">
						<div className="flex justify-start pt-6">
							<div className="fixed top-4 z-10">
								<Logo width={46} />
							</div>
						</div>

						<div className="flex flex-col lg:flex-row lg:space-x-8 pt-10">
							<div className="lg:w-2/3  text-gray-600">
								<div className="text-5xl font-semibold">
									{INFO.about.title}
								</div>
								<div className="text-base mt-4">
									{INFO.about.description}
								</div>
								<div className="hidden lg:block pt-12 pb-12">
									<Socials />
								</div>
							</div>
							<div className="lg:w-1/3">
								<div className="rounded-full overflow-hidden shadow-2xl transform">
									<img
										src="about.jpg"
										alt="about"
										className="block w-full"
									/>
								</div>
							</div>
						</div>

						{/* START OF WORK EXPERIENCE COMPONENT */}
						<div className="my-6">
							<div className="text-5xl font-semibold text-slate-600">
								Work Experience
							</div>
							{EXPERIENCE.map((exp, index) => (
								<div
									key={index}
									className="relative pl-8 sm:pl-32 py-6 group"
								>
									<div className="font-caveat font-medium text-xl text-emerald-500 mb-1 sm:mb-0">
										{exp.title}
									</div>
									<div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-emerald-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-emerald-600 after:border-4 after:box-content after:border-emerald-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
										<time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
											{exp.date}
										</time>
										<div className="text-xl font-bold text-slate-500">
											{exp.company}
										</div>
									</div>
									<div className="text-slate-500">
										{exp.description}
									</div>
								</div>
							))}
						</div>

						{/* END OF THAT COMPONENT */}

						<div className="mt-12">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
