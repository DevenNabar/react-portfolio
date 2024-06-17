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

			<NavBar active="contact" />
			<div className="w-full flex justify-center bg-slate-100">
				<div className="max-w-7xl w-full">
					<div className="pt-20 px-4 md:px-6 lg:px-8">
						<div className="flex flex-col text-slate-600 text-center pt-10">
							<div className="text-5xl font-semibold text-left">
								Let's Get in Touch!
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
							<div class="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
								<form
									name="contact"
									method="POST"
									data-netlify="true"
									class="space-y-6"
								>
									<div>
										<label class="block text-sm font-medium text-gray-700">
											Your Name:
											<input
												type="text"
												name="name"
												class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
											/>
										</label>
									</div>
									<div>
										<label class="block text-sm font-medium text-gray-700">
											Your Email:
											<input
												type="email"
												name="email"
												class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
											/>
										</label>
									</div>
									<div>
										<label class="block text-sm font-medium text-gray-700">
											Message:
											<textarea
												name="message"
												class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
											></textarea>
										</label>
									</div>
									<div>
										<button
											type="submit"
											class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										>
											Send
										</button>
									</div>
								</form>
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
