import { injectable } from 'inversify';
import { ILogger } from '../core/interfaces';

@injectable()
export class Logger implements ILogger {
  log(message: string): void {
    console.log(`[LOG] ${message}`);
  }
}
