import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

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

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
// // TAILWIND START

// import React, { useEffect } from "react";
// import { Helmet } from "react-helmet";

// import NavBar from "../components/common/navBar";
// import Footer from "../components/common/footer";
// import Logo from "../components/common/logo";
// import Socials from "../components/about/socials";

// import INFO from "../data/user";
// import SEO from "../data/seo";

// const About = () => {
// 	useEffect(() => {
// 		window.scrollTo(0, 0);
// 	}, []);

// 	const currentSEO = SEO.find((item) => item.page === "about");

// 	return (
// 		<>
// 			<Helmet>
// 				<title>{`About | ${INFO.main.title}`}</title>
// 				<meta name="description" content={currentSEO.description} />
// 				<meta
// 					name="keywords"
// 					content={currentSEO.keywords.join(", ")}
// 				/>
// 			</Helmet>

// 			<div className="flex flex-col min-h-screen">
// 				<NavBar active="about" />
// 				<div className="flex flex-col flex-grow">
// 					<div className="flex justify-start pt-6 pl-6">
// 						<div className="fixed border border-white rounded-full shadow-md top-4">
// 							<Logo width={46} />
// 						</div>
// 					</div>

// 					<div className="flex flex-col flex-grow pt-24">
// 						<div className="flex flex-col lg:flex-row">
// 							<div className="flex flex-col lg:flex-row flex-grow">
// 								<div className="lg:basis-4/5">
// 									<h1 className="text-3xl font-bold">
// 										{INFO.about.title}
// 									</h1>
// 									<p className="mt-4 text-lg">
// 										{INFO.about.description}
// 									</p>
// 								</div>

// 								<div className="lg:basis-1/4 flex flex-col">
// 									<div className="rounded-full overflow-hidden shadow-xl transform rotate-0 mb-4">
// 										<img
// 											src="about.jpg"
// 											alt="about"
// 											className="block w-full"
// 										/>
// 									</div>
// 									<div className="pt-12 pb-12">
// 										<Socials />
// 									</div>
// 								</div>
// 							</div>
// 							<div className="lg:hidden pt-8">
// 								<Socials />
// 							</div>
// 						</div>
// 					</div>
// 					<div className="mt-auto">
// 						<Footer />
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// };

// export default About;
// // TAILWIND END
