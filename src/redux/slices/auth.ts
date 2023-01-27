import { login } from "@api/auth";
import { AUTH_DATA_STORAGE_KEY } from "@common/constants/localStorage";
import { BASE_ROUTE } from "@common/constants/router";
import { LoadingState } from "@common/enums/redux";
import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
  type Reducer,
} from "@reduxjs/toolkit";
import type { NavigateFunction } from "react-router-dom";

export type AuthState = Partial<AuthData> & {
  loading: LoadingState;
  error?: any;
};

const nullState: AuthState = {
  loading: LoadingState.IDLE,
  error: null,
};

const getInitialState = (): AuthState => {
  const data = localStorage.getItem(AUTH_DATA_STORAGE_KEY);
  return data ? JSON.parse(data) : nullState;
};

const loginThunk = createAsyncThunk(
  "auth/login",
  async (data: LoginReqData & { navigate: NavigateFunction }) => {
    const { navigate, ...loginData } = data;
    const result = await login(loginData);
    navigate(BASE_ROUTE);
    return result;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: getInitialState(),
  reducers: {
    logout: (state, action: PayloadAction) => {
      localStorage.removeItem(AUTH_DATA_STORAGE_KEY);
      return nullState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      loginThunk.fulfilled,
      (state, action: PayloadAction<AuthData>) => {
        localStorage.setItem(
          AUTH_DATA_STORAGE_KEY,
          JSON.stringify({ ...action.payload })
        );
        return {
          ...action.payload,
          loading: LoadingState.SUCCEEDED,
          error: null,
        };
      }
    );
  },
});

export const { logout: logoutAction } = authSlice.actions;
export { loginThunk as loginAction };

export default authSlice.reducer;
