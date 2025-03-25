import { FastifyRequest, FastifyReply } from "fastify";
import { UserService } from "../services/UserService";

interface IRegisterRequest {
	name: string;
	email: string;
	password: string;
}

export class UserController {
	constructor(private userService: UserService = new UserService()) {}
	async handleRegister(request: FastifyRequest, reply: FastifyReply): Promise<void> {
		const { name, email, password } = request.body as IRegisterRequest;

		try {
			await this.userService.register(name, email, password);

			reply.status(201).send({ message: "User created" });
		} catch (error: any) {
			reply.status(400).send({ message: error.message || "Error" });
		}
	}

	async handleList(request: FastifyRequest, reply: FastifyReply): Promise<void> {
		try {
			const users = await this.userService.list();
			reply.status(200).send(users);
		} catch (error: any) {
			reply.status(400).send({ message: error.message || "Error" });
		}
	}
}
