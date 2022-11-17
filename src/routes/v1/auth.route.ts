import { Router } from "express";

import Route from "@interfaces/routes.interface";

import validateResourceMW from "@/middlewares/body.middlewares";

import AuthController from "@controllers/v1/auth.controller";
import { AuthSchema } from "@dtos/auth.dto";

class AuthRoute implements Route {

	public path = "/api/v1/auth";
	public router = Router();

	public authController = new AuthController();

	constructor() {
		this.initializeRoutes();
	}

	private initializeRoutes() {

		this.router.get(
			`${this.path}/server-status`,
			this.authController.checkServerStatus
		);

		this.router.post(
			`${this.path}/login`,
			validateResourceMW(AuthSchema.login),
			this.authController.login
		);

		this.router.post(
			`${this.path}/signup/user`,
			validateResourceMW(AuthSchema.signupUser),
			this.authController.signUpUser
		);


	}
}

export default AuthRoute;
