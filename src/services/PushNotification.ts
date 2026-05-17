import { injectable, inject } from 'inversify';
import { INotificationChannel, ILogger, IUser } from '../core/interfaces';
import { TYPES } from '../core/types';

@injectable()
export class PushNotification implements INotificationChannel {
  constructor(@inject(TYPES.ILogger) private readonly logger: ILogger) {}

  send(user: IUser, message: string): void {
    this.logger.log(`Sending PUSH to ${user.deviceToken}`);
    console.log(`Push sent to ${user.deviceToken}: ${message}`);
  }
}
