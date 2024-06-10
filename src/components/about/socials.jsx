// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import {
// 	// faTwitter,
// 	faGithub,
// 	faLinkedin,
// 	// faInstagram,
// } from "@fortawesome/free-brands-svg-icons";

// import INFO from "../../data/user";

// import "./styles/socials.css";

// const Socials = () => {
// 	return (
// 		<div className="socials">
// 			{/* <div className="social">
// 				<a href={INFO.socials.twitter} target="_blank" rel="noreferrer">
// 					<div className="social-icon">
// 						<FontAwesomeIcon
// 							icon={faTwitter}
// 							className="social-icon"
// 						/>
// 					</div>
// 					<div className="social-text">Follow on Twitter</div>
// 				</a>
// 			</div> */}

// 			<div className="social">
// 				<a href={INFO.socials.github} target="_blank" rel="noreferrer">
// 					<div className="social-icon">
// 						<FontAwesomeIcon
// 							icon={faGithub}
// 							className="social-icon"
// 						/>
// 					</div>
// 					<div className="social-text">Follow on GitHub</div>
// 				</a>
// 			</div>

// 			<div className="social">
// 				<a
// 					href={INFO.socials.linkedin}
// 					target="_blank"
// 					rel="noreferrer"
// 				>
// 					<div className="social-icon">
// 						<FontAwesomeIcon
// 							icon={faLinkedin}
// 							className="social-icon"
// 						/>
// 					</div>
// 					<div className="social-text">Follow on LinkedIn</div>
// 				</a>
// 			</div>

// 			{/* <div className="social">
// 				<a
// 					href={INFO.socials.instagram}
// 					target="_blank"
// 					rel="noreferrer"
// 				>
// 					<div className="social-icon">
// 						<FontAwesomeIcon
// 							icon={faInstagram}
// 							className="social-icon"
// 						/>
// 					</div>
// 					<div className="social-text">Follow on Instagram</div>
// 				</a>
// 			</div> */}

// 			<div className="email">
// 				<div className="email-wrapper">
// 					<a
// 						href={`mailto:${INFO.main.email}`}
// 						target="_blank"
// 						rel="noreferrer"
// 					>
// 						<div className="social-icon">
// 							<FontAwesomeIcon icon={faEnvelope} />
// 						</div>

// 						<div className="social-text">{INFO.main.email}</div>
// 					</a>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Socials;

// Tailwind CSS
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

const Socials = () => {
	return (
		<div className="space-y-4">
			{/* GitHub Social Link */}
			<a
				href={INFO.socials.github}
				target="_blank"
				rel="noreferrer"
				className="flex items-center space-x-3 text-secondary no-underline"
			>
				<FontAwesomeIcon icon={faGithub} className="text-xl" />
				<span className="text-sm font-semibold">Follow on GitHub</span>
			</a>

			{/* LinkedIn Social Link */}
			<a
				href={INFO.socials.linkedin}
				target="_blank"
				rel="noreferrer"
				className="flex items-center space-x-3 text-secondary no-underline"
			>
				<FontAwesomeIcon icon={faLinkedin} className="text-xl" />
				<span className="text-sm font-semibold">
					Follow on LinkedIn
				</span>
			</a>

			{/* Email Link */}
			<a
				href={`mailto:${INFO.main.email}`}
				target="_blank"
				rel="noreferrer"
				className="flex items-center space-x-3 text-secondary no-underline"
			>
				<FontAwesomeIcon icon={faEnvelope} className="text-xl" />
				<span className="text-sm font-semibold">{INFO.main.email}</span>
			</a>
		</div>
	);
};

export default Socials;
