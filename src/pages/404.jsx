// import React, { useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

// import NavBar from "../components/common/navBar";

// import INFO from "../data/user";

// import "./styles/404.css";

// const Notfound = () => {
// 	useEffect(() => {
// 		document.title = `404 | ${INFO.main.title}`;
// 	}, []);

// 	return (
// 		<React.Fragment>
// 			<div className="not-found page-content">
// 				<NavBar />
// 				<div className="content-wrapper">
// 					<div className="notfound-container">
// 						<div className="notfound-message">
// 							<div className="notfound-title">
// 								Oops! <FontAwesomeIcon icon={faFaceSadTear} />
// 							</div>
// 							<div className="not-found-message">
// 								We can't seem to find the page you're looking
// 								for.
// 								<br />
// 								The requested URL "{window.location.href}" was
// 								not found on this server.
// 							</div>
// 							<a href="/" className="not-found-link">
// 								Go back to the home page
// 							</a>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</React.Fragment>
// 	);
// };

// export default Notfound;
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
			<div className="h-screen overflow-hidden bg-gradient-to-tl from-slate-50 to-rose-100 ">
				<NavBar />
				<div className="flex flex-col h-full pt-28">
					<div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
						<div className="text-7xl font-bold text-slate-600 pt-4">
							404
						</div>
						<div className="text-5xl font-bold text-slate-600 pt-4">
							Oops! <FontAwesomeIcon icon={faFaceSadTear} /> Sorry
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
