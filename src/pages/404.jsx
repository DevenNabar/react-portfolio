import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";
import NavBar from "../components/common/navBar";
import INFO from "../data/user";

const Notfound = () => {
	useEffect(() => {
		document.title = `404 | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>
			<div className="h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-slate-200 to-slate-300">
				<NavBar />
				<div className="flex flex-col h-full pt-28">
					<div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
						<div className="text-8xl font-bold text-red-600  pt-4">
							404
						</div>
						<div className="text-5xl font-bold text-slate-600 pt-4">
							Oopsieee! <FontAwesomeIcon icon={faFaceSadTear} />
						</div>
						<div className="text-lg text-slate-500 my-8 text-center ">
							The page you're looking for cannot be found.
							<br />
							The requested URL "{window.location.href}" was not
							found on this server.
						</div>

						<a
							href="/"
							className=" border-slate-400 border-2 text-base bg-link text-slate-600 py-4 px-8 rounded-full transition duration-300 ease-in-out hover:bg-emerald-200 hover:text-slate-500 hover:scale-110 hover:border-emerald-200"
						>
							Go back to the home page
						</a>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Notfound;
