const FRONTEND = [
	{
		name: "React",
		image: `${process.env.REACT_APP_BUCKET_URL}/technology/react.svg`,
	},
	{
		name: "Vite",
		image: `${process.env.REACT_APP_BUCKET_URL}/technology/vite.svg`,
	},
	{
		name: "NextJS",
		image: `${process.env.REACT_APP_BUCKET_URL}/technology/nextjs.svg`,
	},
	{
		name: "Tailwind",
		image: `${process.env.REACT_APP_BUCKET_URL}/technology/tailwind.svg`,
	},
];

const BACKEND = [
	{
		name: "Node",
		image: `${process.env.REACT_APP_BUCKET_URL}/technology/node.svg`,
	},
	{
		name: "Express",
		image: `${process.env.REACT_APP_BUCKET_URL}/technology/express.svg`,
	},
	{
		name: "Python",
		image: `${process.env.REACT_APP_BUCKET_URL}/technology/python.svg`,
	},
];

const CONTAINERIZATION = [
	{
		name: "Docker",
		image: `${process.env.REACT_APP_BUCKET_URL}/technology/docker.svg`,
	},
	{
		name: "Kubernetes",
		image: `${process.env.REACT_APP_BUCKET_URL}/technology/kubernetes.svg`,
	},
];

const DATABASE = [
	{
		name: "MongoDB",
		image: `${process.env.REACT_APP_BUCKET_URL}/technology/mongodb.svg`,
	},
	{
		name: "Supabase",
		image: `${process.env.REACT_APP_BUCKET_URL}/technology/supabase.svg`,
	},
	{
		name: "MySQL",
		image: `${process.env.REACT_APP_BUCKET_URL}/technology/mysql.svg`,
	},
	{
		name: "Postgres",
		image: `${process.env.REACT_APP_BUCKET_URL}/technology/postgres.svg`,
	},

	{
		name: "Elasticsearch",
		image: `${process.env.REACT_APP_BUCKET_URL}/technology/elasticsearch.svg`,
	},
];

const CLOUD = [
	{
		name: "AWS",
		image: `${process.env.REACT_APP_BUCKET_URL}/technology/aws.svg`,
	},
	{
		name: "GCP",
		image: `${process.env.REACT_APP_BUCKET_URL}/technology/gcp.svg`,
	},
	{
		name: "Vercel",
		image: `${process.env.REACT_APP_BUCKET_URL}/technology/vercel.svg`,
	},
	{
		name: "Netlify",
		image: `${process.env.REACT_APP_BUCKET_URL}/technology/netlify.svg`,
	},
	{
		name: "Cloudflare",
		image: `${process.env.REACT_APP_BUCKET_URL}/technology/cloudflare.svg`,
	},
];

const AI = [
	{
		name: "OpenAI",
		image: `${process.env.REACT_APP_BUCKET_URL}/technology/openai.svg`,
	},
	{
		name: "HuggingFace",
		image: `${process.env.REACT_APP_BUCKET_URL}/technology/huggingface.svg`,
	},
	{
		name: "LlamaIndex",
		image: `${process.env.REACT_APP_BUCKET_URL}/technology/llamaindex.svg`,
	},
	// Langchain has a png format
	{
		name: "Langchain",
		image: `${process.env.REACT_APP_BUCKET_URL}/technology/langchain.png`,
	},
];

const ALL = [FRONTEND, BACKEND, DATABASE, AI, CONTAINERIZATION, CLOUD];

const FREQUENT = [
	{
		name: "Mongo",
		image: `${process.env.REACT_APP_BUCKET_URL}/technology/mongodb.svg`,
	},
	{
		name: "Express",
		image: `${process.env.REACT_APP_BUCKET_URL}/technology/express.svg`,
	},
	{
		name: "React",
		image: `${process.env.REACT_APP_BUCKET_URL}/technology/react.svg`,
	},
	{
		name: "Node",
		image: `${process.env.REACT_APP_BUCKET_URL}/technology/node.svg`,
	},
];

// const Technology = () => {
// 	return (
// 		<section className="bg-gray-200 mt-[-120px] pt-48 pb-16 px-4 md:mt-[-80px] text-center">
// 			<div className="container mx-auto">
// 				<h2 className="text-3xl font-bold mb-4">Technology</h2>
// 				<hr className="w-[10%] mx-auto border-2 border-green-500 opacity-100 my-6" />
// 				<p className="mb-1">My Technology Stack</p>
// 				<p className="mb-2">
// 					Most Frequently Used: <b>MERN STACK</b>
// 				</p>
// 				<div className="flex justify-center items-center flex-wrap">
// 					{FREQUENT.map((technology) => (
// 						<div
// 							key={technology.name}
// 							className="m-4 p-4 w-20 h-20 rounded-full bg-white shadow-lg transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
// 						>
// 							<img
// 								src={technology.image}
// 								alt={technology.name}
// 								className="w-full h-full"
// 							/>
// 						</div>
// 					))}
// 				</div>
// 				<p>{`Other technology ↓`}</p>
// 				{ALL.map((technology, index) => (
// 					<div
// 						className="flex justify-center items-center flex-wrap"
// 						key={index}
// 					>
// 						{technology.map((technology) => (
// 							<div
// 								key={technology.name}
// 								className="m-4 p-4 w-20 h-20 rounded-full bg-white shadow-lg transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
// 							>
// 								<img
// 									src={technology.image}
// 									alt={technology.name}
// 									className="w-full h-full"
// 								/>
// 							</div>
// 						))}
// 					</div>
// 				))}
// 			</div>
// 		</section>
// 	);
// };

const Technology = () => {
	return (
		<section className="bg-slate-100 mt-[-120px] pt-48 pb-16 px-4 md:mt-[-80px] text-center">
			<div className="container mx-auto">
				<div className="text-5xl font-semibold mb-4 text-slate-600 text-left pb-10">
					Technology
				</div>
				{/* <hr className="w-[10%] mx-auto border-2 border-emerald-500 opacity-100 my-6 text-left" /> */}
				{/* <p className="text-base mt-4 text-slate-600">
					My Technology Stack
				</p> */}
				<p className="mb-2 text-slate-600">
					Most Frequently Used:{" "}
					<b className="font-bold text-emerald-600">MERN STACK</b>
				</p>
				<div className="flex justify-center items-center flex-wrap">
					{FREQUENT.map((technology) => (
						<div
							key={technology.name}
							className="m-4 p-4 w-20 h-20 rounded-full bg-white transform transition duration-300  hover:-translate-y-1 hover:scale-110"
						>
							<img
								src={technology.image}
								alt={technology.name}
								className="w-full h-full"
							/>
						</div>
					))}
				</div>
				<p className="text-emerald-600 ">{`Other technology ↓`}</p>
				{ALL.map((technology, index) => (
					<div
						className="flex justify-center items-center flex-wrap"
						key={index}
					>
						{technology.map((tech) => (
							<div
								key={tech.name}
								className="m-4 p-4 w-20 h-20 rounded-full bg-white  transform transition duration-300  hover:-translate-y-1 hover:scale-110"
							>
								<img
									src={tech.image}
									alt={tech.name}
									className="w-full h-full"
								/>
							</div>
						))}
					</div>
				))}
			</div>
		</section>
	);
};

export default Technology;
