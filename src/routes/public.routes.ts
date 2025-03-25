import { FastifyInstance } from "fastify";
import { AuthController } from "../controllers/AuthController";
import { UserController } from "../controllers/UserControler";

const auth = new AuthController();
const user = new UserController();

export async function publicRoutes(fastify: FastifyInstance) {
	fastify.post("/register", (request, reply) => {
		return user.handleRegister(request, reply);
	});
	fastify.post("/login", (request, reply) => {
		return auth.handleLogin(request, reply);
	});
}

export default publicRoutes;
