import { User } from './models/User';
import { Logger } from './services/Logger';
import { EmailNotification } from './services/EmailNotification';
import { SMSNotification } from './services/SMSNotification';
import { PushNotification } from './services/PushNotification';
import { NotificationService } from './services/NotificationService';

const logger = new Logger();

const notificationService = new NotificationService([
  new EmailNotification(logger),
  new SMSNotification(logger),
  new PushNotification(logger),
]);

const user = new User('user@example.com', '+1234567890', 'device-token-123');

notificationService.notify(user, 'Ваш платіж оброблено успішно!');
