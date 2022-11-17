process.env["NODE_CONFIG_DIR"] = __dirname + "/configs";

import "dotenv/config";
import App from "@/app";
import AuthRoute from "@routes/v1/auth.route";
import UserRoute from "@routes/v1/user.route";

//api routes

import validateEnv from "@utils/validateEnv";
validateEnv();

const app = new App([
	new AuthRoute(),
	new UserRoute(),
]);

app.listen();
