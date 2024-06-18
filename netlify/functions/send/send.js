const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.MONGODB_URI);
const clientPromise = mongoClient.connect();

const handler = async (event) => {
	try {
		const db = (await clientPromise).db("deven");
		const enquiries = db.collection("enquiries");

		const body = JSON.parse(event.body);

		await enquiries.insertOne(body);

		return {
			statusCode: 200,
			body: JSON.stringify({ message: "Enquiry added successfully" }),
		};
	} catch (error) {
		console.log("error", error);
		return {
			statusCode: 500,
			body: JSON.stringify({
				success: false,
				message: "Something went wrong. Try again later",
			}),
		};
	}
};

module.exports = { handler };
