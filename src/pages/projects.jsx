import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import INFO from "../data/user";
import SEO from "../data/seo";
import CardsGrid from "../components/common/cardsGrid";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Project | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<NavBar active="projects" />
			<div className="w-full flex justify-center bg-slate-100">
				<div className="max-w-7xl w-full ">
					<div className="pt-20 px-4 md:px-6 lg:px-8">
						<div className="text-5xl font-semibold m-4 text-slate-600 text-left pt-5">
							Projects.
						</div>
						<div className="flex flex-col lg:flex-row lg:space-x-8 pt-10 justify-center">
							<CardsGrid />
						</div>
					</div>

					<div className="mt-12">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
