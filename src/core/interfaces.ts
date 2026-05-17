export interface IUser {
  readonly email: string;
  readonly phone: string;
  readonly deviceToken: string;
}

export interface ILogger {
  log(message: string): void;
}

export interface INotificationChannel {
  send(user: IUser, message: string): void;
}

export interface INotificationService {
  notify(user: IUser, message: string): void;
}
