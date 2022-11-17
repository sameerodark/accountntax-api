import bcrypt from "bcryptjs";
import config from "config";
import jwt from "jsonwebtoken";
import moment from "moment";

import HttpException from "@exceptions/HttpException";
import { DataStoredInToken, TokenData } from "@interfaces/auth.interface";
import { User } from "@interfaces/users.interface";
import { isEmpty } from "@utils/util";

import UserService from "@services/v1/users.service";
import MSG from "@utils/locale.en.json";

class AuthService {

	public userService = new UserService();

	public async login(userData: any, res: any): Promise<any> {

		const findUser = await this.userService.findUserByEmail(userData.email);

		return findUser;

	}



}

export default AuthService;
