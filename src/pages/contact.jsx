import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
// import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			{/* <div className="w-full flex justify-center bg-slate-100">
				<div className="max-w-5xl w-full">
					<NavBar active="contact" />
					<div className="pt-12 px-4 md:px-6 lg:px-8">
						<div className="flex justify-start pt-6">
							<div className="fixed top-4 z-10">
								<Logo width={46} />
							</div>
						</div>

						<div className="text-slate-600 text-center flex flex-col justify-around mt-20">
							<div className="text-5xl font-semibold">
								Let's Get in Touch!!!
							</div>
							<p className="text-base mt-4">
								Thank you for your interest in getting in touch
								with me. Please feel free to email me directly
								at &nbsp;
								<a
									className="text-teal-500"
									href={`mailto:${INFO.main.email}`}
								>
									{INFO.main.email}
								</a>
								. Alternatively, you can use the contact form
								below to get in touch. Simply fill out the
								required fields and I'll get back to you as soon
								as possible.
							</p>
						</div>

						<div className="flex justify-center mt-12">
							<div className="w-full lg:w-1/2">
								<Socials />
							</div>
						</div>

						<div className="mt-12">
							<Footer />
						</div>
					</div>
				</div>
				</div> */}
			<NavBar active="contact" />
			<div className="w-full flex justify-center bg-slate-100">
				<div className="max-w-7xl w-full">
					<div className="pt-20 px-4 md:px-6 lg:px-8">
						<div className="flex flex-col text-slate-600 text-center pt-10">
							<div className="text-5xl font-semibold text-left">
								Let's Get in Touch!!!
							</div>
							<p className="text-base mt-4 text-left">
								Thank you for your interest in getting in touch
								with me. Please feel free to email me directly
								at &nbsp;
								<a
									className="text-emerald-500"
									href={`mailto:${INFO.main.email}`}
								>
									{INFO.main.email}
								</a>
								. Alternatively, you can use the contact form
								below to get in touch. Simply fill out the
								required fields and I'll get back to you as soon
								as possible.
							</p>
							<div className="pt-12 pb-12">
								<Socials />
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

export default Contact;
