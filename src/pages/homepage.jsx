import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";

import INFO from "../data/user";
import SEO from "../data/seo";
import Technology from "../data/technology";
import CardsGrid from "../components/common/cardsGrid";

const Homepage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<NavBar active="home" />
			<div className="w-full flex justify-center bg-slate-100">
				<div className="max-w-7xl w-full">
					<div className="pt-20 px-4 md:px-6 lg:px-8">
						<div className="flex flex-col lg:flex-row lg:space-x-8 pt-10">
							<div className="lg:w-2/3 text-slate-600 rounded-lg ">
								<div>
									<div className="text-5xl font-semibold py-1 m-4">
										{INFO.homepage.title1}
									</div>
									<div className="text-5xl font-semibold py-1 m-4">
										{INFO.homepage.title2}
									</div>
									<div className="text-5xl font-semibold py-1 m-4">
										{INFO.homepage.title3}
									</div>
									<div className="text-5xl font-semibold py-1 m-4">
										{INFO.homepage.title4}
									</div>
								</div>
								<div className="text-base py-4 m-4">
									{INFO.homepage.description}
								</div>
							</div>
							<div className="lg:w-1/3">
								<div className="overflow-hidden transform rounded-lg  ">
									<img
										src="homepage.jpg"
										alt="Homepage"
										className="block w-[95%] rounded-lg justify-center h-[95%] object-cover mx-auto"
									/>
								</div>
							</div>
						</div>
						<div className="text-5xl font-semibold m-4 text-slate-600 text-left py-10">
							Projects.
						</div>
						<div>
							<CardsGrid />
						</div>
						<div>
							<Technology />
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

export default Homepage;

// added env
