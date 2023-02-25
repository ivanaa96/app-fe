import HttpClient from "./HttpService";
import { User, NewUser } from "../types/userTypes";

class UserService extends HttpClient {
	async login(credentials: User) {
		try {
			const data = await this.instance.post("auth/login", credentials);
			const { token, userData } = data.data;
			localStorage.setItem("token", token);

			return userData;
		} catch (error: Error | any) {
			if (error.response.data.errors) {
				throw new Error(JSON.stringify(error.response.data.errors[0].msg));
			} else {
				throw new Error(error?.response.data.message);
			}
		}
	}

	async register(newUser: NewUser) {
		try {
			const { data } = await this.instance.post("auth/register", newUser);
			const { token, user } = data;
			localStorage.setItem("token", token);

			return user;
		} catch (error: Error | any) {
			throw new Error(error.response.data.errors[0].msg);
		}
	}

	async logout() {
		await this.instance.post("auth/logout");
		localStorage.removeItem("token");
	}

	async getUser() {
		const { data } = await this.instance.get("auth/me");
		return data;
	}
}

export default new UserService();
