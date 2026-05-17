import { injectable, inject } from 'inversify';
import { INotificationChannel, ILogger, IUser } from '../core/interfaces';
import { TYPES } from '../core/types';

@injectable()
export class SMSNotification implements INotificationChannel {
  constructor(@inject(TYPES.ILogger) private readonly logger: ILogger) {}

  send(user: IUser, message: string): void {
    this.logger.log(`Sending SMS to ${user.phone}`);
    console.log(`SMS sent to ${user.phone}: ${message}`);
  }
}
