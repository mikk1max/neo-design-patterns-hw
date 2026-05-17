import 'reflect-metadata';
import { Container } from 'inversify';
import { TYPES } from './core/types';
import { ILogger, INotificationChannel, INotificationService } from './core/interfaces';
import { Logger } from './services/Logger';
import { EmailNotification } from './services/EmailNotification';
import { SMSNotification } from './services/SMSNotification';
import { PushNotification } from './services/PushNotification';
import { NotificationService } from './services/NotificationService';
import { User } from './models/User';

const container = new Container();
container.bind<ILogger>(TYPES.ILogger).to(Logger).inSingletonScope();
container.bind<INotificationChannel>(TYPES.INotificationChannel).to(EmailNotification);
container.bind<INotificationChannel>(TYPES.INotificationChannel).to(SMSNotification);
container.bind<INotificationChannel>(TYPES.INotificationChannel).to(PushNotification);
container.bind<INotificationService>(TYPES.INotificationService).to(NotificationService);

const notificationService = container.get<INotificationService>(TYPES.INotificationService);
const user = new User('user@example.com', '+1234567890', 'device-token-123');

notificationService.notify(user, 'Ваш платіж оброблено успішно!');
