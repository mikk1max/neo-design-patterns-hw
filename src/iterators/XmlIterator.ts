import { readFileSync } from "fs";
import { UserData } from "../data/UserData";
import { XMLParser } from "fast-xml-parser";

export class XmlIterator implements Iterable<UserData> {
  constructor(private readonly filePath: string) {}

  [Symbol.iterator](): Iterator<UserData> {
    const content = readFileSync(this.filePath, 'utf-8');
    const parser = new XMLParser({ ignoreAttributes: false });
    const parsed = parser.parse(content);
    const raw = parsed.users?.user ?? [];
    const users: UserData[] = (Array.isArray(raw) ? raw : [raw]).map((u: Record<string, unknown>) => ({
      id: Number(u['id']),
      name: String(u['name']),
      email: String(u['email']),
      phone: String(u['phone']),
    }));
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
