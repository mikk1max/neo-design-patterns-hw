import { injectable, multiInject } from 'inversify';
import { INotificationChannel, INotificationService, IUser } from '../core/interfaces';
import { TYPES } from '../core/types';

@injectable()
export class NotificationService implements INotificationService {
  constructor(
    @multiInject(TYPES.INotificationChannel)
    private readonly channels: INotificationChannel[]
  ) {}

  notify(user: IUser, message: string): void {
    for (const channel of this.channels) {
      channel.send(user, message);
    }
  }
}
