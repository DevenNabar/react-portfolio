import React from "react";
import EXPERIENCE from "../../data/experience";
//  START OF WORK EXPERIENCE COMPONENT

const WorkExp = () => {
	return (
		<div className="my-6">
			<div className="text-5xl font-semibold text-slate-600">
				Work Experience
			</div>
			{EXPERIENCE.map((exp, index) => (
				<div key={index} className="relative pl-8 sm:pl-32 py-6 group">
					<div className="font-caveat font-medium text-xl text-emerald-500 mb-1 sm:mb-0">
						{exp.title}
					</div>
					<div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-emerald-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-emerald-600 after:border-4 after:box-content after:border-emerald-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
						<time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
							{exp.date}
						</time>
						<div className="text-xl font-bold text-slate-600">
							{exp.company}
						</div>
					</div>
					<div className="text-slate-500">{exp.description}</div>
				</div>
			))}
		</div>
	);
};

// END OF COMPONENT
export default WorkExp;
