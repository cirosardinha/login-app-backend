import mongoose from "mongoose";

const connectDB = async () => {
	mongoose.connect(process.env.MONGODB_URL || "");

	mongoose.connection.on("connected", () => {
		console.log("MongoDB connected!");
	});

	mongoose.connection.on("error", (err) => {
		console.log("MongoDB connection error:", err);
	});
};

export default connectDB;
