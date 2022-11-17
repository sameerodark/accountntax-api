import { model, Schema, Document } from "mongoose";
import { User } from "@interfaces/users.interface";

const SOCIALS = ["apple", "google", "facebook"];
const GENDER = ["", "male", "female"];

const userSchema: Schema = new Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		mobile: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true,
		},
		profileImage: {
			type: String,
			default: "default.png",
		},
		address: {
			type: String,
			default: "",
		},
		gender: {
			type: String,
			enum: GENDER,
			default: "",
		},
		dob: {
			type: Date,
		},
		status: {
			type: Boolean,
			default: false,
		},
		isMobileVerified: {
			type: Boolean,
			default: false,
		},
		isEmailVerified: {
			type: Boolean,
			default: false,
		},
		isDeleted: {
			type: Boolean,
			default: false,
		},
		device: {
			id: String,
			token: String,
		},
		social: {
			type: {
				type: String,
				enum: SOCIALS,
			},
			token: {
				type: String,
			},
		},

		resetToken: String,
	},
	{
		timestamps: true,
	}
);

userSchema.index({ location: "2dsphere" });
userSchema.index({ name: "text" });

const userModel = model<User & Document>("User", userSchema);

export default userModel;
