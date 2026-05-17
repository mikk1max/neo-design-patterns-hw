import { INotificationChannel, INotificationService, IUser } from '../core/interfaces';

export class NotificationService implements INotificationService {
  constructor(private readonly channels: INotificationChannel[]) {}

  notify(user: IUser, message: string): void {
    for (const channel of this.channels) {
      channel.send(user, message);
    }
  }
}
