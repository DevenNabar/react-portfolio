// // import React, { useEffect } from "react";
// // // import { useState } from "react";
// // import { Helmet } from "react-helmet";

// // import NavBar from "../components/common/navBar";
// // import Footer from "../components/common/footer";
// // // import Logo from "../components/common/logo";
// // import Socials from "../components/about/socials";

// // import INFO from "../data/user";
// // import SEO from "../data/seo";

// // const Contact = () => {
// // 	useEffect(() => {
// // 		window.scrollTo(0, 0);
// // 	}, []);

// // 	const currentSEO = SEO.find((item) => item.page === "contact");
// // 	// const [name, setName] = useState("");
// // 	// const [message, setMessage] = useState("");
// // 	// console.log(name, message);

// // 	return (
// // 		<React.Fragment>
// // 			<Helmet>
// // 				<title>{`Contact | ${INFO.main.title}`}</title>
// // 				<meta name="description" content={currentSEO.description} />
// // 				<meta
// // 					name="keywords"
// // 					content={currentSEO.keywords.join(", ")}
// // 				/>
// // 			</Helmet>

// // 			<NavBar active="contact" />
// // 			<div className="w-full min-h-screen flex justify-center bg-slate-100">
// // 				<div className="max-w-7xl w-full">
// // 					<div className="pt-20 px-4 md:px-6 lg:px-8">
// // 						<div className="flex flex-col text-slate-600 text-center pt-10">
// // 							<div className="text-5xl font-semibold text-left">
// // 								Let's Get in Touch!
// // 							</div>
// // 							<p className="text-base mt-4 text-left">
// // 								Thank you for your interest in getting in touch
// // 								with me. Please feel free to email me directly
// // 								at &nbsp;
// // 								<a
// // 									className="text-emerald-500"
// // 									href={`mailto:${INFO.main.email}`}
// // 								>
// // 									{INFO.main.email}
// // 								</a>
// // 								. Alternatively, you can use the contact form
// // 								below to get in touch. Simply fill out the
// // 								required fields and I'll get back to you as soon
// // 								as possible.
// // 							</p>
// // 							<div className="pt-12 pb-12">
// // 								<Socials />
// // 							</div>

// // 							{/* Start Form */}
// // 							{/* <div>
// // 								<form
// // 									name="contact"
// // 									method="POST"
// // 									data-netlify="true"
// // 								>
// // 									<input
// // 										type="hidden"
// // 										name="form-name"
// // 										value="contact"
// // 									/>
// // 									<div className="input">
// // 										<label htmlFor="name">Name</label>
// // 										<input
// // 											type="text"
// // 											id="name"
// // 											name="name"
// // 											placeholder="Your Name"
// // 											value={name}
// // 											onChange={(e) =>
// // 												setName(e.target.value)
// // 											}
// // 										/>
// // 									</div>
// // 									<div className="input">
// // 										<label htmlFor="message">Message</label>
// // 										<textarea
// // 											id="message"
// // 											name="message"
// // 											placeholder="Your Message"
// // 											value={message}
// // 											onChange={(e) =>
// // 												setMessage(e.target.value)
// // 											}
// // 										></textarea>
// // 									</div>
// // 									<button type="submit">Send Message</button>
// // 								</form>
// // 							</div> */}
// // 						</div>

// // 						<div className="mt-12">
// // 							<Footer />
// // 						</div>
// // 					</div>
// // 				</div>
// // 			</div>
// // 		</React.Fragment>
// // 	);
// // };

// // export default Contact;
// import React, { useEffect } from "react";
// import { Helmet } from "react-helmet";
// import { useState } from "react";

// import NavBar from "../components/common/navBar";
// import Footer from "../components/common/footer";
// import Socials from "../components/about/socials";

// import INFO from "../data/user";
// import SEO from "../data/seo";

// const Contact = () => {
// 	useEffect(() => {
// 		window.scrollTo(0, 0);
// 	}, []);

// 	const currentSEO = SEO.find((item) => item.page === "contact");
// 	const [name, setName] = useState("");
// 	const [message, setMessage] = useState("");
// 	const [email, setEmail] = useState("");
// 	const handleSubmit = async (event) => {
// 		event.preventDefault();
// 		console.log(name, email, message);
// 		if (name && email && message) {
// 			try {
// 				const response = await fetch("/.netlify/functions/send", {
// 					method: "POST",
// 					headers: { "Content-Type": "application/json" },
// 					body: JSON.stringify({
// 						name,
// 						email,
// 						message,
// 					}),
// 				});
// 				const data = await response.json();

