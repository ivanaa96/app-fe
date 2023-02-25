import axios, { AxiosInstance } from "axios";

export default class HttpService {
	protected readonly instance: AxiosInstance;

	constructor() {
		this.instance = axios.create({
			baseURL: process.env.REACT_APP_API_URL,
		});

		this.instance.interceptors.request.use((config) => {
			const token = localStorage.getItem("token");
			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
			return config;
		});
	}
}
