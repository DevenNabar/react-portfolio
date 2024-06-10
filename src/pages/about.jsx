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

			<div
				className="w-full flex justify-center"
				style={{ backgroundColor: "#f1f5f9" }}
			>
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
								<div className="text-xl font-semibold">
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
