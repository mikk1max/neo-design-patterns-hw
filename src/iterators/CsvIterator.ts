import { readFileSync } from "fs";
import { UserData } from "../data/UserData";

export class CsvIterator implements Iterable<UserData> {
  constructor(private readonly filePath: string) {}

  [Symbol.iterator](): Iterator<UserData> {
    const content = readFileSync(this.filePath, 'utf-8');
    const [, ...rows] = content.trim().split('\n');
    const users: UserData[] = rows.map(row => {
      const [id, name, email, phone] = row.split(',');
      return { id: Number(id), name, email, phone };
    });
    let index = 0;
    return {
      next(): IteratorResult<UserData> {
        if (index < users.length) {
          return { value: users[index++], done: false };
        }
        return { value: undefined as unknown as UserData, done: true };
      },
    };
  }
}
