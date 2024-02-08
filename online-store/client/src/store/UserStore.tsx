import { makeAutoObservable } from "mobx";
interface IUser {
  name?: string;
  user?: string;
}

interface IUserStore {
  _isAuth: boolean;
  _user: IUser;
}

export default class UserStore implements IUserStore {
  _isAuth: boolean;
  _user: IUser;
  constructor() {
    this._isAuth = false;
    this._user = {};
    makeAutoObservable(this);
  }

  setisAuth(bool: boolean) {
    this._isAuth = bool;
  }

  setUser(user: IUser) {
    this._user = user;
  }

  get isAuth() {
    return this._isAuth;
  }

  get user() {
    return this._user;
  }
}
