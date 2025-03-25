import { FastifyRequest, FastifyReply } from "fastify";

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {
	try {
		const authorization = request.headers.authorization;

		if (!authorization) {
			return reply.status(401).send({ message: "Unauthorized, token not provided" });
		}

		await request.jwtVerify();
	} catch (error) {
		return reply.status(401).send({ message: "Invalid token" });
	}
}
