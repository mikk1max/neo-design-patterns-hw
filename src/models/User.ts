import { IUser } from '../core/interfaces';

export class User implements IUser {
  constructor(
    public readonly email: string,
    public readonly phone: string,
    public readonly deviceToken: string
  ) {}
}
