import { FastifyInstance } from "fastify";
import { authenticate } from "../middlewares/authenticate";
import { UserController } from "../controllers/UserControler";

const user = new UserController();

export async function privateRoutes(fastify: FastifyInstance) {
	fastify.addHook("onRequest", authenticate);

	fastify.get("/list", async (request, reply) => {
		return user.handleList(request, reply);
	});
}
