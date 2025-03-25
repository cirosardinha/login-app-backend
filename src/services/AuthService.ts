import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

interface UserPayload {
	id?: string;
	email: string;
}

class AuthService {
	async hashPassword(password: string): Promise<string> {
		try {
			return await bcrypt.hash(password, 10);
		} catch (error) {
			throw new Error("Error during password hashing");
		}
	}

	async comparePassword(password: string, hash: string): Promise<boolean> {
		try {
			return await bcrypt.compare(password, hash);
		} catch (error) {
			throw new Error("Error during password comparison");
		}
	}

	async generateToken(user: UserPayload): Promise<string> {
		if (!process.env.JWT_SECRET) {
			throw new Error("JWT_SECRET is not defined");
		}

		try {
			return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "60m" });
		} catch (error) {
			throw new Error("Error during token generation");
		}
	}
}

export default new AuthService();
