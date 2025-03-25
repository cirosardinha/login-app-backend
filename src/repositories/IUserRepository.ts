import { User } from "../models/User";

export interface IUserRepository {
	register(user: User): Promise<void>;
	findByEmail(email: string): Promise<User | null>;
	list(): Promise<User[]>;
}
