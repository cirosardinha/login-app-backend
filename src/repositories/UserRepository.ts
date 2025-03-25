import { User } from "../models/User";
import UserModel from "../models/UserModel";
import { IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository {
	async register(user: User): Promise<void> {
		const newUser = new UserModel({
			name: user.name,
			email: user.email,
			password: user.password,
		});
		await newUser.save();
	}

	async list(): Promise<User[]> {
		const users = await UserModel.find().exec();

		return users.map((user) => {
			const userObj = new User(user.name, user.email, user.password);
			userObj.id = user._id.toString();
			return userObj;
		});
	}
	async findByEmail(email: string): Promise<User | null> {
		const user = await UserModel.findOne({ email }).exec();
		return user ? new User(user.name, user.email, user.password) : null;
	}
}
