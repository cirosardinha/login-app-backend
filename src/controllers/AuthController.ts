import { FastifyReply, FastifyRequest } from "fastify";
import { UserService } from "../services/UserService";

interface ILoginRequest {
	email: string;
	password: string;
}
export class AuthController {
	constructor(private userService: UserService = new UserService()) {}

	async handleLogin(request: FastifyRequest, reply: FastifyReply): Promise<void> {
		const { email, password } = request.body as ILoginRequest;

		try {
			const token = await this.userService.login(email, password);
			reply.status(200).send({ token });
		} catch (error: any) {
			reply.status(400).send({ message: error.message || "Error" });
		}
	}
}
