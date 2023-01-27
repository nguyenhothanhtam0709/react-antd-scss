import axios from "axios";
import { env } from "@common/config/env";
import { AUTH_DATA_STORAGE_KEY } from "@common/constants/localStorage";

const http = axios.create({
  baseURL: env.VITE_API_URL,
});
http.interceptors.request.use((req) => {
  const data = localStorage.getItem(AUTH_DATA_STORAGE_KEY);
  if (data) {
    const authData = JSON.parse(data) as AuthData;
    req.headers.Authorization = `Bearer ${authData.token}`;
  }
  return req;
});

export default http;
