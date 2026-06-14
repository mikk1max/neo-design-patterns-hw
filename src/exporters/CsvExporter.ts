import { DataExporter } from "./DataExporter";
import { writeFileSync, existsSync, mkdirSync } from "fs";
import { dirname } from "path";

export class CsvExporter extends DataExporter {
  private static readonly PATH = './dist/users.csv';

  protected render(): string {
    const header = 'id,name,email,phone';
    const rows = this.data.map(u => `${u.id},${u.name},${u.email},${u.phone}`);
    return [header, ...rows].join('\n');
  }

  protected save(): void {
    const dir = dirname(CsvExporter.PATH);
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    writeFileSync(CsvExporter.PATH, this.result, 'utf-8');
  }
}
