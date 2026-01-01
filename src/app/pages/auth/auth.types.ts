export interface IRegisterUser {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  avatarPublicId?: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}
