import { NextFunction, Request, Response } from "express";

import userService from "@services/v1/users.service";
import authService from "@services/v1/auth.service";

import MSG from "@utils/locale.en.json";
import { isEmpty } from "@utils/util";

class AuthController {

	public authService = new authService();
	public userService = new userService();

	public checkUserEmailExist = async (req: Request, res: Response, next: NextFunction) => {
		try {

			const email: any = req.query.email;
			const emailExistCheck = await this.userService.findUserByEmail(email);

			if (isEmpty(emailExistCheck)) {
				res.status(200).json({ status: 200, data: emailExistCheck, success: true, msg: MSG.EMAIL_NOT_IN_USE });
			} else {
				res.status(200).json({ status: 200, data: emailExistCheck, success: false, msg: MSG.EMAIL_IN_USE });
			}

		} catch (error) {
			res.status(400).json({ status: 400, data: null, success: false, msg: MSG.SOMETHING_WRONG });
			next(error);
		}
	};

	public checkUserMobileExist = async (req: Request, res: Response, next: NextFunction) => {
		try {

			const mobile: any = req.query.mobile;
			const emailMobileCheck = await this.userService.findUserByMobile(mobile);

			if (isEmpty(emailMobileCheck)) {
				res.status(200).json({ status: 200, data: emailMobileCheck, success: true, msg: MSG.MOBILE_NOT_IN_USE });
			} else {
				res.status(200).json({ status: 200, data: emailMobileCheck, success: false, msg: MSG.MOBILE_IN_USE });
			}

		} catch (error) {
			res.status(400).json({ status: 400, data: null, success: false, msg: MSG.SOMETHING_WRONG });
			next(error);
		}
	};

}

export default AuthController; 
