import { DataExporter } from "./DataExporter";
import { writeFileSync, existsSync, mkdirSync } from "fs";
import { dirname } from "path";

export class XmlExporter extends DataExporter {
  private static readonly PATH = './dist/users.xml';

  protected render(): string {
    const users = this.data.map(u =>
      `  <user>\n    <id>${u.id}</id>\n    <name>${u.name}</name>\n    <email>${u.email}</email>\n    <phone>${u.phone}</phone>\n  </user>`
    ).join('\n');
    return `<?xml version="1.0" encoding="UTF-8"?>\n<users>\n${users}\n</users>`;
  }

  protected afterRender(): void {
    this.result += `\n<!-- Експорт згенеровано: ${new Date().toISOString()} -->`;
  }

  protected save(): void {
    const dir = dirname(XmlExporter.PATH);
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    writeFileSync(XmlExporter.PATH, this.result, 'utf-8');
  }
}
