import axios from "axios";

const httpClient = axios.create({ baseURL: "https://isnewart.fly.dev" });

export { httpClient };
