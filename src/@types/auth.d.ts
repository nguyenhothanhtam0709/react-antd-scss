declare type LoginReqData = {
  email: string;
  password: string;
};

declare type SignupReqData = {
  email: string;
  password: string;
};

declare type UserData = {
  _id: string;
  email: string;
};

declare type AuthData = {
  user: UserData;
  token: string;
};
