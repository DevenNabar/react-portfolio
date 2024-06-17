// import React, { useEffect } from "react";
// // import { useState } from "react";
// import { Helmet } from "react-helmet";

// import NavBar from "../components/common/navBar";
// import Footer from "../components/common/footer";
// // import Logo from "../components/common/logo";
// import Socials from "../components/about/socials";

// import INFO from "../data/user";
// import SEO from "../data/seo";

// const Contact = () => {
// 	useEffect(() => {
// 		window.scrollTo(0, 0);
// 	}, []);

// 	const currentSEO = SEO.find((item) => item.page === "contact");
// 	// const [name, setName] = useState("");
// 	// const [message, setMessage] = useState("");
// 	// console.log(name, message);

// 	return (
// 		<React.Fragment>
// 			<Helmet>
// 				<title>{`Contact | ${INFO.main.title}`}</title>
// 				<meta name="description" content={currentSEO.description} />
// 				<meta
// 					name="keywords"
// 					content={currentSEO.keywords.join(", ")}
// 				/>
// 			</Helmet>

// 			<NavBar active="contact" />
// 			<div className="w-full min-h-screen flex justify-center bg-slate-100">
// 				<div className="max-w-7xl w-full">
// 					<div className="pt-20 px-4 md:px-6 lg:px-8">
// 						<div className="flex flex-col text-slate-600 text-center pt-10">
// 							<div className="text-5xl font-semibold text-left">
// 								Let's Get in Touch!
// 							</div>
// 							<p className="text-base mt-4 text-left">
// 								Thank you for your interest in getting in touch
// 								with me. Please feel free to email me directly
// 								at &nbsp;
// 								<a
// 									className="text-emerald-500"
// 									href={`mailto:${INFO.main.email}`}
// 								>
// 									{INFO.main.email}
// 								</a>
// 								. Alternatively, you can use the contact form
// 								below to get in touch. Simply fill out the
// 								required fields and I'll get back to you as soon
// 								as possible.
// 							</p>
// 							<div className="pt-12 pb-12">
// 								<Socials />
// 							</div>

// 							{/* Start Form */}
// 							{/* <div>
// 								<form
// 									name="contact"
// 									method="POST"
// 									data-netlify="true"
// 								>
// 									<input
// 										type="hidden"
// 										name="form-name"
// 										value="contact"
// 									/>
// 									<div className="input">
// 										<label htmlFor="name">Name</label>
// 										<input
// 											type="text"
// 											id="name"
// 											name="name"
// 											placeholder="Your Name"
// 											value={name}
// 											onChange={(e) =>
// 												setName(e.target.value)
// 											}
// 										/>
// 									</div>
// 									<div className="input">
// 										<label htmlFor="message">Message</label>
// 										<textarea
// 											id="message"
// 											name="message"
// 											placeholder="Your Message"
// 											value={message}
// 											onChange={(e) =>
// 												setMessage(e.target.value)
// 											}
// 										></textarea>
// 									</div>
// 									<button type="submit">Send Message</button>
// 								</form>
// 							</div> */}
// 						</div>

// 						<div className="mt-12">
// 							<Footer />
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</React.Fragment>
// 	);
// };

// export default Contact;
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
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
			<div className="flex flex-col min-h-screen w-full bg-slate-100">
				{" "}
				{/* Updated container for sticky footer */}
				<div className="flex-grow">
					{" "}
					{/* Content grows to take available space */}
					<div className="max-w-7xl w-full mx-auto px-4 md:px-6 lg:px-8 pt-20">
						<div className="flex flex-col text-slate-600 text-center pt-10">
							<h1 className="text-5xl font-semibold text-left">
								Let's Get in Touch!
							</h1>
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
								{/* . Alternatively, you can use the contact form
								below to get in touch. Simply fill out the
								required fields and I'll get back to you as soon
								as possible. */}
							</p>
							<div className="pt-12 pb-12">
								<Socials />
							</div>
						</div>
					</div>
				</div>
				<div className=" max-w-7xl w-full mx-auto px-4 md:px-6 lg:px-8">
					<Footer />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
