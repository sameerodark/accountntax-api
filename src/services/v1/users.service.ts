import bcrypt from "bcryptjs";
import Mongoose from "mongoose";

import HttpException from "@exceptions/HttpException";
import { User } from "@interfaces/users.interface";
import userModel from "@models/users.model";
import { isEmpty } from "@utils/util";
import Helper from "@/utils/helper";

import MSG from "@utils/locale.en.json";

class UserService {

	public users = userModel;

	public async findUserByEmail(userEmail: string): Promise<User> {

		const findUser: User = await this.users.findOne({
			email: userEmail,
			isDeleted: false,
		});

		return findUser;

	}

	public async findUserByMobile(userMobile: string): Promise<User> {

		const findUser = await this.users.findOne({
			mobile: userMobile,
			isDeleted: false,
		});

		return findUser;
	}

	public async createUser(userData: any): Promise<User> {

		const hashedPassword = await bcrypt.hash(userData.password, 10);
		const createUserData = await this.users.create({ ...userData, password: hashedPassword });

		return createUserData;
	}

}


export default UserService;
