import {
  LOGIN_API_ENDPOINT,
  SIGNUP_API_ENDPOINT,
} from "@common/constants/http";
import http from "./_base";

export const login = async (data: LoginReqData) => {
  const res = await http.post(LOGIN_API_ENDPOINT, data);
  const { result, token } = res.data;
  return {
    user: result,
    token,
  } as AuthData;
};

export const signup = (data: SignupReqData) => {
  return http.post(SIGNUP_API_ENDPOINT, data);
};
