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
				<span className="text-sm font-semibold">
					Mail me at {INFO.main.email}
				</span>
			</a>
		</div>
	);
};

export default Socials;
