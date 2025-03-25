import { User } from "../models/User";
import { UserRepository } from "./../repositories/UserRepository";
import AuthService from "./AuthService";
export class UserService {
	constructor(private userRepository: UserRepository = new UserRepository()) {}

	async register(name: string, email: string, password: string): Promise<void> {
		if (!name || !email || !password) {
			throw new Error("All fields are required: name, email, and password");
		}

		try {
			const userAlreadyexists = await this.userRepository.findByEmail(email);

			if (userAlreadyexists) {
				throw new Error("User already exists");
			}

			const hashedPassword = await AuthService.hashPassword(password);

			const user = new User(name, email, hashedPassword);

			await this.userRepository.register(user);
		} catch (error: any) {
			throw new Error(error.message || "Error during user registration");
		}
	}

	async login(email: string, password: string): Promise<string> {
		if (!email || !password) {
			throw new Error("All fields are required: email and password");
		}

		try {
			const user = await this.userRepository.findByEmail(email);

			if (!user) {
				throw new Error("User not found");
			}

			const isPasswordValid = await AuthService.comparePassword(password, user.password);

			if (!isPasswordValid) {
				throw new Error("Invalid password");
			}

			const token = await AuthService.generateToken({ id: user.id, email: user.email });

			return token;
		} catch (error: any) {
			throw new Error(error.message || "Error during user login");
		}
	}

	async list(): Promise<{ id: string; name: string; email: string }[]> {
		const usersInfo = (await this.userRepository.list()).map((user) => {
			return {
				id: user.id,
				name: user.name,
				email: user.email,
			};
		});

		return usersInfo;
	}
}
