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

			{/* <div className="flex flex-col min-h-screen bg-slate-100">
				<NavBar active="home" />
				<div className="flex-grow flex justify-center items-center">
					<div className="w-full max-w-7xl p-20">
						<div className="pt-9 grid grid-cols-4 gap-8">
							<div className="col-span-2 flex flex-col justify-center p-2 text-slate-600">
								<div className="font-bold mb-4">
									<div className="text-8xl py-3">
										{INFO.homepage.title1}
									</div>
									<div className="text-7xl py-3">
										{INFO.homepage.title2}
									</div>
									<div className="text-5xl py-3">
										{INFO.homepage.title3}
									</div>
									<div className="text-5xl py-3">
										{INFO.homepage.title4}
									</div>
								</div>
							</div>
							<div className="col-span-2 md:block-hidden">
								<div className="rounded-lg overflow-hidden">
									<img
										src="homepage.jpg"
										alt="about"
										className="w-full h-full object-cover"
									/>
								</div>
							</div>
							<div className="col-span-4 text-base p-2">
								{INFO.homepage.description}
							</div>
						</div>

						<div className="pt-10">
							<AllProjects />
						</div>

						<Footer />
					</div>
				</div>
			</div> */}
			<NavBar active="home" />
			<div className="w-full flex justify-center bg-slate-100">
				<div className="max-w-7xl w-full">
					<div className="pt-20 px-4 md:px-6 lg:px-8">
						<div className="flex flex-col lg:flex-row lg:space-x-8 pt-10">
							<div className="lg:w-2/3 text-slate-600">
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
								<div className="overflow-hidden transform rounded-lg hover:scale-110 transition duration-300">
									<img
										src="homepage.jpg"
										alt="Homepage"
										className="block w-[95%] rounded-lg justify-center h-[95%] object-cover mx-auto"
									/>
								</div>
							</div>
						</div>
						<div className="text-5xl font-semibold m-4 text-slate-600 text-left py-10">
							Projects
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
