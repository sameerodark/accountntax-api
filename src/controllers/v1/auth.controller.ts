import { NextFunction, Request, Response } from "express";

import userService from "@services/v1/users.service";
import authService from "@services/v1/auth.service";

import MSG from "@utils/locale.en.json";

class AuthController {

	public authService = new authService();
	public userService = new userService();

	public checkServerStatus = async (req: Request, res: Response, next: NextFunction) => {
		try {

			res.status(200).json({
				status: 200,
				data: null,
				success: true,
				msg: MSG.SERVER_ACTIVE,
			});

		} catch (error) {
			console.log(' error i got ', error);
			res.status(400).json({ status: 400, data: null, success: false, msg: MSG.SOMETHING_WRONG });
			next(error);
		}
	};

	public signUpUser = async (req: Request, res: Response, next: NextFunction) => {
		try {

			const userData = req.body;

			const emailExistCheck = await this.userService.findUserByEmail(userData.email);
			if (emailExistCheck) {
				res.status(200).json({ status: 400, data: null, success: false, msg: MSG.EMAIL_IN_USE });
				return;
			}

			const mobileExistCheck = await this.userService.findUserByMobile(userData.mobile);
			if (mobileExistCheck) {
				res.status(200).json({ status: 400, data: null, success: false, msg: MSG.MOBILE_IN_USE });
				return;
			}

			const signupResponse = await this.userService.createUser(userData);
			
			res.status(200).json({
				status: 200,
				data: signupResponse,
				success: true,
				msg: MSG.SIGNUP_SUCCESS,
			});

		} catch (error) {
			console.log(' error i got ', error);
			res.status(400).json({ status: 400, data: null, success: false, msg: MSG.SOMETHING_WRONG });
			next(error);
		}
	};


	public login = async (req: Request, res: Response, next: NextFunction) => {
		try {

			const user = await this.authService.login(req.body, res);

			res.status(200).json({
				status: 200,
				data: user,
				success: true,
				msg: MSG.LOGIN_SUCCESS,
			});

		} catch (error) {
			console.log(' error i got ', error);
			res.status(400).json({ status: 400, data: null, success: false, msg: MSG.SOMETHING_WRONG });
			next(error);
		}
	};




}

export default AuthController; 
