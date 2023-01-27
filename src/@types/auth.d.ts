declare type LoginReqData = {
  email: string;
  password: string;
};

declare type SignupFormData = {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
};

declare type UserData = {
  _id: string;
  email: string;
};

declare type AuthData = {
  user: UserData;
  token: string;
};