// 				if (response.ok) {
// 					console.log("submitted successfully");
// 					setName("");
// 					setEmail("");
// 					setMessage("");
// 				} else {
// 					throw new Error(data.message || "Something went wrong");
// 				}
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		} else {
// 			console.log("Please fill out all fields");
// 		}
// 	};
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
// 			<div className="flex flex-col min-h-screen w-full bg-slate-100">
// 				{" "}
// 				{/* Updated container for sticky footer */}
// 				<div className="flex-grow">
// 					{" "}
// 					{/* Content grows to take available space */}
// 					<div className="max-w-7xl w-full mx-auto px-4 md:px-6 lg:px-8 pt-20">
// 						<div className="flex flex-col text-slate-600 text-center pt-10">
// 							<h1 className="text-5xl font-semibold text-left">
// 								Let's Get in Touch!
// 							</h1>
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
// 							{/* WORKING FORM  */}
// 							{/* <div>
// 								<form onSubmit={handleSubmit}>
// 									<label htmlFor="name">Name:</label>
// 									<input
// 										value={name}
// 										onChange={(e) =>
// 											setName(e.target.value)
// 										}
// 										placeholder="Your Name"
// 									></input>
// 									<label htmlFor="email">Email:</label>
// 									<input
// 										value={email}
// 										onChange={(e) =>
// 											setEmail(e.target.value)
// 										}
// 										placeholder="example@gmail.com"
// 									></input>
// 									<label htmlFor="message">Message:</label>
// 									<input
// 										value={message}
// 										onChange={(e) =>
// 											setMessage(e.target.value)
// 										}
// 									></input>
// 									<button type="submit">Send Message</button>
// 								</form>
// 							</div> */}
// 							<div className="max-w-2xl mx-auto p-4">
// 								<form
// 									onSubmit={handleSubmit}
// 									className="flex flex-col space-y-6"
// 								>
// 									<div>
// 										<label
// 											htmlFor="name"
// 											className="block text-base font-medium text-slate-700"
// 										>
// 											Name:
// 										</label>
// 										<input
// 											id="name"
// 											type="text"
// 											value={name}
// 											onChange={(e) =>
// 												setName(e.target.value)
// 											}
// 											placeholder="Your Name"
// 											className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
// 										/>
// 									</div>

// 									<div>
// 										<label
// 											htmlFor="email"
// 											className="block text-base font-medium text-slate-700"
// 										>
// 											Email:
// 										</label>
// 										<input
// 											id="email"
// 											type="email"
// 											value={email}
// 											onChange={(e) =>
// 												setEmail(e.target.value)
// 											}
// 											placeholder="example@gmail.com"
// 											className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
// 										/>
// 									</div>

// 									<div>
// 										<label
// 											htmlFor="message"
// 											className="block text-base font-medium text-slate-700"
// 										>
// 											Message:
// 										</label>
// 										<textarea
// 											id="message"
// 											type="text"
// 											value={message}
// 											onChange={(e) =>
// 												setMessage(e.target.value)
// 											}
// 											className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
// 											row="5"
// 										/>
// 									</div>

// 									<button
// 										type="submit"
// 										className="mt-2 w-full bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"
// 									>
// 										Send Message
// 									</button>
// 								</form>
// 							</div>
// 							<div className="pt-12 pb-12">
// 								<Socials />
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				<div className=" max-w-7xl w-full mx-auto px-4 md:px-6 lg:px-8">
// 					<Footer />
// 				</div>
// 			</div>
// 		</React.Fragment>
// 	);
// };

// export default Contact;
import React, { useEffect, useState } from "react";
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
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	const [email, setEmail] = useState("");
	const handleSubmit = async (event) => {
		event.preventDefault();
		if (name && email && message) {
			try {
				const response = await fetch("/.netlify/functions/send", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						name,
						email,
						message,
					}),
				});
				const data = await response.json();

				if (response.ok) {
					console.log("submitted successfully");
					setName("");
					setEmail("");
					setMessage("");
				} else {
					throw new Error(data.message || "Something went wrong");
				}
			} catch (error) {
				console.log(error);
			}
		} else {
			console.log("Please fill out all fields");
		}
	};
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
				<div className="flex-grow">
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
								. Alternatively, you can use the contact form
								below to get in touch. Simply fill out the
								required fields and I'll get back to you as soon
								as possible.
							</p>
							<div className="flex justify-center">
								<div className="w-full max-w-lg p-4">
									<form
										onSubmit={handleSubmit}
										className="flex flex-col space-y-6"
									>
										<div>
											<label
												htmlFor="name"
												className="block text-base font-medium text-slate-700 "
											>
												Name:
											</label>
											<input
												id="name"
												type="text"
												value={name}
												onChange={(e) =>
													setName(e.target.value)
												}
												placeholder="Your Name"
												className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
											/>
										</div>

										<div>
											<label
												htmlFor="email"
												className="block text-base font-medium text-slate-700"
											>
												Email:
											</label>
											<input
												id="email"
												type="email"
												value={email}
												onChange={(e) =>
													setEmail(e.target.value)
												}
												placeholder="example@gmail.com"
												className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
											/>
										</div>

										<div>
											<label
												htmlFor="message"
												className="block text-base font-medium text-slate-700"
											>
												Message:
											</label>
											<textarea
												id="message"
												value={message}
												onChange={(e) =>
													setMessage(e.target.value)
												}
												className="mt-1 block w-full px-3 py-4 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
												rows="5"
											/>
										</div>

										<button
											type="submit"
											className="mt-2 w-full bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"
										>
											Send Message
										</button>
									</form>
								</div>
							</div>
							<div className="pt-12 pb-12">
								<Socials />
							</div>
						</div>
					</div>
				</div>
				<div className="max-w-7xl w-full mx-auto px-4 md:px-6 lg:px-8">
					<Footer />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
