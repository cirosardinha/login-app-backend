import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
	name: string;
	email: string;
	password: string;
}

const UserSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, "Please fill a valid email address"],
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const UserModel = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
