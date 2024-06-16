import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
// import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import WorkExp from "../components/about/workexp";

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

			<NavBar active="about" />
			<div className="w-full flex justify-center bg-slate-100">
				<div className="max-w-7xl w-full ">
					<div className="pt-20 px-4 md:px-6 lg:px-8">
						<div className="flex flex-col lg:flex-row lg:space-x-8 pt-10">
							<div className="lg:w-2/3  text-slate-600">
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
								<div className=" overflow-hidden  transform rounded-lg ">
									<img
										src="about.jpg"
										alt="About"
										className="block w-full"
									/>
								</div>
							</div>
						</div>

						<WorkExp />

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
