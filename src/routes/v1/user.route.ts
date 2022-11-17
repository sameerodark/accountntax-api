import { Router } from "express";

import Route from "@interfaces/routes.interface";

import validateResourceMW from "@/middlewares/body.middlewares";
import paramsValidations from "@/middlewares/query.middlewares";

import UserController from "@controllers/v1/user.controller";
import { UserSchema } from "@dtos/user.dto";

class AuthRoute implements Route {

	public path = "/api/v1/user";
	public router = Router();

	public userController = new UserController();

	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {

		this.router.get(
			`${this.path}/email-exist`,
			paramsValidations(UserSchema.emailExist),
			this.userController.checkUserEmailExist
		);

		this.router.get(
			`${this.path}/mobile-exist`,
			paramsValidations(UserSchema.mobileExist),
			this.userController.checkUserMobileExist
		);

	}
}

export default AuthRoute;
