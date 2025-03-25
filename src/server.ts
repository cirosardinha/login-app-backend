import Fastify from "fastify";
import dotenv from "dotenv";
import fastifyJwt from "@fastify/jwt";
import fastifyCors from "@fastify/cors";

import { privateRoutes } from "./routes/private.routes";
import publicRoutes from "./routes/public.routes";
import connectDB from "./db";

dotenv.config();

const fastify = Fastify();

fastify.register(fastifyCors, { origin: "*" });

fastify.register(fastifyJwt, { secret: process.env.JWT_SECRET || "" });

connectDB();

fastify.register(publicRoutes, { prefix: "/user" });
fastify.register(privateRoutes, { prefix: "/users" });

const start = async () => {
	try {
		await fastify.listen({ port: parseInt(process.env.PORT || "3333") });
		console.log(`HTTP server running on port: ${process.env.PORT}`);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};

start();
