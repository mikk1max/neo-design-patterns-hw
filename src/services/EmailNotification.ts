import { injectable, inject } from 'inversify';
import { INotificationChannel, ILogger, IUser } from '../core/interfaces';
import { TYPES } from '../core/types';

@injectable()
export class EmailNotification implements INotificationChannel {
  constructor(@inject(TYPES.ILogger) private readonly logger: ILogger) {}

  send(user: IUser, message: string): void {
    this.logger.log(`Sending EMAIL to ${user.email}`);
    console.log(`Email sent to ${user.email}: ${message}`);
  }
}
