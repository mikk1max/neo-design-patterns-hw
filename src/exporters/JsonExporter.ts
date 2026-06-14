import { DataExporter } from "./DataExporter";
import { writeFileSync, existsSync, mkdirSync } from "fs";
import { dirname } from "path";

export class JsonExporter extends DataExporter {
  private static readonly PATH = './dist/users.json';

  protected render(): string {
    return JSON.stringify(this.data, null, 2);
  }

  protected save(): void {
    const dir = dirname(JsonExporter.PATH);
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    writeFileSync(JsonExporter.PATH, this.result, 'utf-8');
  }
}
